System.register("q-bundled:///fs/cocos/render-scene/scene/ranged-directional-light.js", ["../../core/index.js", "../../core/math/vec3.js", "./ambient.js", "./light.js"], function (_export, _context) {
  "use strict";

  var cclegacy, Vec3, Ambient, Light, LightType, RangedDirectionalLight, _forward;
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                             Copyright (c) 2023 Xiamen Yaji Software Co., Ltd.
                                                                                                                                                                                                                                                                                                                                                                                             https://www.cocos.com/
                                                                                                                                                                                                                                                                                                                                                                                             Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                             of this software and associated engine source code (the "Software"), a limited,
                                                                                                                                                                                                                                                                                                                                                                                             worldwide, royalty-free, non-assignable, revocable and non-exclusive license
                                                                                                                                                                                                                                                                                                                                                                                             to use Cocos Creator solely to develop games on your target platforms. You shall
                                                                                                                                                                                                                                                                                                                                                                                             not use Cocos Creator software for developing other software or tools that's
                                                                                                                                                                                                                                                                                                                                                                                             used for developing games. You are not granted to publish, distribute,
                                                                                                                                                                                                                                                                                                                                                                                             sublicense, and/or sell copies of Cocos Creator.
                                                                                                                                                                                                                                                                                                                                                                                             The software or tools in this License Agreement are licensed, not sold.
                                                                                                                                                                                                                                                                                                                                                                                             Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                             THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                             */
  _export("RangedDirectionalLight", void 0);
  return {
    setters: [function (_coreIndexJs) {
      cclegacy = _coreIndexJs.cclegacy;
    }, function (_coreMathVec3Js) {
      Vec3 = _coreMathVec3Js.Vec3;
    }, function (_ambientJs) {
      Ambient = _ambientJs.Ambient;
    }, function (_lightJs) {
      Light = _lightJs.Light;
      LightType = _lightJs.LightType;
    }],
    execute: function () {
      _forward = new Vec3(0, 0, -1);
      /**
       * @en Render the abstraction of light in the scene, which is a ranged directional light source in the scene. Non main light source,
       * each scene is allowed to have multiple ranged directional light sources without shadows.
       * @zh 渲染场景中的光的抽象，这是场景中的范围平行光光源。非主光源，每个场景允许有多个范围平行光光源，不包含阴影。
       */
      _export("RangedDirectionalLight", RangedDirectionalLight = class RangedDirectionalLight extends Light {
        /**
         * @en The direction vector of the light
         * @zh 光源的方向
         */
        get direction() {
          return this._dir;
        }

        /**
         * @en The right vector of the light
         * @zh 光源的右方向
         */
        get right() {
          return this._right;
        }

        /**
         * @en The world position of the light source
         * @zh 光源的世界坐标
         */
        get position() {
          return this._pos;
        }

        /**
         * @en The world scale of the light source
         * @zh 光源的世界缩放
         */
        get scale() {
          return this._scale;
        }

        /**
         * @en The illuminance of the light in Lux(lx)
         * @zh 光源的辐照度，单位是 Lux(lx)
         */
        get illuminance() {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            return this._illuminanceHDR;
          } else {
            return this._illuminanceLDR;
          }
        }
        set illuminance(value) {
          const isHDR = cclegacy.director.root.pipeline.pipelineSceneData.isHDR;
          if (isHDR) {
            this.illuminanceHDR = value;
          } else {
            this.illuminanceLDR = value;
          }
        }

        /**
         * @en The illuminance of the light in HDR mode
         * @zh HDR 模式下光源的辐照度
         */
        get illuminanceHDR() {
          return this._illuminanceHDR;
        }
        set illuminanceHDR(value) {
          this._illuminanceHDR = value;
        }

        /**
         * @en The illuminance of the light in LDR mode
         * @zh LDR 模式下光源的辐照度
         */
        get illuminanceLDR() {
          return this._illuminanceLDR;
        }
        set illuminanceLDR(value) {
          this._illuminanceLDR = value;
        }
        constructor() {
          super();
          this._dir = new Vec3(0, 0, -1);
          this._pos = new Vec3(0, 0, 0);
          this._scale = new Vec3(1, 1, 1);
          this._right = new Vec3(1, 0, 0);
          this._illuminanceHDR = Ambient.SUN_ILLUM;
          this._illuminanceLDR = 1.0;
          this._type = LightType.RANGED_DIRECTIONAL;
        }
        initialize() {
          super.initialize();
          this.illuminance = Ambient.SUN_ILLUM;
        }

        /**
         * @en Update
         * @zh 更新
         */
        update() {
          if (this._node && this._node.hasChangedFlags) {
            this._node.getWorldPosition(this._pos);
            this._node.getWorldScale(this._scale);
            Vec3.transformQuat(this._dir, _forward, this._node.worldRotation);
            Vec3.transformQuat(this._right, Vec3.RIGHT, this._node.worldRotation);
          }
        }
      });
    }
  };
});