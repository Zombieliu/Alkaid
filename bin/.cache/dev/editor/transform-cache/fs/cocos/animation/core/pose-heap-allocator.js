System.register("q-bundled:///fs/cocos/animation/core/pose-heap-allocator.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/data/utils/asserts.js", "./pose.js", "./transform-array.js"], function (_export, _context) {
  "use strict";

  var TEST, assertIsTrue, Pose, TransformArray, PoseHeapAllocator, AllocationInfo, PosePage, MAX_POSE_PER_PAGE, allocationInfoTag, POSE_ALLOCATOR_DEBUG_FULL, POSE_INDEX_MASK, POSE_INDEX_BITS;
  function isPagedPose(pose) {
    return allocationInfoTag in pose;
  }
  function findRightmostSetBit(bits) {
    // Math.log(2) === -Infinity
    return bits === 0 ? Infinity : Math.log2(bits & -bits);
  }
  _export("PoseHeapAllocator", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      TEST = _virtualInternal253AconstantsJs.TEST;
    }, function (_coreDataUtilsAssertsJs) {
      assertIsTrue = _coreDataUtilsAssertsJs.assertIsTrue;
    }, function (_poseJs) {
      Pose = _poseJs.Pose;
    }, function (_transformArrayJs) {
      TransformArray = _transformArrayJs.TransformArray;
    }],
    execute: function () {
      MAX_POSE_PER_PAGE = 8;
      allocationInfoTag = Symbol('PoseHeapAllocator');
      POSE_ALLOCATOR_DEBUG_FULL = TEST;
      _export("PoseHeapAllocator", PoseHeapAllocator = class PoseHeapAllocator {
        constructor(transformCount, metaValueCount) {
          this._transformCount = 0;
          this._metaValueCount = 0;
          this._pages = [];
          this._allocatedCount = 0;
          /**
           * Index of the page that:
           * - All former pages are busy.
           * - This page and the following pages're possible having free location to allocate.
           */
          this._foremostPossibleFreePage = 0;
          this._transformCount = transformCount;
          this._metaValueCount = metaValueCount;
        }
        get allocatedCount() {
          return this._allocatedCount;
        }
        allocatePose() {
          ++this._allocatedCount;
          const {
            _pages: pages
          } = this;
          const nPages = pages.length;

          // Debug check our promise on `this._foremostPossibleFreePage`.
          if (POSE_ALLOCATOR_DEBUG_FULL) {
            for (let iPage = 0; iPage < this._foremostPossibleFreePage; ++iPage) {
              const page = pages[iPage];
              assertIsTrue(page.freeCount === 0);
            }
          }
          for (let iPage = this._foremostPossibleFreePage; iPage < nPages; ++iPage) {
            const page = pages[iPage];
            const pose = page.tryAllocate();
            if (pose) {
              pose[allocationInfoTag].pageIndex = iPage;
              if (page.freeCount === 0) {
                // Only step one, even the next page is not free.
                ++this._foremostPossibleFreePage;
              }
              return pose;
            }
          }
          const pose = this._allocatePoseInNewPage();
          // Update the flag, no matter if its capacity is 1.
          this._foremostPossibleFreePage = pose[allocationInfoTag].pageIndex;
          return pose;
        }
        destroyPose(pose) {
          assertIsTrue(isPagedPose(pose));
          const {
            _pages: pages
          } = this;
          const nPages = pages.length;
          const pageIndex = pose[allocationInfoTag].pageIndex;
          assertIsTrue(pageIndex >= 0 && pageIndex < nPages);
          const page = pages[pageIndex];
          page.deallocate(pose);
          --this._allocatedCount;

          // If the destruction performed on former page,
          // update the flag so that next allocation find from this.
          if (pageIndex < this._foremostPossibleFreePage) {
            assertIsTrue(page.freeCount > 0);
            this._foremostPossibleFreePage = pageIndex;
          }
        }
        _allocatePoseInNewPage() {
          const page = new PosePage(this._transformCount, this._metaValueCount, 4);
          const pageIndex = this._pages.length;
          this._pages.push(page);
          const pose = page.tryAllocate();
          assertIsTrue(pose); // Shall not fail
          pose[allocationInfoTag].pageIndex = pageIndex;
          return pose;
        }
      });
      AllocationInfo = class AllocationInfo {
        constructor() {
          /**
           * ((page index) << POSE_INDEX_BITS) + (pose index into page)
           */
          this._id = -1;
        }
        get pageIndex() {
          return this._id >> POSE_INDEX_BITS;
        }
        set pageIndex(value) {
          this._id &= POSE_INDEX_MASK;
          this._id |= value << POSE_INDEX_BITS;
        }
        get poseIndex() {
          return this._id & POSE_INDEX_MASK;
        }
        set poseIndex(value) {
          this._id &= ~POSE_INDEX_MASK;
          this._id |= value;
        }
      };
      POSE_INDEX_MASK = 0b111;
      POSE_INDEX_BITS = 3;
      assertIsTrue(POSE_INDEX_MASK + 1 >= MAX_POSE_PER_PAGE);
      PosePage = class PosePage {
        constructor(_transformCount, _metaValueCount, _capacity) {
          this._buffer = void 0;
          this._idleFlags = 0xF;
          this._poses = void 0;
          this._freeCount = 0;
          this._transformCount = _transformCount;
          this._metaValueCount = _metaValueCount;
          this._capacity = _capacity;
          const byteLength = (TransformArray.BYTES_PER_ELEMENT * _transformCount + Float64Array.BYTES_PER_ELEMENT * _metaValueCount) * _capacity;
          this._buffer = new ArrayBuffer(byteLength);
          this._poses = new Array(_capacity).fill(null);
          this._freeCount = _capacity;
        }
        get capacity() {
          return this._capacity;
        }
        get freeCount() {
          return this._freeCount;
        }
        tryAllocate() {
          var _poses$idlePoseIndex;
          const {
            _poses: poses,
            _idleFlags: idleFlags,
            _capacity: capacity
          } = this;
          const idlePoseIndex = findRightmostSetBit(idleFlags);
          if (idlePoseIndex >= capacity) {
            return null;
          }
          assertIsTrue(idlePoseIndex >= 0 && idlePoseIndex < poses.length);
          const pose = (_poses$idlePoseIndex = poses[idlePoseIndex]) !== null && _poses$idlePoseIndex !== void 0 ? _poses$idlePoseIndex : poses[idlePoseIndex] = this._createPose(idlePoseIndex);
          pose[allocationInfoTag].poseIndex = idlePoseIndex;
          this._idleFlags &= ~(1 << idlePoseIndex);
          assertIsTrue(this._freeCount > 0);
          --this._freeCount;
          return pose;
        }
        deallocate(pose) {
          const {
            _poses: poses
          } = this;
          const poseIndex = pose[allocationInfoTag].poseIndex;
          assertIsTrue(poseIndex >= 0 && poseIndex < poses.length);
          assertIsTrue(poses[poseIndex] === pose);
          // Set as idle
          this._idleFlags |= 1 << poseIndex;
          assertIsTrue(this._freeCount < this._capacity);
          ++this._freeCount;
        }
        _createPose(index) {
          const transformsByteLength = TransformArray.BYTES_PER_ELEMENT * this._transformCount;
          const baseOffset = (transformsByteLength + Float64Array.BYTES_PER_ELEMENT * this._metaValueCount) * index;
          const transforms = new TransformArray(this._buffer, baseOffset, this._transformCount);
          const metaValues = new Float64Array(this._buffer, baseOffset + transformsByteLength, this._metaValueCount);
          const pose = Pose._create(transforms, metaValues);
          pose[allocationInfoTag] = new AllocationInfo();
          return pose;
        }
      };
    }
  };
});