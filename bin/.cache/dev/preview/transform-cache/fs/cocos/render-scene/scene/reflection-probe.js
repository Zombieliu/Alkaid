System.register("q-bundled:///fs/cocos/render-scene/scene/reflection-probe.js", ["../../../../virtual/internal%253Aconstants.js", "./camera.js", "../../core/index.js", "../../rendering/define.js", "../../gfx/index.js", "../../asset/assets/render-texture.js"], function (_export, _context) {
  "use strict";

  var EDITOR, CameraAperture, CameraFOVAxis, CameraISO, CameraProjection, CameraShutter, CameraType, SKYBOX_FLAG, TrackingType, Color, Quat, Rect, toRadian, Vec2, Vec3, geometry, cclegacy, Vec4, CAMERA_DEFAULT_MASK, ClearFlagBit, RenderTexture, ProbeClearFlag, ProbeType, cameraDir, ReflectionProbe;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                             in the Software without restriction, including without limitation the rights to
                                                                                                                                                                                                                                                                                                                                                                                             use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
                                                                                                                                                                                                                                                                                                                                                                                             of the Software, and to permit persons to whom the Software is furnished to do so,
                                                                                                                                                                                                                                                                                                                                                                                             subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                             all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                            */
  _export({
    ProbeClearFlag: void 0,
    ProbeType: void 0
  });
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_cameraJs) {
      CameraAperture = _cameraJs.CameraAperture;
      CameraFOVAxis = _cameraJs.CameraFOVAxis;
      CameraISO = _cameraJs.CameraISO;
      CameraProjection = _cameraJs.CameraProjection;
      CameraShutter = _cameraJs.CameraShutter;
      CameraType = _cameraJs.CameraType;
      SKYBOX_FLAG = _cameraJs.SKYBOX_FLAG;
      TrackingType = _cameraJs.TrackingType;
    }, function (_coreIndexJs) {
      Color = _coreIndexJs.Color;
      Quat = _coreIndexJs.Quat;
      Rect = _coreIndexJs.Rect;
      toRadian = _coreIndexJs.toRadian;
      Vec2 = _coreIndexJs.Vec2;
      Vec3 = _coreIndexJs.Vec3;
      geometry = _coreIndexJs.geometry;
      cclegacy = _coreIndexJs.cclegacy;
      Vec4 = _coreIndexJs.Vec4;
    }, function (_renderingDefineJs) {
      CAMERA_DEFAULT_MASK = _renderingDefineJs.CAMERA_DEFAULT_MASK;
    }, function (_gfxIndexJs) {
      ClearFlagBit = _gfxIndexJs.ClearFlagBit;
    }, function (_assetAssetsRenderTextureJs) {
      RenderTexture = _assetAssetsRenderTextureJs.RenderTexture;
    }],
    execute: function () {
      (function (ProbeClearFlag) {
        ProbeClearFlag[ProbeClearFlag["SKYBOX"] = SKYBOX_FLAG | ClearFlagBit.DEPTH_STENCIL] = "SKYBOX";
        ProbeClearFlag[ProbeClearFlag["SOLID_COLOR"] = ClearFlagBit.ALL] = "SOLID_COLOR";
      })(ProbeClearFlag || _export("ProbeClearFlag", ProbeClearFlag = {}));
      (function (ProbeType) {
        ProbeType[ProbeType["CUBE"] = 0] = "CUBE";
        ProbeType[ProbeType["PLANAR"] = 1] = "PLANAR";
      })(ProbeType || _export("ProbeType", ProbeType = {}));
      // right left up down front back
      cameraDir = [new Vec3(0, -90, 0), new Vec3(0, 90, 0), new Vec3(90, 0, 0), new Vec3(-90, 0, 0), new Vec3(0, 0, 0), new Vec3(0, 180, 0)];
      _export("ReflectionProbe", ReflectionProbe = /*#__PURE__*/function () {
        function ReflectionProbe(id) {
          this.bakedCubeTextures = [];
          this.realtimePlanarTexture = null;
          this._resolution = 256;
          this._clearFlag = ProbeClearFlag.SKYBOX;
          this._backgroundColor = new Color(0, 0, 0, 255);
          this._visibility = CAMERA_DEFAULT_MASK;
          this._probeType = ProbeType.CUBE;
          this._cubemap = null;
          this._size = new Vec3(1, 1, 1);
          /**
           * @en Render cubemap's camera
           * @zh 渲染cubemap的相机
           */
          this._camera = null;
          /**
           * @en Unique id of probe.
           * @zh probe的唯一id
           */
          this._probeId = 0;
          this._needRefresh = false;
          this._needRender = false;
          this._node = null;
          this._cameraNode = null;
          /**
           * @en The AABB bounding box and probe only render the objects inside the bounding box.
           * @zh AABB包围盒，probe只渲染包围盒内的物体
           */
          this._boundingBox = null;
          /**
           * @en The position of the camera in world space.
           * @zh 世界空间相机的位置
           */
          this._cameraWorldPos = new Vec3();
          /**
           * @en The rotation of the camera in world space.
           * @zh 世界空间相机的旋转
           */
          this._cameraWorldRotation = new Quat();
          /**
           * @en The forward direction vertor of the camera in world space.
           * @zh 世界空间相机朝前的方向向量
           */
          this._forward = new Vec3();
          /**
           * @en The up direction vertor of the camera in world space.
           * @zh 世界空间相机朝上的方向向量
           */
          this._up = new Vec3();
          /**
           * @en Reflection probe cube pattern preview sphere
           * @zh 反射探针cube模式的预览小球
           */
          this._previewSphere = null;
          this._previewPlane = null;
          this._probeId = id;
        }
        var _proto = ReflectionProbe.prototype;
        _proto.initialize = function initialize(node, cameraNode) {
          this._node = node;
          this._cameraNode = cameraNode;
          var pos = this.node.getWorldPosition();
          this._boundingBox = geometry.AABB.create(pos.x, pos.y, pos.z, this._size.x, this._size.y, this._size.z);
          this._createCamera(cameraNode);
        };
        _proto.initBakedTextures = function initBakedTextures() {
          if (this.bakedCubeTextures.length === 0) {
            for (var i = 0; i < 6; i++) {
              var renderTexture = this._createTargetTexture(this._resolution, this._resolution);
              this.bakedCubeTextures.push(renderTexture);
            }
          }
        };
        _proto.captureCubemap = function captureCubemap() {
          this.initBakedTextures();
          this._resetCameraParams();
          this._needRender = true;
        }

        /**
         * @en Render real-time planar reflection textures
         * @zh 渲染实时平面反射贴图
         * @param sourceCamera render planar reflection for this camera
         */;
        _proto.renderPlanarReflection = function renderPlanarReflection(sourceCamera) {
          if (!sourceCamera) return;
          if (!this.realtimePlanarTexture) {
            var canvasSize = cclegacy.view.getDesignResolutionSize();
            this.realtimePlanarTexture = this._createTargetTexture(canvasSize.width, canvasSize.height);
            cclegacy.internal.reflectionProbeManager.updatePlanarMap(this, this.realtimePlanarTexture.getGFXTexture());
          }
          this._syncCameraParams(sourceCamera);
          this._transformReflectionCamera(sourceCamera);
          this._needRender = true;
        };
        _proto.switchProbeType = function switchProbeType(type, sourceCamera) {
          if (type === ProbeType.CUBE) {
            this._needRender = false;
          } else if (sourceCamera !== null) {
            this.renderPlanarReflection(sourceCamera);
          }
        };
        _proto.getProbeId = function getProbeId() {
          return this._probeId;
        };
        _proto.updateProbeId = function updateProbeId(id) {
          this._probeId = id;
        };
        _proto.renderArea = function renderArea() {
          if (this._probeType === ProbeType.PLANAR) {
            return new Vec2(this.realtimePlanarTexture.width, this.realtimePlanarTexture.height);
          } else {
            return new Vec2(this.resolution, this.resolution);
          }
        };
        _proto.isFinishedRendering = function isFinishedRendering() {
          return true;
        };
        _proto.validate = function validate() {
          return this.cubemap !== null;
        };
        _proto.destroy = function destroy() {
          if (this._camera) {
            this._camera.destroy();
            this._camera = null;
          }
          for (var i = 0; i < this.bakedCubeTextures.length; i++) {
            this.bakedCubeTextures[i].destroy();
          }
          this.bakedCubeTextures = [];
          if (this.realtimePlanarTexture) {
            this.realtimePlanarTexture.destroy();
            this.realtimePlanarTexture = null;
          }
        }
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto.enable = function enable() {}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ;
        _proto.disable = function disable() {};
        _proto.updateCameraDir = function updateCameraDir(faceIdx) {
          this.cameraNode.setRotationFromEuler(cameraDir[faceIdx]);
          this.camera.update(true);
        };
        _proto.updateBoundingBox = function updateBoundingBox() {
          if (this.node) {
            var pos = this.node.getWorldPosition();
            geometry.AABB.set(this._boundingBox, pos.x, pos.y, pos.z, this._size.x, this._size.y, this._size.z);
          }
        };
        _proto.hasFrameBuffer = function hasFrameBuffer(framebuffer) {
          if (this.probeType === ProbeType.PLANAR) {
            var _this$realtimePlanarT;
            if (!this.realtimePlanarTexture) return false;
            if (((_this$realtimePlanarT = this.realtimePlanarTexture.window) === null || _this$realtimePlanarT === void 0 ? void 0 : _this$realtimePlanarT.framebuffer) === framebuffer) {
              return true;
            }
          } else {
            if (this.bakedCubeTextures.length === 0) return false;
            for (var i = 0; i < this.bakedCubeTextures.length; i++) {
              var _rt$window;
              var rt = this.bakedCubeTextures[i];
              if (((_rt$window = rt.window) === null || _rt$window === void 0 ? void 0 : _rt$window.framebuffer) === framebuffer) {
                return true;
              }
            }
          }
          return false;
        };
        _proto.isRGBE = function isRGBE() {
          //todo: realtime do not use rgbe
          return true;
        };
        _proto._syncCameraParams = function _syncCameraParams(camera) {
          this.camera.projectionType = camera.projectionType;
          this.camera.orthoHeight = camera.orthoHeight;
          this.camera.nearClip = camera.nearClip;
          this.camera.farClip = camera.farClip;
          this.camera.fov = camera.fov;
          this.camera.clearFlag = camera.clearFlag;
          this.camera.clearColor = camera.clearColor;
          this.camera.priority = camera.priority - 1;
          this.camera.resize(camera.width, camera.height);
        };
        _proto._createCamera = function _createCamera(cameraNode) {
          var root = cclegacy.director.root;
          if (!this._camera) {
            this._camera = root.createCamera();
            if (!this._camera) return null;
            this._camera.initialize({
              name: cameraNode.name,
              node: cameraNode,
              projection: CameraProjection.PERSPECTIVE,
              window: EDITOR ? root && root.mainWindow : root && root.tempWindow,
              priority: 0,
              cameraType: CameraType.DEFAULT,
              trackingType: TrackingType.NO_TRACKING
            });
          }
          this._camera.setViewportInOrientedSpace(new Rect(0, 0, 1, 1));
          this._camera.fovAxis = CameraFOVAxis.VERTICAL;
          this._camera.fov = toRadian(90);
          this._camera.orthoHeight = 10;
          this._camera.nearClip = 1;
          this._camera.farClip = 1000;
          this._camera.clearColor = this._backgroundColor;
          this._camera.clearDepth = 1.0;
          this._camera.clearStencil = 0.0;
          this._camera.clearFlag = this._clearFlag;
          this._camera.visibility = this._visibility;
          this._camera.aperture = CameraAperture.F16_0;
          this._camera.shutter = CameraShutter.D125;
          this._camera.iso = CameraISO.ISO100;
          return this._camera;
        };
        _proto._resetCameraParams = function _resetCameraParams() {
          this.camera.projectionType = CameraProjection.PERSPECTIVE;
          this.camera.orthoHeight = 10;
          this.camera.nearClip = 1;
          this.camera.farClip = 1000;
          this.camera.fov = toRadian(90);
          this.camera.priority = 0;
          this.camera.resize(this.resolution, this.resolution);
          this.camera.visibility = this._visibility;
          this.camera.clearFlag = this._clearFlag;
          this.camera.clearColor = this._backgroundColor;
          this.cameraNode.worldPosition = this.node.worldPosition;
          this.cameraNode.worldRotation = this.node.worldRotation;
          this.camera.update(true);
        };
        _proto._createTargetTexture = function _createTargetTexture(width, height) {
          var rt = new RenderTexture();
          rt.reset({
            width: width,
            height: height
          });
          return rt;
        };
        _proto._transformReflectionCamera = function _transformReflectionCamera(sourceCamera) {
          var offset = Vec3.dot(this.node.worldPosition, this.node.up);
          this._reflect(this._cameraWorldPos, sourceCamera.node.worldPosition, this.node.up, offset);
          this.cameraNode.worldPosition = this._cameraWorldPos;
          Vec3.transformQuat(this._forward, Vec3.FORWARD, sourceCamera.node.worldRotation);
          this._reflect(this._forward, this._forward, this.node.up, 0);
          this._forward.normalize();
          this._forward.negative();
          Vec3.transformQuat(this._up, Vec3.UP, sourceCamera.node.worldRotation);
          this._reflect(this._up, this._up, this.node.up, 0);
          this._up.normalize();
          Quat.fromViewUp(this._cameraWorldRotation, this._forward, this._up);
          this.cameraNode.worldRotation = this._cameraWorldRotation;
          this.camera.update(true);

          // Transform the plane from world space to reflection camera space use the inverse transpose matrix
          var viewSpaceProbe = new Vec4(this.node.up.x, this.node.up.y, this.node.up.z, -Vec3.dot(this.node.up, this.node.worldPosition));
          viewSpaceProbe.transformMat4(this.camera.matView.clone().invert().transpose());
          this.camera.calculateObliqueMat(viewSpaceProbe);
        };
        _proto._reflect = function _reflect(out, point, normal, offset) {
          var n = Vec3.clone(normal);
          n.normalize();
          var dist = Vec3.dot(n, point) - offset;
          n.multiplyScalar(2.0 * dist);
          Vec3.subtract(out, point, n);
          return out;
        };
        _createClass(ReflectionProbe, [{
          key: "probeType",
          get: function get() {
            return this._probeType;
          },
          set:
          /**
           * @en Set probe type,cube or planar.
           * @zh 设置探针类型，cube或者planar
           */
          function set(value) {
            this._probeType = value;
          }
        }, {
          key: "resolution",
          get: function get() {
            return this._resolution;
          }

          /**
           * @en set render texture size
           * @zh 设置渲染纹理大小
           */,
          set: function set(value) {
            if (value !== this._resolution) {
              this.bakedCubeTextures.forEach(function (rt, idx) {
                rt.resize(value, value);
              });
            }
            this._resolution = value;
          }

          /**
           * @en Clearing flags of the camera, specifies which part of the framebuffer will be actually cleared every frame.
           * @zh 相机的缓冲清除标志位，指定帧缓冲的哪部分要每帧清除。
           */
        }, {
          key: "clearFlag",
          get: function get() {
            return this._clearFlag;
          }

          /**
           * @en Clearing color of the camera.
           * @zh 相机的颜色缓冲默认值。
           */,
          set: function set(value) {
            this._clearFlag = value;
            this.camera.clearFlag = this._clearFlag;
          }
        }, {
          key: "backgroundColor",
          get: function get() {
            return this._backgroundColor;
          }
          /**
           * @en Visibility mask, declaring a set of node layers that will be visible to this camera.
           * @zh 可见性掩码，声明在当前相机中可见的节点层级集合。
           */,
          set: function set(val) {
            this._backgroundColor = val;
            this.camera.clearColor = this._backgroundColor;
          }
        }, {
          key: "visibility",
          get: function get() {
            return this._visibility;
          },
          set: function set(val) {
            this._visibility = val;
            this._camera.visibility = this._visibility;
          }

          /**
           * @en Gets or sets the size of the box, in local space.
           * @zh 获取或设置盒的大小。
           */
        }, {
          key: "size",
          get: function get() {
            return this._size;
          },
          set: function set(value) {
            this._size.set(value);
            var pos = this.node.getWorldPosition();
            geometry.AABB.set(this._boundingBox, pos.x, pos.y, pos.z, this._size.x, this._size.y, this._size.z);
          }
        }, {
          key: "cubemap",
          get: function get() {
            return this._cubemap;
          }

          /**
           * @en The node of the probe.
           * @zh probe绑定的节点
           */,
          set: function set(val) {
            this._cubemap = val;
          }
        }, {
          key: "node",
          get: function get() {
            return this._node;
          }
        }, {
          key: "camera",
          get: function get() {
            return this._camera;
          }

          /**
           * @en Refresh the objects that use this probe.
           * @zh 刷新使用该probe的物体
           */
        }, {
          key: "needRefresh",
          get: function get() {
            return this._needRefresh;
          },
          set: function set(value) {
            this._needRefresh = value;
          }
        }, {
          key: "needRender",
          get: function get() {
            return this._needRender;
          },
          set: function set(value) {
            this._needRender = value;
          }
        }, {
          key: "boundingBox",
          get: function get() {
            return this._boundingBox;
          }
        }, {
          key: "cameraNode",
          get: function get() {
            return this._cameraNode;
          }

          /**
           * @en Reflection probe cube mode preview sphere
           * @zh 反射探针cube模式的预览小球
           * @engineInternal
           */,
          set: function set(node) {
            this._cameraNode = node;
          }
        }, {
          key: "previewSphere",
          get: function get() {
            return this._previewSphere;
          }

          /**
           * @en Reflection probe planar mode preview plane
           * @zh 反射探针Planar模式的预览平面
           */,
          set: function set(val) {
            this._previewSphere = val;
          }
        }, {
          key: "previewPlane",
          get: function get() {
            return this._previewPlane;
          },
          set: function set(val) {
            this._previewPlane = val;
          }
        }]);
        return ReflectionProbe;
      }());
    }
  };
});