System.register("q-bundled:///fs/cocos/physics-2d/framework/components/joints/joint-2d.js", ["../../../../../../virtual/internal%253Aconstants.js", "../../../../core/index.js", "../rigid-body-2d.js", "../../physics-types.js", "../../physics-selector.js", "../../../../scene-graph/index.js"], function (_export, _context) {
  "use strict";

  var EDITOR_NOT_IN_PREVIEW, Vec2, _decorator, tooltip, serializable, RigidBody2D, EJoint2DType, createJoint, Component, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _initializer, _initializer2, _initializer3, _initializer4, ccclass, type, property, Joint2D;
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
  function _applyDecoratedInitializer(target, property, decorators, initializer) {
    return decorators.slice().reverse().reduce(function (decoratedInitializer, decorator) {
      return decorator(target, property, decoratedInitializer) || decoratedInitializer;
    }, initializer);
  }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  return {
    setters: [function (_virtualInternal253AconstantsJs) {
      EDITOR_NOT_IN_PREVIEW = _virtualInternal253AconstantsJs.EDITOR_NOT_IN_PREVIEW;
    }, function (_coreIndexJs) {
      Vec2 = _coreIndexJs.Vec2;
      _decorator = _coreIndexJs._decorator;
      tooltip = _coreIndexJs.tooltip;
      serializable = _coreIndexJs.serializable;
    }, function (_rigidBody2dJs) {
      RigidBody2D = _rigidBody2dJs.RigidBody2D;
    }, function (_physicsTypesJs) {
      EJoint2DType = _physicsTypesJs.EJoint2DType;
    }, function (_physicsSelectorJs) {
      createJoint = _physicsSelectorJs.createJoint;
    }, function (_sceneGraphIndexJs) {
      Component = _sceneGraphIndexJs.Component;
    }],
    execute: function () {
      ccclass = _decorator.ccclass;
      type = _decorator.type;
      property = _decorator.property;
      _export("Joint2D", Joint2D = (_dec = ccclass('cc.Joint2D'), _dec2 = tooltip('i18n:physics2d.joint.anchor'), _dec3 = tooltip('i18n:physics2d.joint.connectedAnchor'), _dec4 = tooltip('i18n:physics2d.joint.collideConnected'), _dec5 = type(RigidBody2D), _dec6 = tooltip('i18n:physics2d.joint.connectedBody'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Joint2D, _Component);
        function Joint2D() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          /**
           * @en
           * The position of Joint2D in the attached rigid body's local space.
           * @zh
           * 在自身刚体的本地空间中，Joint2D的位置。
           */
          _this.anchor = _initializer && _initializer();
          /**
           * @en
           * The position of Joint2D in the connected rigid body's local space.
           * @zh
           * 在连接刚体的本地空间中，Joint2D的位置。
           */
          _this.connectedAnchor = _initializer2 && _initializer2();
          /**
           * @en
           * whether collision is turned on between two rigid bodies connected by a joint.
           * @zh
           * 关节连接的两刚体之间是否开启碰撞。
           */
          _this.collideConnected = _initializer3 && _initializer3();
          /**
           * @en
           * The jointed rigid body, null means link to a static rigid body at the world origin.
           * @zh
           * 关节连接的刚体，为空时表示连接到位于世界原点的静态刚体。
           */
          _this.connectedBody = _initializer4 && _initializer4();
          /**
           * @en
           * the Joint2D attached rigid-body.
           * @zh
           * 关节所绑定的刚体组件。
           */
          _this._body = null;
          _this._joint = null;
          /**
           * @en
           * the type of this joint.
           * @zh
           * 此关节的类型。
           */
          _this.TYPE = EJoint2DType.None;
          return _this;
        }
        var _proto = Joint2D.prototype;
        _proto.onLoad = function onLoad() {
          if (!EDITOR_NOT_IN_PREVIEW) {
            this._joint = createJoint(this.TYPE);
            this._joint.initialize(this);
            this._body = this.getComponent(RigidBody2D);
          }
        };
        _proto.onEnable = function onEnable() {
          if (this._joint && this._joint.onEnable) {
            this._joint.onEnable();
          }
        };
        _proto.onDisable = function onDisable() {
          if (this._joint && this._joint.onDisable) {
            this._joint.onDisable();
          }
        };
        _proto.start = function start() {
          if (this._joint && this._joint.start) {
            this._joint.start();
          }
        };
        _proto.onDestroy = function onDestroy() {
          if (this._joint && this._joint.onDestroy) {
            this._joint.onDestroy();
          }
        }

        /**
         * @en
         * If the physics engine is box2d, need to call this function to apply current changes to joint, this will regenerate inner box2d joint.
         * @zh
         * 如果物理引擎是 box2d, 需要调用此函数来应用当前 joint 中的修改。
         */;
        _proto.apply = function apply() {
          if (this._joint && this._joint.apply) {
            this._joint.apply();
          }
        };
        _createClass(Joint2D, [{
          key: "body",
          get: function get() {
            return this._body;
          }
        }, {
          key: "impl",
          get: function get() {
            return this._joint;
          }
        }]);
        return Joint2D;
      }(Component), (_initializer = _applyDecoratedInitializer(_class2.prototype, "anchor", [serializable, _dec2], function () {
        return new Vec2();
      }), _initializer2 = _applyDecoratedInitializer(_class2.prototype, "connectedAnchor", [serializable, _dec3], function () {
        return new Vec2();
      }), _initializer3 = _applyDecoratedInitializer(_class2.prototype, "collideConnected", [serializable, _dec4], function () {
        return false;
      }), _initializer4 = _applyDecoratedInitializer(_class2.prototype, "connectedBody", [_dec5, serializable, _dec6], function () {
        return null;
      })), _class2)) || _class));
    }
  };
});