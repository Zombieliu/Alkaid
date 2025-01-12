System.register("q-bundled:///fs/cocos/3d/misc/buffer-blob.js", [], function (_export, _context) {
  "use strict";

  var BufferBlob;
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
      _export("BufferBlob", BufferBlob = /*#__PURE__*/function () {
        function BufferBlob() {
          this._arrayBufferOrPaddings = [];
          this._length = 0;
        }
        var _proto = BufferBlob.prototype;
        _proto.setNextAlignment = function setNextAlignment(align) {
          if (align !== 0) {
            var remainder = this._length % align;
            if (remainder !== 0) {
              var padding = align - remainder;
              this._arrayBufferOrPaddings.push(padding);
              this._length += padding;
            }
          }
        };
        _proto.addBuffer = function addBuffer(arrayBuffer) {
          var result = this._length;
          this._arrayBufferOrPaddings.push(arrayBuffer);
          this._length += arrayBuffer.byteLength;
          return result;
        };
        _proto.getLength = function getLength() {
          return this._length;
        };
        _proto.getCombined = function getCombined() {
          var result = new Uint8Array(this._length);
          var counter = 0;
          this._arrayBufferOrPaddings.forEach(function (arrayBufferOrPadding) {
            if (typeof arrayBufferOrPadding === 'number') {
              counter += arrayBufferOrPadding;
            } else {
              result.set(new Uint8Array(arrayBufferOrPadding), counter);
              counter += arrayBufferOrPadding.byteLength;
            }
          });
          return result.buffer;
        };
        return BufferBlob;
      }());
    }
  };
});