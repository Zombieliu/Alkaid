System.register("q-bundled:///fs/cocos/gfx/base/descriptor-set-layout.js", ["./define.js"], function (_export, _context) {
  "use strict";

  var GFXObject, ObjectType, DescriptorSetLayout;
  _export("DescriptorSetLayout", void 0);
  return {
    setters: [function (_defineJs) {
      GFXObject = _defineJs.GFXObject;
      ObjectType = _defineJs.ObjectType;
    }],
    execute: function () {
      /*
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
      /**
       * @en GFX descriptor sets layout.
       * @zh GFX 描述符集布局。
       */
      _export("DescriptorSetLayout", DescriptorSetLayout = class DescriptorSetLayout extends GFXObject {
        get bindings() {
          return this._bindings;
        }
        get bindingIndices() {
          return this._bindingIndices;
        }
        get descriptorIndices() {
          return this._descriptorIndices;
        }
        constructor() {
          super(ObjectType.DESCRIPTOR_SET_LAYOUT);
          this._bindings = [];
          this._bindingIndices = [];
          this._descriptorIndices = [];
        }
      });
    }
  };
});