System.register("q-bundled:///fs/cocos/physics-2d/box2d/platform/physics-ray-cast-callback.js", ["@cocos/box2d", "../../../core/index.js", "../../framework/index.js"], function (_export, _context) {
  "use strict";

  var b2, Vec2, ERaycast2DType, PhysicsRayCastCallback;
  _export("PhysicsRayCastCallback", void 0);
  return {
    setters: [function (_cocosBox2d) {
      b2 = _cocosBox2d.default;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
    }, function (_frameworkIndexJs) {
      ERaycast2DType = _frameworkIndexJs.ERaycast2DType;
    }],
    execute: function () {
      /*
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
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
      _export("PhysicsRayCastCallback", PhysicsRayCastCallback = class PhysicsRayCastCallback extends b2.RayCastCallback {
        constructor(...args) {
          super(...args);
          this._type = ERaycast2DType.Closest;
          this._fixtures = [];
          this._points = [];
          this._normals = [];
          this._fractions = [];
          this._mask = 0xffffffff;
        }
        init(type, mask) {
          this._type = type;
          this._mask = mask;
          this._fixtures.length = 0;
          this._points.length = 0;
          this._normals.length = 0;
          this._fractions.length = 0;
        }
        ReportFixture(fixture, point, normal, fraction) {
          if ((fixture.GetFilterData().categoryBits & this._mask) === 0) {
            return 0;
          }
          if (this._type === ERaycast2DType.Closest) {
            this._fixtures[0] = fixture;
            this._points[0] = point;
            this._normals[0] = normal;
            this._fractions[0] = fraction;
            return fraction;
          }
          this._fixtures.push(fixture);
          this._points.push(new Vec2(point.x, point.y));
          this._normals.push(new Vec2(normal.x, normal.y));
          this._fractions.push(fraction);
          if (this._type === ERaycast2DType.Any) {
            return 0;
          } else if (this._type >= ERaycast2DType.All) {
            return 1;
          }
          return fraction;
        }
        getFixtures() {
          return this._fixtures;
        }
        getPoints() {
          return this._points;
        }
        getNormals() {
          return this._normals;
        }
        getFractions() {
          return this._fractions;
        }
      });
    }
  };
});