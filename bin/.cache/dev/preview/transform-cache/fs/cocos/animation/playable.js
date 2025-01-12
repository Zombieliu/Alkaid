System.register("q-bundled:///fs/cocos/animation/playable.js", ["../core/index.js"], function (_export, _context) {
  "use strict";

  var getError, Playable;
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
  return {
    setters: [function (_coreIndexJs) {
      getError = _coreIndexJs.getError;
    }],
    execute: function () {
      _export("Playable", Playable = /*#__PURE__*/function () {
        function Playable() {
          this._isPlaying = false;
          this._isPaused = false;
          this._stepOnce = false;
        }
        var _proto = Playable.prototype;
        /**
         * @en Play this animation.
         * @zh 播放动画。
         */
        _proto.play = function play() {
          if (this._isPlaying) {
            if (this._isPaused) {
              this._isPaused = false;
              this.onResume();
            } else {
              this.onError(getError(3912));
            }
          } else {
            this._isPlaying = true;
            this.onPlay();
          }
        }

        /**
         * @en Stop this animation.
         * @zh 停止动画播放。
         */;
        _proto.stop = function stop() {
          if (this._isPlaying) {
            this._isPlaying = false;
            this.onStop();

            // need reset pause flag after onStop
            this._isPaused = false;
          }
        }

        /**
         * @en Pause this animation.
         * @zh 暂停动画。
         */;
        _proto.pause = function pause() {
          if (this._isPlaying && !this._isPaused) {
            this._isPaused = true;
            this.onPause();
          }
        }

        /**
         * @en Resume this animation.
         * @zh 重新播放动画。
         */;
        _proto.resume = function resume() {
          if (this._isPlaying && this._isPaused) {
            this._isPaused = false;
            this.onResume();
          }
        }

        /**
         * @en Perform a single frame step.
         * @zh 执行一帧动画。
         */;
        _proto.step = function step() {
          this.pause();
          this._stepOnce = true;
          if (!this._isPlaying) {
            this.play();
          }
        };
        _proto.update = function update(deltaTime) {};
        _proto.onPlay = function onPlay() {};
        _proto.onPause = function onPause() {};
        _proto.onResume = function onResume() {};
        _proto.onStop = function onStop() {};
        _proto.onError = function onError(message) {};
        _createClass(Playable, [{
          key: "isPlaying",
          get:
          /**
           * @en Whether if this `Playable` is in playing.
           * @zh 该 `Playable` 是否正在播放状态。
           * @default false
           */
          function get() {
            return this._isPlaying;
          }

          /**
           * @en Whether if this `Playable` has been paused. This can be true even if in edit mode(isPlaying == false).
           * @zh 该 `Playable` 是否已被暂停。
           * @default false
           */
        }, {
          key: "isPaused",
          get: function get() {
            return this._isPaused;
          }

          /**
           * @en Whether if this `Playable` has been paused or stopped.
           * @zh 该 `Playable` 是否已被暂停或停止。
           */
        }, {
          key: "isMotionless",
          get: function get() {
            return !this.isPlaying || this.isPaused;
          }
        }]);
        return Playable;
      }());
    }
  };
});