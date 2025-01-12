System.register("q-bundled:///fs/cocos/render-scene/config.js", [], function (_export, _context) {
  "use strict";

  var _stageOffset, _name2stageID;
  return {
    setters: [],
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
      _stageOffset = 0;
      _name2stageID = {};
      _export("default", {
        addStage(name) {
          // already added
          if (_name2stageID[name] !== undefined) {
            return;
          }
          const stageID = 1 << _stageOffset;
          _name2stageID[name] = stageID;
          _stageOffset += 1;
        },
        stageID(name) {
          const id = _name2stageID[name];
          if (id === undefined) {
            return -1;
          }
          return id;
        },
        stageIDs(nameList) {
          let key = 0;
          for (const name of nameList) {
            const id = _name2stageID[name];
            if (id !== undefined) {
              key |= id;
            }
          }
          return key;
        }
      });
    }
  };
});