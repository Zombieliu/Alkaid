System.register("q-bundled:///fs/cocos/rendering/post-process/components/post-process.js", ["../../../../../virtual/internal%253Aconstants.js", "../../../core/data/class-decorator.js", "../../../core/data/decorators/index.js", "../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR, property, serializable, ccclass, disallowMultiple, executeInEditMode, help, range, slide, tooltip, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _class3, PostProcess;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR = _virtualInternal253AconstantsJs.EDITOR;
    }, function (_coreDataClassDecoratorJs) {
      property = _coreDataClassDecoratorJs.property;
      serializable = _coreDataClassDecoratorJs.serializable;
    }, function (_coreDataDecoratorsIndexJs) {
      ccclass = _coreDataDecoratorsIndexJs.ccclass;
      disallowMultiple = _coreDataDecoratorsIndexJs.disallowMultiple;
      executeInEditMode = _coreDataDecoratorsIndexJs.executeInEditMode;
      help = _coreDataDecoratorsIndexJs.help;
      range = _coreDataDecoratorsIndexJs.range;
      slide = _coreDataDecoratorsIndexJs.slide;
      tooltip = _coreDataDecoratorsIndexJs.tooltip;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }],
    execute: function () {
      _export("PostProcess", PostProcess = (_dec = ccclass('cc.PostProcess'), _dec2 = help('cc.PostProcess'), _dec3 = tooltip('i18n:postprocess.global'), _dec4 = tooltip('i18n:postprocess.shadingScale'), _dec5 = range([0.01, 4, 0.01]), _dec6 = tooltip('i18n:postprocess.enableShadingScaleInEditor'), _dec(_class = _dec2(_class = disallowMultiple(_class = executeInEditMode(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PostProcess, _Component);
        function PostProcess() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.global = _initializer && _initializer();
          _this._shadingScale = _initializer2 && _initializer2();
          _this.enableShadingScaleInEditor = _initializer3 && _initializer3();
          _this.settings = new Map();
          return _this;
        }
        var _proto = PostProcess.prototype;
        _proto.addSetting = function addSetting(setting) {
          this.settings.set(setting.constructor, setting);
        };
        _proto.removeSetting = function removeSetting(setting) {
          this.settings["delete"](setting.constructor);
        };
        _proto.getSetting = function getSetting(ctor) {
          return this.settings.get(ctor);
        };
        _proto.onEnable = function onEnable() {
          PostProcess.all.push(this);
        };
        _proto.onDisable = function onDisable() {
          var idx = PostProcess.all.indexOf(this);
          if (idx !== -1) {
            PostProcess.all.splice(idx, 1);
          }
        };
        _createClass(PostProcess, [{
          key: "shadingScale",
          get: function get() {
            return this._shadingScale;
          },
          set: function set(v) {
            this._shadingScale = v;
            if (EDITOR) {
              setTimeout(function () {
                globalThis.cce.Engine.repaintInEditMode();
              }, 50);
            }
          }
        }]);
        return PostProcess;
      }(Component), _class3.all = [], _class3), (_initializer = _applyDecoratedInitializer(_class2.prototype, "global", [_dec3, property, serializable], function () {
        return true;
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "_shadingScale", [serializable], function () {
        return 1;
      }), _applyDecoratedDescriptor(_class2.prototype, "shadingScale", [_dec4, slide, _dec5, property], Object.getOwnPropertyDescriptor(_class2.prototype, "shadingScale"), _class2.prototype), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "enableShadingScaleInEditor", [_dec6, property, serializable], function () {
        return false;
      })), _class2)) || _class) || _class) || _class) || _class));
    }
  };
});