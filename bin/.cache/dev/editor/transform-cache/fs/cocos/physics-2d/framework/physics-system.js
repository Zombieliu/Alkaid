System.register("q-bundled:///fs/cocos/physics-2d/framework/physics-system.js", ["../../../../virtual/internal%253Aconstants.js", "../../core/index.js", "./physics-selector.js", "../../physics/framework/collision-matrix.js", "./physics-types.js", "../../game/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, System, Vec2, Eventify, Enum, Settings, settings, cclegacy, createPhysicsWorld, selector, CollisionMatrix, ERaycast2DType, PHYSICS_2D_PTM_RATIO, PhysicsGroup, director, Director, PhysicsSystem2D, instance;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                            
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
  _export("PhysicsSystem2D", void 0);
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      System = _coreIndexJs.System;
      Vec2 = _coreIndexJs.Vec2;
      Eventify = _coreIndexJs.Eventify;
      Enum = _coreIndexJs.Enum;
      Settings = _coreIndexJs.Settings;
      settings = _coreIndexJs.settings;
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_physicsSelectorJs) {
      createPhysicsWorld = _physicsSelectorJs.createPhysicsWorld;
      selector = _physicsSelectorJs.selector;
    }, function (_physicsFrameworkCollisionMatrixJs) {
      CollisionMatrix = _physicsFrameworkCollisionMatrixJs.CollisionMatrix;
    }, function (_physicsTypesJs) {
      ERaycast2DType = _physicsTypesJs.ERaycast2DType;
      PHYSICS_2D_PTM_RATIO = _physicsTypesJs.PHYSICS_2D_PTM_RATIO;
      PhysicsGroup = _physicsTypesJs.PhysicsGroup;
    }, function (_gameIndexJs) {
      director = _gameIndexJs.director;
      Director = _gameIndexJs.Director;
    }],
    execute: function () {
      instance = null;
      cclegacy.internal.PhysicsGroup2D = PhysicsGroup;
      _export("PhysicsSystem2D", PhysicsSystem2D = class PhysicsSystem2D extends Eventify(System) {
        /**
         * @en
         * Gets or sets whether the physical system is enabled, which can be used to pause or continue running the physical system.
         * @zh
         * 获取或设置是否启用物理系统，可以用于暂停或继续运行物理系统。
         */
        get enable() {
          return this._enable;
        }
        set enable(value) {
          this._enable = value;
        }

        /**
         * @zh
         * Gets or sets whether the physical system allows automatic sleep, which defaults to true.
         * @zh
         * 获取或设置物理系统是否允许自动休眠，默认为 true。
         */
        get allowSleep() {
          return this._allowSleep;
        }
        set allowSleep(v) {
          this._allowSleep = v;
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.physicsWorld.setAllowSleep(v);
          }
        }

        /**
         * @en
         * Gets or sets the value of gravity in the physical world, which defaults to (0, -10).
         * @zh
         * 获取或设置物理世界的重力数值，默认为 (0, -10)。
         */
        get gravity() {
          return this._gravity;
        }
        set gravity(gravity) {
          this._gravity.set(gravity);
          if (!EDITOR_NOT_IN_PREVIEW) {
            this.physicsWorld.setGravity(new Vec2(gravity.x / PHYSICS_2D_PTM_RATIO, gravity.y / PHYSICS_2D_PTM_RATIO));
          }
        }

        /**
         * @en
         * Gets or sets the maximum number of simulated substeps per frame.
         * @zh
         * 获取或设置每帧模拟的最大子步数。
         */
        get maxSubSteps() {
          return this._maxSubSteps;
        }
        set maxSubSteps(value) {
          this._maxSubSteps = value;
        }

        /**
         * @en
         * Gets or sets the fixed delta time consumed by each simulation step.
         * @zh
         * 获取或设置每步模拟消耗的固定时间。
         */
        get fixedTimeStep() {
          return this._fixedTimeStep;
        }
        set fixedTimeStep(value) {
          this._fixedTimeStep = value;
        }

        /**
         * @en
         * Turn on or off the automatic simulation.
         * @zh
         * 获取或设置是否自动模拟。
         */
        get autoSimulation() {
          return this._autoSimulation;
        }
        set autoSimulation(value) {
          this._autoSimulation = value;
        }
        get debugDrawFlags() {
          return this.physicsWorld.debugDrawFlags;
        }
        set debugDrawFlags(v) {
          this.physicsWorld.debugDrawFlags = v;
        }

        /**
         * @en
         * The velocity iterations for the velocity constraint solver.
         * @zh
         * 速度更新迭代数。
         */

        /**
         * @en
         * Gets the wrappered object of the physical world through which you can access the actual underlying object.
         * @zh
         * 获取物理世界的封装对象，通过它你可以访问到实际的底层对象。
         */
        get physicsWorld() {
          return selector.physicsWorld;
        }

        /**
         * @en
         * Gets the ID of the system.
         * @zh
         * 获取此系统的ID。
         */

        static get PHYSICS_NONE() {
          return !selector.id;
        }
        static get PHYSICS_BUILTIN() {
          return selector.id === 'builtin';
        }
        static get PHYSICS_BOX2D() {
          return selector.id === 'box2d';
        }
        static get PHYSICS_BOX2D_WASM() {
          return selector.id === 'box2d-wasm';
        }

        /**
         * @en
         * Gets the predefined physics groups.
         * @zh
         * 获取预定义的物理分组。
         */
        static get PhysicsGroup() {
          return PhysicsGroup;
        }

        /**
         * @en
         * Gets the physical system instance.
         * @zh
         * 获取物理系统实例。
         */
        static get instance() {
          if (!instance) {
            instance = new PhysicsSystem2D();
          }
          return instance;
        }

        /**
         * @en
         * Gets the collision matrix。
         * @zh
         * 获取碰撞矩阵。
         */

        get stepping() {
          return this._steping;
        }
        constructor() {
          var _settings$querySettin, _settings$querySettin2, _settings$querySettin3, _settings$querySettin4;
          super();
          this.velocityIterations = 10;
          /**
           * @en
           * The position Iterations for the position constraint solver.
           * @zh
           * 位置迭代更新数。
           */
          this.positionIterations = 10;
          this.collisionMatrix = new CollisionMatrix();
          this._enable = true;
          this._allowSleep = true;
          this._maxSubSteps = 1;
          this._fixedTimeStep = 1.0 / 60.0;
          this._autoSimulation = true;
          this._accumulator = 0;
          this._steping = false;
          this._gravity = new Vec2(0, -10 * PHYSICS_2D_PTM_RATIO);
          this._delayEvents = [];
          const gravity = settings.querySettings(Settings.Category.PHYSICS, 'gravity');
          if (gravity) {
            Vec2.copy(this._gravity, gravity);
            this._gravity.multiplyScalar(PHYSICS_2D_PTM_RATIO);
          }
          this._allowSleep = (_settings$querySettin = settings.querySettings(Settings.Category.PHYSICS, 'allowSleep')) !== null && _settings$querySettin !== void 0 ? _settings$querySettin : this._allowSleep;
          this._fixedTimeStep = (_settings$querySettin2 = settings.querySettings(Settings.Category.PHYSICS, 'fixedTimeStep')) !== null && _settings$querySettin2 !== void 0 ? _settings$querySettin2 : this._fixedTimeStep;
          this._maxSubSteps = (_settings$querySettin3 = settings.querySettings(Settings.Category.PHYSICS, 'maxSubSteps')) !== null && _settings$querySettin3 !== void 0 ? _settings$querySettin3 : this._maxSubSteps;
          this._autoSimulation = (_settings$querySettin4 = settings.querySettings(Settings.Category.PHYSICS, 'autoSimulation')) !== null && _settings$querySettin4 !== void 0 ? _settings$querySettin4 : this._autoSimulation;
          const collisionMatrix = settings.querySettings(Settings.Category.PHYSICS, 'collisionMatrix');
          if (collisionMatrix) {
            for (const i in collisionMatrix) {
              const bit = parseInt(i);
              const value = 1 << parseInt(i);
              this.collisionMatrix[`${value}`] = collisionMatrix[bit];
            }
          }
          const collisionGroups = settings.querySettings(Settings.Category.PHYSICS, 'collisionGroups');
          if (collisionGroups) {
            const cg = collisionGroups;
            if (cg instanceof Array) {
              cg.forEach(v => {
                PhysicsGroup[v.name] = 1 << v.index;
              });
              Enum.update(PhysicsGroup);
            }
          }
          const mutableSelector = selector;
          mutableSelector.physicsWorld = createPhysicsWorld();
          this.gravity = this._gravity;
          this.allowSleep = this._allowSleep;
        }

        /**
        * @en
        * Perform a simulation of the physics system, which will now be performed automatically on each frame.
        * @zh
        * 执行一次物理系统的模拟，目前将在每帧自动执行一次。
        * @param deltaTime @en time step. @zh 与上一次执行相差的时间，目前为每帧消耗时间。
        */
        postUpdate(deltaTime) {
          if (!this._enable) {
            return;
          }
          if (!this._autoSimulation) {
            return;
          }
          director.emit(Director.EVENT_BEFORE_PHYSICS);
          this.physicsWorld.syncSceneToPhysics();
          this._steping = true;
          const fixedTimeStep = this._fixedTimeStep;
          const velocityIterations = this.velocityIterations;
          const positionIterations = this.positionIterations;
          this._accumulator += deltaTime;
          let substepIndex = 0;
          while (substepIndex++ < this._maxSubSteps && this._accumulator > fixedTimeStep) {
            this.physicsWorld.step(fixedTimeStep, velocityIterations, positionIterations);
            this._accumulator -= fixedTimeStep;
          }
          const events = this._delayEvents;
          for (let i = 0, l = events.length; i < l; i++) {
            const event = events[i];
            event.func.call(event.target);
          }
          events.length = 0;
          this.physicsWorld.syncPhysicsToScene();
          if (this.debugDrawFlags) {
            this.physicsWorld.drawDebug();
          }
          this._steping = false;
          director.emit(Director.EVENT_AFTER_PHYSICS);
        }

        // eslint-disable-next-line @typescript-eslint/ban-types
        _callAfterStep(target, func) {
          if (this._steping) {
            this._delayEvents.push({
              target,
              func
            });
          } else {
            func.call(target);
          }
        }

        /**
         * @en
         * Reset the accumulator of time to given value.
         * @zh
         * 重置时间累积总量为给定值。
         */
        resetAccumulator(time = 0) {
          this._accumulator = time;
        }

        /**
         * @en
         * Perform simulation steps for the physics world.
         * @zh
         * 执行物理世界的模拟步进。
         * @param fixedTimeStep
         */
        step(fixedTimeStep) {
          this.physicsWorld.step(fixedTimeStep, this.velocityIterations, this.positionIterations);
        }

        /**
         * @en
         * Raycast the world for all colliders in the path of the ray.
         * The raycast ignores colliders that contain the starting point.
         * @zh
         * 检测哪些碰撞体在给定射线的路径上，射线检测将忽略包含起始点的碰撞体。
         * @method rayCast
         * @param {Vec2} p1 @en start point of the raycast. @zh 射线起点。
         * @param {Vec2} p2 @en end point of the raycast. @zh 射线终点。
         * @param {RayCastType} type - @en optional, default is RayCastType.Closest. @zh 可选，默认是RayCastType.Closest。
         * @param {number} mask - @en optional, default is 0xffffffff. @zh 可选，默认是0xffffffff。
         * @return {[PhysicsRayCastResult]}
         */
        raycast(p1, p2, type = ERaycast2DType.Closest, mask = 0xffffffff) {
          return this.physicsWorld.raycast(p1, p2, type, mask);
        }

        /**
         * @en Test which colliders contain the point.
         * @zh 检测给定点在哪些碰撞体内。
         */
        testPoint(p) {
          return this.physicsWorld.testPoint(p);
        }

        /**
         * @en Test which colliders contain the point.
         * @zh 检测给定点在哪些碰撞体内。
         */
        testAABB(rect) {
          return this.physicsWorld.testAABB(rect);
        }
        static constructAndRegister() {
          director.registerSystem(PhysicsSystem2D.ID, PhysicsSystem2D.instance, System.Priority.LOW);
        }
      });
      PhysicsSystem2D.ID = 'PHYSICS_2D';
      director.once(Director.EVENT_INIT, () => {
        PhysicsSystem2D.constructAndRegister();
      });
    }
  };
});