"use strict";
(self.webpackChunkreact_canvas_confetti =
  self.webpackChunkreact_canvas_confetti || []).push([
  [305],
  {
    "./storybook/presets.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Crossfire: () => presets_stories_Crossfire,
          Explosion: () => presets_stories_Explosion,
          Fireworks: () => presets_stories_Fireworks,
          Main: () => Main,
          Photons: () => presets_stories_Photons,
          Pride: () => presets_stories_Pride,
          Realistic: () => presets_stories_Realistic,
          Snow: () => presets_stories_Snow,
          Vortex: () => Vortex,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => presets_stories,
        });
      var react = __webpack_require__("./node_modules/react/index.js"),
        external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__("@storybook/global"),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          "@storybook/preview-api",
        ),
        external_STORYBOOK_MODULE_CORE_EVENTS_ = __webpack_require__(
          "@storybook/core-events",
        );
      __webpack_require__("./node_modules/@storybook/csf/dist/index.mjs");
      var { document: chunk_6GSMXRCY_document, HTMLElement } =
          external_STORYBOOK_MODULE_GLOBAL_.global,
        chunk_6GSMXRCY_navigate = (params) =>
          external_STORYBOOK_MODULE_PREVIEW_API_.addons
            .getChannel()
            .emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY, params),
        valueOrCall = (args) => (value) =>
          "function" == typeof value ? value(...args) : value,
        linkTo =
          (idOrTitle, nameInput) =>
          (...args) => {
            let resolver = valueOrCall(args),
              title = resolver(idOrTitle),
              name = !!nameInput && resolver(nameInput);
            title?.match(/--/) && !name
              ? chunk_6GSMXRCY_navigate({ storyId: title })
              : name && title
                ? chunk_6GSMXRCY_navigate({ kind: title, story: name })
                : title
                  ? chunk_6GSMXRCY_navigate({ kind: title })
                  : name && chunk_6GSMXRCY_navigate({ story: name });
          },
        linksListener = (e) => {
          let { target } = e;
          if (!(target instanceof HTMLElement)) return;
          let { sbKind: kind, sbStory: story } = target.dataset;
          (kind || story) &&
            (e.preventDefault(), chunk_6GSMXRCY_navigate({ kind, story }));
        },
        hasListener = !1,
        on = () => {
          hasListener ||
            ((hasListener = !0),
            chunk_6GSMXRCY_document.addEventListener("click", linksListener));
        },
        off = () => {
          hasListener &&
            ((hasListener = !1),
            chunk_6GSMXRCY_document.removeEventListener(
              "click",
              linksListener,
            ));
        };
      (0, external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({
        name: "withLinks",
        parameterName: "links",
        wrapper: (getStory, context) => (
          on(),
          external_STORYBOOK_MODULE_PREVIEW_API_.addons
            .getChannel()
            .once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED, off),
          getStory(context)
        ),
      });
      var src = __webpack_require__("./src/index.tsx");
      function _array_like_to_array(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function _define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _iterable_to_array_limit(arr, i) {
        var _s,
          _e,
          _i =
            null == arr
              ? null
              : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                arr["@@iterator"];
        if (null != _i) {
          var _arr = [],
            _n = !0,
            _d = !1;
          try {
            for (
              _i = _i.call(arr);
              !(_n = (_s = _i.next()).done) &&
              (_arr.push(_s.value), !i || _arr.length !== i);
              _n = !0
            );
          } catch (err) {
            (_d = !0), (_e = err);
          } finally {
            try {
              _n || null == _i.return || _i.return();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function _non_iterable_rest() {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function _object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              _define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function _object_without_properties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = _object_without_properties_loose(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(excluded.indexOf(key) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _object_without_properties_loose(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = {},
          sourceKeys = Object.keys(source);
        for (i = 0; i < sourceKeys.length; i++)
          (key = sourceKeys[i]),
            excluded.indexOf(key) >= 0 || (target[key] = source[key]);
        return target;
      }
      function _sliced_to_array(arr, i) {
        return (
          _array_with_holes(arr) ||
          _iterable_to_array_limit(arr, i) ||
          _unsupported_iterable_to_array(arr, i) ||
          _non_iterable_rest()
        );
      }
      function _unsupported_iterable_to_array(o, minLen) {
        if (o) {
          if ("string" == typeof o) return _array_like_to_array(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (
            ("Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _array_like_to_array(o, minLen);
        }
      }
      var DEFAULT_DECORATE_OPTIONS = function (o) {
        return o;
      };
      function Preset(_param) {
        var _param_decorateOptions = _param.decorateOptions,
          decorateOptions =
            void 0 === _param_decorateOptions
              ? DEFAULT_DECORATE_OPTIONS
              : _param_decorateOptions,
          Conductor = _param.Conductor,
          autorun = _param.autorun,
          onInit = _param.onInit,
          rest = _object_without_properties(_param, [
            "decorateOptions",
            "Conductor",
            "autorun",
            "onInit",
          ]),
          _useState = _sliced_to_array((0, react.useState)(), 2),
          confetti = _useState[0],
          setConfetti = _useState[1],
          initHandler = (0, react.useCallback)(function (param) {
            var confettiInstance = param.confetti;
            setConfetti(function () {
              return confettiInstance;
            });
          }, []);
        return (
          (0, react.useEffect)(
            function () {
              if (confetti) {
                var conductor = new Conductor({
                  confetti: confetti,
                  decorateOptions: decorateOptions,
                });
                return (
                  autorun && conductor.run(autorun),
                  null == onInit ||
                    onInit({ confetti: confetti, conductor: conductor }),
                  conductor.stop
                );
              }
            },
            [confetti],
          ),
          react.createElement(
            src.A,
            _object_spread({ onInit: initHandler }, rest),
          )
        );
      }
      let presets = Preset;
      try {
        (Preset.displayName = "Preset"),
          (Preset.__docgenInfo = {
            description: "",
            displayName: "Preset",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: { value: "(o) => o" },
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
              Conductor: {
                defaultValue: null,
                description: "",
                name: "Conductor",
                required: !0,
                type: {
                  name: "new (params: TConductorOptions) => TConductorInstance",
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/presets/index.tsx#Preset"] = {
              docgenInfo: Preset.__docgenInfo,
              name: "Preset",
              path: "src/presets/index.tsx#Preset",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function conductor_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      let conductor = function Conductor(param) {
          var _this = this,
            confetti = param.confetti,
            decorateOptions = param.decorateOptions;
          _class_call_check(this, Conductor),
            conductor_define_property(this, "interval", null),
            conductor_define_property(this, "confetti", void 0),
            conductor_define_property(this, "decorateOptions", void 0),
            conductor_define_property(this, "shoot", function () {
              return _this.tickAnimation();
            }),
            conductor_define_property(this, "run", function (param) {
              var speed = param.speed,
                _param_delay = param.delay,
                duration = param.duration;
              _this.interval ||
                setTimeout(
                  function () {
                    _this.shoot(),
                      (_this.interval = setInterval(
                        _this.shoot,
                        1e3 / Math.min(speed, 1e3),
                      )),
                      duration && setTimeout(_this.pause, duration);
                  },
                  void 0 === _param_delay ? 0 : _param_delay,
                );
            }),
            conductor_define_property(this, "pause", function () {
              clearInterval(_this.interval), (_this.interval = null);
            }),
            conductor_define_property(this, "stop", function () {
              _this.pause(), _this.confetti.reset();
            }),
            (this.confetti = confetti),
            (this.decorateOptions = decorateOptions);
        },
        helpers_randomInRange = function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        };
      function _assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function fireworks_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function fireworks_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _get_prototype_of(o) {
        return (_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && _set_prototype_of(subClass, superClass);
      }
      function _possible_constructor_return(self1, call) {
        return call &&
          ("object" === _type_of(call) || "function" == typeof call)
          ? call
          : _assert_this_initialized(self1);
      }
      function _set_prototype_of(o, p) {
        return (_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function _is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function _create_super(Derived) {
        var hasNativeReflectConstruct = _is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = _get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  _get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            _possible_constructor_return(this, result)
          );
        };
      }
      var FireworksConductor = (function (Conductor) {
        _inherits(FireworksConductor, Conductor);
        var _super = _create_super(FireworksConductor);
        function FireworksConductor() {
          var _this;
          return (
            fireworks_class_call_check(this, FireworksConductor),
            (_this = _super.apply(this, arguments)),
            fireworks_define_property(
              _assert_this_initialized(_this),
              "tickAnimation",
              function () {
                _this.confetti(
                  _this.decorateOptions({
                    startVelocity: 30,
                    spread: 360,
                    ticks: 60,
                    zIndex: 0,
                    particleCount: 150,
                    origin: {
                      x: helpers_randomInRange(0.1, 0.3),
                      y: Math.random() - 0.2,
                    },
                  }),
                ),
                  _this.confetti(
                    _this.decorateOptions({
                      startVelocity: 30,
                      spread: 360,
                      ticks: 60,
                      zIndex: 0,
                      particleCount: 150,
                      origin: {
                        x: helpers_randomInRange(0.7, 0.9),
                        y: Math.random() - 0.2,
                      },
                    }),
                  );
              },
            ),
            _this
          );
        }
        return FireworksConductor;
      })(conductor);
      function presets_fireworks_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function fireworks_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_fireworks_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Fireworks(props) {
        return react.createElement(
          presets,
          fireworks_object_spread({ Conductor: FireworksConductor }, props),
        );
      }
      let presets_fireworks = Fireworks;
      try {
        (Fireworks.displayName = "Fireworks"),
          (Fireworks.__docgenInfo = {
            description: "",
            displayName: "Fireworks",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/presets/fireworks/index.tsx#Fireworks"
            ] = {
              docgenInfo: Fireworks.__docgenInfo,
              name: "Fireworks",
              path: "src/presets/fireworks/index.tsx#Fireworks",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function realistic_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function realistic_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function realistic_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function realistic_get_prototype_of(o) {
        return (realistic_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function realistic_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && realistic_set_prototype_of(subClass, superClass);
      }
      function realistic_possible_constructor_return(self1, call) {
        return call &&
          ("object" === realistic_type_of(call) || "function" == typeof call)
          ? call
          : realistic_assert_this_initialized(self1);
      }
      function realistic_set_prototype_of(o, p) {
        return (realistic_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function realistic_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function realistic_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function realistic_create_super(Derived) {
        var hasNativeReflectConstruct = realistic_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = realistic_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  realistic_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            realistic_possible_constructor_return(this, result)
          );
        };
      }
      var RealisticConductor = (function (Conductor) {
        realistic_inherits(RealisticConductor, Conductor);
        var _super = realistic_create_super(RealisticConductor);
        function RealisticConductor() {
          var _this;
          return (
            realistic_class_call_check(this, RealisticConductor),
            (_this = _super.apply(this, arguments)),
            realistic_define_property(
              realistic_assert_this_initialized(_this),
              "tickAnimation",
              function () {
                _this.confetti(
                  _this.decorateOptions({
                    spread: 26,
                    startVelocity: 55,
                    origin: { y: 0.7 },
                    particleCount: Math.floor(50),
                  }),
                ),
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 60,
                      origin: { y: 0.7 },
                      particleCount: Math.floor(40),
                    }),
                  ),
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 100,
                      decay: 0.91,
                      scalar: 0.8,
                      origin: { y: 0.7 },
                      particleCount: Math.floor(70),
                    }),
                  ),
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 120,
                      startVelocity: 25,
                      decay: 0.92,
                      scalar: 1.2,
                      origin: { y: 0.7 },
                      particleCount: Math.floor(20),
                    }),
                  ),
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 120,
                      startVelocity: 45,
                      origin: { y: 0.7 },
                      particleCount: Math.floor(20),
                    }),
                  );
              },
            ),
            _this
          );
        }
        return RealisticConductor;
      })(conductor);
      function presets_realistic_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function realistic_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_realistic_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Realistic(props) {
        return react.createElement(
          presets,
          realistic_object_spread({ Conductor: RealisticConductor }, props),
        );
      }
      let presets_realistic = Realistic;
      try {
        (Realistic.displayName = "Realistic"),
          (Realistic.__docgenInfo = {
            description: "",
            displayName: "Realistic",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/presets/realistic/index.tsx#Realistic"
            ] = {
              docgenInfo: Realistic.__docgenInfo,
              name: "Realistic",
              path: "src/presets/realistic/index.tsx#Realistic",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function pride_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function pride_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function pride_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function pride_get_prototype_of(o) {
        return (pride_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function pride_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && pride_set_prototype_of(subClass, superClass);
      }
      function pride_possible_constructor_return(self1, call) {
        return call &&
          ("object" === pride_type_of(call) || "function" == typeof call)
          ? call
          : pride_assert_this_initialized(self1);
      }
      function pride_set_prototype_of(o, p) {
        return (pride_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function pride_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function pride_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function pride_create_super(Derived) {
        var hasNativeReflectConstruct = pride_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = pride_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  pride_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            pride_possible_constructor_return(this, result)
          );
        };
      }
      var PrideConductor = (function (Conductor) {
        pride_inherits(PrideConductor, Conductor);
        var _super = pride_create_super(PrideConductor);
        function PrideConductor() {
          var _this;
          return (
            pride_class_call_check(this, PrideConductor),
            (_this = _super.apply(this, arguments)),
            pride_define_property(
              pride_assert_this_initialized(_this),
              "tickAnimation",
              function () {
                _this.confetti(
                  _this.decorateOptions({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ["#bb0000", "#ffffff"],
                  }),
                ),
                  _this.confetti(
                    _this.decorateOptions({
                      particleCount: 3,
                      angle: 120,
                      spread: 55,
                      origin: { x: 1 },
                      colors: ["#bb0000", "#ffffff"],
                    }),
                  );
              },
            ),
            _this
          );
        }
        return PrideConductor;
      })(conductor);
      function presets_pride_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function pride_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_pride_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Pride(props) {
        return react.createElement(
          presets,
          pride_object_spread({ Conductor: PrideConductor }, props),
        );
      }
      let presets_pride = Pride;
      try {
        (Pride.displayName = "Pride"),
          (Pride.__docgenInfo = {
            description: "",
            displayName: "Pride",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/presets/pride/index.tsx#Pride"] = {
              docgenInfo: Pride.__docgenInfo,
              name: "Pride",
              path: "src/presets/pride/index.tsx#Pride",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function snow_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function snow_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function snow_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function snow_get_prototype_of(o) {
        return (snow_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function snow_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && snow_set_prototype_of(subClass, superClass);
      }
      function snow_possible_constructor_return(self1, call) {
        return call &&
          ("object" === snow_type_of(call) || "function" == typeof call)
          ? call
          : snow_assert_this_initialized(self1);
      }
      function snow_set_prototype_of(o, p) {
        return (snow_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function snow_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function snow_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function snow_create_super(Derived) {
        var hasNativeReflectConstruct = snow_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = snow_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  snow_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            snow_possible_constructor_return(this, result)
          );
        };
      }
      var SnowConductor = (function (Conductor) {
        snow_inherits(SnowConductor, Conductor);
        var _super = snow_create_super(SnowConductor);
        function SnowConductor() {
          var _this;
          return (
            snow_class_call_check(this, SnowConductor),
            (_this = _super.apply(this, arguments)),
            snow_define_property(
              snow_assert_this_initialized(_this),
              "tickAnimation",
              function () {
                _this.confetti(
                  _this.decorateOptions({
                    particleCount: 1,
                    startVelocity: 0,
                    ticks: 200,
                    gravity: 0.3,
                    origin: {
                      x: Math.random(),
                      y: 0.999 * Math.random() - 0.2,
                    },
                    colors: ["#ffffff"],
                    shapes: ["circle"],
                    scalar: helpers_randomInRange(0.4, 1),
                  }),
                );
              },
            ),
            _this
          );
        }
        return SnowConductor;
      })(conductor);
      function presets_snow_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function snow_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_snow_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Snow(props) {
        return react.createElement(
          presets,
          snow_object_spread({ Conductor: SnowConductor }, props),
        );
      }
      let presets_snow = Snow;
      try {
        (Snow.displayName = "Snow"),
          (Snow.__docgenInfo = {
            description: "",
            displayName: "Snow",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/presets/snow/index.tsx#Snow"] = {
              docgenInfo: Snow.__docgenInfo,
              name: "Snow",
              path: "src/presets/snow/index.tsx#Snow",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function explosion_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function explosion_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function explosion_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function explosion_get_prototype_of(o) {
        return (explosion_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function explosion_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && explosion_set_prototype_of(subClass, superClass);
      }
      function explosion_possible_constructor_return(self1, call) {
        return call &&
          ("object" === explosion_type_of(call) || "function" == typeof call)
          ? call
          : explosion_assert_this_initialized(self1);
      }
      function explosion_set_prototype_of(o, p) {
        return (explosion_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function explosion_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function explosion_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function explosion_create_super(Derived) {
        var hasNativeReflectConstruct = explosion_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = explosion_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  explosion_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            explosion_possible_constructor_return(this, result)
          );
        };
      }
      var ExplosionConductor = (function (Conductor) {
        explosion_inherits(ExplosionConductor, Conductor);
        var _super = explosion_create_super(ExplosionConductor);
        function ExplosionConductor() {
          var _this;
          return (
            explosion_class_call_check(this, ExplosionConductor),
            (_this = _super.apply(this, arguments)),
            explosion_define_property(
              explosion_assert_this_initialized(_this),
              "tickAnimation",
              function () {
                _this.confetti(
                  _this.decorateOptions({
                    spread: 360,
                    ticks: 50,
                    gravity: 0,
                    decay: 0.94,
                    startVelocity: 30,
                    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
                    particleCount: 40,
                    scalar: 1.2,
                    shapes: ["star"],
                  }),
                ),
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 360,
                      ticks: 50,
                      gravity: 0,
                      decay: 0.94,
                      startVelocity: 30,
                      colors: [
                        "FFE400",
                        "FFBD00",
                        "E89400",
                        "FFCA6C",
                        "FDFFB8",
                      ],
                      particleCount: 10,
                      scalar: 0.75,
                      shapes: ["circle"],
                    }),
                  );
              },
            ),
            _this
          );
        }
        return ExplosionConductor;
      })(conductor);
      function presets_explosion_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function explosion_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_explosion_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Explosion(props) {
        return react.createElement(
          presets,
          explosion_object_spread({ Conductor: ExplosionConductor }, props),
        );
      }
      let presets_explosion = Explosion;
      try {
        (Explosion.displayName = "Explosion"),
          (Explosion.__docgenInfo = {
            description: "",
            displayName: "Explosion",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/presets/explosion/index.tsx#Explosion"
            ] = {
              docgenInfo: Explosion.__docgenInfo,
              name: "Explosion",
              path: "src/presets/explosion/index.tsx#Explosion",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function crossfire_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function crossfire_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function crossfire_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function crossfire_get_prototype_of(o) {
        return (crossfire_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function crossfire_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && crossfire_set_prototype_of(subClass, superClass);
      }
      function crossfire_possible_constructor_return(self1, call) {
        return call &&
          ("object" === crossfire_type_of(call) || "function" == typeof call)
          ? call
          : crossfire_assert_this_initialized(self1);
      }
      function crossfire_set_prototype_of(o, p) {
        return (crossfire_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function crossfire_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function crossfire_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function crossfire_create_super(Derived) {
        var hasNativeReflectConstruct = crossfire_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = crossfire_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  crossfire_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            crossfire_possible_constructor_return(this, result)
          );
        };
      }
      var CrossfireConductor = (function (Conductor) {
        crossfire_inherits(CrossfireConductor, Conductor);
        var _super = crossfire_create_super(CrossfireConductor);
        function CrossfireConductor() {
          var _this;
          return (
            crossfire_class_call_check(this, CrossfireConductor),
            (_this = _super.apply(this, arguments)),
            crossfire_define_property(
              crossfire_assert_this_initialized(_this),
              "tickAnimation",
              function () {
                var colors = ["#E8B837"],
                  particleCount = helpers_randomInRange(13, 17),
                  spread = helpers_randomInRange(75, 85),
                  decay = helpers_randomInRange(0.97, 0.99),
                  startVelocity = helpers_randomInRange(9, 11),
                  ticks = helpers_randomInRange(40, 60);
                _this.confetti(
                  _this.decorateOptions({
                    particleCount: particleCount,
                    spread: spread,
                    colors: colors,
                    decay: decay,
                    startVelocity: startVelocity,
                    ticks: ticks,
                    gravity: 0,
                    angle: 45,
                    origin: { x: 0, y: 1 },
                  }),
                ),
                  _this.confetti(
                    _this.decorateOptions({
                      particleCount: particleCount,
                      spread: spread,
                      colors: colors,
                      decay: decay,
                      startVelocity: startVelocity,
                      ticks: ticks,
                      gravity: 0,
                      angle: -45,
                      origin: { x: 0, y: 0 },
                    }),
                  ),
                  _this.confetti(
                    _this.decorateOptions({
                      particleCount: particleCount,
                      spread: spread,
                      colors: colors,
                      decay: decay,
                      startVelocity: startVelocity,
                      ticks: ticks,
                      gravity: 0,
                      angle: -135,
                      origin: { x: 1, y: 0 },
                    }),
                  ),
                  _this.confetti(
                    _this.decorateOptions({
                      particleCount: particleCount,
                      spread: spread,
                      colors: colors,
                      decay: decay,
                      startVelocity: startVelocity,
                      ticks: ticks,
                      gravity: 0,
                      angle: 135,
                      origin: { x: 1, y: 1 },
                    }),
                  );
              },
            ),
            _this
          );
        }
        return CrossfireConductor;
      })(conductor);
      function presets_crossfire_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function crossfire_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_crossfire_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Crossfire(props) {
        return react.createElement(
          presets,
          crossfire_object_spread({ Conductor: CrossfireConductor }, props),
        );
      }
      let presets_crossfire = Crossfire;
      try {
        (Crossfire.displayName = "Crossfire"),
          (Crossfire.__docgenInfo = {
            description: "",
            displayName: "Crossfire",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/presets/crossfire/index.tsx#Crossfire"
            ] = {
              docgenInfo: Crossfire.__docgenInfo,
              name: "Crossfire",
              path: "src/presets/crossfire/index.tsx#Crossfire",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function vortex_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function vortex_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _create_class(Constructor, protoProps, staticProps) {
        return (
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function vortex_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function vortex_get_prototype_of(o) {
        return (vortex_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function vortex_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && vortex_set_prototype_of(subClass, superClass);
      }
      function vortex_possible_constructor_return(self1, call) {
        return call &&
          ("object" === vortex_type_of(call) || "function" == typeof call)
          ? call
          : vortex_assert_this_initialized(self1);
      }
      function vortex_set_prototype_of(o, p) {
        return (vortex_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function vortex_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function vortex_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function vortex_create_super(Derived) {
        var hasNativeReflectConstruct = vortex_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = vortex_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  vortex_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            vortex_possible_constructor_return(this, result)
          );
        };
      }
      var angels = [0, -45, -90, -135, -180, -225, -270, -315],
        VortexConductor = (function (Conductor) {
          vortex_inherits(VortexConductor, Conductor);
          var _super = vortex_create_super(VortexConductor);
          function VortexConductor() {
            var _this;
            return (
              vortex_class_call_check(this, VortexConductor),
              (_this = _super.apply(this, arguments)),
              vortex_define_property(
                vortex_assert_this_initialized(_this),
                "tickCount",
                0,
              ),
              vortex_define_property(
                vortex_assert_this_initialized(_this),
                "tickAnimation",
                function () {
                  _this.confetti(
                    _this.decorateOptions({
                      spread: 120,
                      ticks: 60,
                      gravity: 0,
                      decay: 0.94,
                      startVelocity: 20,
                      colors: [
                        "004e64",
                        "00a5cf",
                        "#9fffcb",
                        "#25a18e",
                        "#7ae582",
                      ],
                      particleCount: 60,
                      shapes: ["circle", "square"],
                      angle: _this.angle,
                    }),
                  );
                },
              ),
              _this
            );
          }
          return (
            _create_class(VortexConductor, [
              {
                key: "angle",
                get: function get() {
                  return angels[this.tickCount++ % angels.length];
                },
              },
            ]),
            VortexConductor
          );
        })(conductor);
      function presets_vortex_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function vortex_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_vortex_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function vortex_Snow(props) {
        return react.createElement(
          presets,
          vortex_object_spread({ Conductor: VortexConductor }, props),
        );
      }
      let presets_vortex = vortex_Snow;
      try {
        (vortex_Snow.displayName = "Snow"),
          (vortex_Snow.__docgenInfo = {
            description: "",
            displayName: "Snow",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/presets/vortex/index.tsx#Snow"] = {
              docgenInfo: vortex_Snow.__docgenInfo,
              name: "Snow",
              path: "src/presets/vortex/index.tsx#Snow",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function photons_assert_this_initialized(self1) {
        if (void 0 === self1)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self1;
      }
      function photons_class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
      }
      function photons_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            "value" in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function photons_create_class(Constructor, protoProps, staticProps) {
        return (
          protoProps &&
            photons_defineProperties(Constructor.prototype, protoProps),
          staticProps && photons_defineProperties(Constructor, staticProps),
          Constructor
        );
      }
      function photons_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function photons_get_prototype_of(o) {
        return (photons_get_prototype_of = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function photons_inherits(subClass, superClass) {
        if ("function" != typeof superClass && null !== superClass)
          throw TypeError("Super expression must either be null or a function");
        (subClass.prototype = Object.create(
          superClass && superClass.prototype,
          { constructor: { value: subClass, writable: !0, configurable: !0 } },
        )),
          superClass && photons_set_prototype_of(subClass, superClass);
      }
      function photons_possible_constructor_return(self1, call) {
        return call &&
          ("object" === photons_type_of(call) || "function" == typeof call)
          ? call
          : photons_assert_this_initialized(self1);
      }
      function photons_set_prototype_of(o, p) {
        return (photons_set_prototype_of =
          Object.setPrototypeOf ||
          function setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function photons_type_of(obj) {
        return obj && "undefined" != typeof Symbol && obj.constructor === Symbol
          ? "symbol"
          : typeof obj;
      }
      function photons_is_native_reflect_construct() {
        if (
          "undefined" == typeof Reflect ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function photons_create_super(Derived) {
        var hasNativeReflectConstruct = photons_is_native_reflect_construct();
        return function _createSuperInternal() {
          var result,
            Super = photons_get_prototype_of(Derived);
          return (
            (result = hasNativeReflectConstruct
              ? Reflect.construct(
                  Super,
                  arguments,
                  photons_get_prototype_of(this).constructor,
                )
              : Super.apply(this, arguments)),
            photons_possible_constructor_return(this, result)
          );
        };
      }
      var colors = [
          "#f94144",
          "f3722c",
          "f8961e",
          "f9c74f",
          "90be6d",
          "43aa8b",
          "577590",
        ],
        config = [
          {
            origin: function () {
              return { x: helpers_randomInRange(0, 1), y: -0.1 };
            },
            angle: function () {
              return helpers_randomInRange(0, -180);
            },
          },
          {
            origin: function () {
              return { x: helpers_randomInRange(0, 1), y: 1.1 };
            },
            angle: function () {
              return helpers_randomInRange(0, 180);
            },
          },
          {
            origin: function () {
              return { x: -0.1, y: helpers_randomInRange(0, 1) };
            },
            angle: function () {
              return helpers_randomInRange(-90, 90);
            },
          },
          {
            origin: function () {
              return { x: 1.1, y: helpers_randomInRange(0, 1) };
            },
            angle: function () {
              return helpers_randomInRange(90, 270);
            },
          },
        ],
        PhotonsConductor = (function (Conductor) {
          photons_inherits(PhotonsConductor, Conductor);
          var _super = photons_create_super(PhotonsConductor);
          function PhotonsConductor() {
            var _this;
            return (
              photons_class_call_check(this, PhotonsConductor),
              (_this = _super.apply(this, arguments)),
              photons_define_property(
                photons_assert_this_initialized(_this),
                "tickCount",
                0,
              ),
              photons_define_property(
                photons_assert_this_initialized(_this),
                "tickAnimation",
                function () {
                  var colorIndex = Number(
                      helpers_randomInRange(0, colors.length - 1).toFixed(),
                    ),
                    _this_params = _this.params,
                    angle = _this_params.angle,
                    origin = _this_params.origin;
                  _this.confetti(
                    _this.decorateOptions({
                      particleCount: 1,
                      angle: angle(),
                      spread: 0,
                      gravity: 0,
                      ticks: 600,
                      decay: 1,
                      startVelocity: 7,
                      flat: !0,
                      origin: origin(),
                      shapes: ["circle"],
                      scalar: helpers_randomInRange(0.2, 6),
                      colors: [colors[colorIndex]],
                    }),
                  );
                },
              ),
              _this
            );
          }
          return (
            photons_create_class(PhotonsConductor, [
              {
                key: "params",
                get: function get() {
                  return config[this.tickCount++ % config.length];
                },
              },
            ]),
            PhotonsConductor
          );
        })(conductor);
      function presets_photons_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function photons_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_photons_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function Photons(props) {
        return react.createElement(
          presets,
          photons_object_spread({ Conductor: PhotonsConductor }, props),
        );
      }
      let presets_photons = Photons;
      try {
        (Photons.displayName = "Photons"),
          (Photons.__docgenInfo = {
            description: "",
            displayName: "Photons",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              autorun: {
                defaultValue: null,
                description: "",
                name: "autorun",
                required: !1,
                type: { name: "TRunAnimationParams" },
              },
              decorateOptions: {
                defaultValue: null,
                description: "",
                name: "decorateOptions",
                required: !1,
                type: { name: "TDecorateOptionsFn" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitPresetFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/presets/photons/index.tsx#Photons"] =
              {
                docgenInfo: Photons.__docgenInfo,
                name: "Photons",
                path: "src/presets/photons/index.tsx#Photons",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      function presets_stories_array_like_to_array(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function presets_stories_array_with_holes(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function presets_stories_define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function presets_stories_iterable_to_array_limit(arr, i) {
        var _s,
          _e,
          _i =
            null == arr
              ? null
              : ("undefined" != typeof Symbol && arr[Symbol.iterator]) ||
                arr["@@iterator"];
        if (null != _i) {
          var _arr = [],
            _n = !0,
            _d = !1;
          try {
            for (
              _i = _i.call(arr);
              !(_n = (_s = _i.next()).done) &&
              (_arr.push(_s.value), !i || _arr.length !== i);
              _n = !0
            );
          } catch (err) {
            (_d = !0), (_e = err);
          } finally {
            try {
              _n || null == _i.return || _i.return();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      function presets_stories_non_iterable_rest() {
        throw TypeError(
          "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function presets_stories_object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              presets_stories_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _object_spread_props(target, source) {
        return (
          (source = null != source ? source : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source),
              )
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key),
                );
              }),
          target
        );
      }
      function presets_stories_sliced_to_array(arr, i) {
        return (
          presets_stories_array_with_holes(arr) ||
          presets_stories_iterable_to_array_limit(arr, i) ||
          presets_stories_unsupported_iterable_to_array(arr, i) ||
          presets_stories_non_iterable_rest()
        );
      }
      function presets_stories_unsupported_iterable_to_array(o, minLen) {
        if (o) {
          if ("string" == typeof o)
            return presets_stories_array_like_to_array(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (
            ("Object" === n && o.constructor && (n = o.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(n);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return presets_stories_array_like_to_array(o, minLen);
        }
      }
      let presets_stories = {
        title: "Presets",
        component: src.A,
        render: function () {
          var config = {
              Fireworks: {
                run: { speed: 2 },
                link: linkTo("Presets", "Fireworks"),
                decorateOptions: {},
                component: presets_fireworks,
              },
              Crossfire: {
                run: { speed: 15 },
                link: linkTo("Presets", "Crossfire"),
                decorateOptions: { decay: 0.93, particleCount: 5 },
                component: presets_crossfire,
              },
              Snow: {
                run: { speed: 30 },
                link: linkTo("Presets", "Snow"),
                decorateOptions: { colors: ["#C9DDF1"] },
                component: presets_snow,
              },
              Realistic: {
                run: { speed: 1 },
                link: linkTo("Presets", "Realistic"),
                decorateOptions: {},
                component: presets_realistic,
              },
              Explosion: {
                run: { speed: 10 },
                link: linkTo("Presets", "Explosion"),
                decorateOptions: {},
                component: presets_explosion,
              },
              Pride: {
                run: { speed: 30 },
                link: linkTo("Presets", "Pride"),
                decorateOptions: { colors: ["#bb0000", "#00ff00"] },
                component: presets_pride,
              },
              Vortex: {
                run: { speed: 10 },
                link: linkTo("Presets", "Vortex"),
                decorateOptions: {},
                component: presets_vortex,
              },
              Photons: {
                run: { speed: 50 },
                link: linkTo("Presets", "Photons"),
                decorateOptions: {},
                component: presets_photons,
              },
            },
            conductors = (0, react.useRef)({});
          return react.createElement(
            "div",
            null,
            react.createElement(
              "div",
              { className: "list" },
              Object.keys(config).map(function (item) {
                var Component = config[item].component;
                return react.createElement(
                  "div",
                  {
                    key: item,
                    className: "item",
                    onMouseEnter: function () {
                      var _conductors_current_name;
                      null ===
                        (_conductors_current_name = conductors.current[item]) ||
                        void 0 === _conductors_current_name ||
                        _conductors_current_name.run(config[item].run);
                    },
                    onMouseLeave: function () {
                      var _conductors_current_name;
                      null ===
                        (_conductors_current_name = conductors.current[item]) ||
                        void 0 === _conductors_current_name ||
                        _conductors_current_name.pause();
                    },
                    onClick: config[item].link,
                  },
                  react.createElement("div", { className: "label" }, item),
                  react.createElement(Component, {
                    globalOptions: { useWorker: !1 },
                    onInit: function (param) {
                      var conductor = param.conductor;
                      conductors.current[item] = conductor;
                    },
                    className: "preset",
                    decorateOptions: function (base) {
                      return _object_spread_props(
                        presets_stories_object_spread(
                          {},
                          base,
                          config[item].decorateOptions,
                        ),
                        { scalar: 0.6 },
                      );
                    },
                  }),
                );
              }),
            ),
          );
        },
      };
      var Main = {},
        presets_stories_Fireworks = {
          args: { speed: 3, duration: 3e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit;
                    return react.createElement(presets_fireworks, {
                      onInit: onInit,
                    });
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Crossfire = {
          args: { speed: 15, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_crossfire, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Snow = {
          args: { speed: 60, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_snow, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                  decorateOptions: function (options) {
                    return _object_spread_props(
                      presets_stories_object_spread({}, options),
                      { colors: ["#C9DDF1"] },
                    );
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Realistic = {
          args: { speed: 1, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit;
                    return react.createElement(presets_realistic, {
                      onInit: onInit,
                    });
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Explosion = {
          args: { speed: 10, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_explosion, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Pride = {
          args: { speed: 60, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_pride, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                  decorateOptions: function (options) {
                    return presets_stories_object_spread({}, options);
                  },
                },
                props,
              ),
            );
          },
        },
        Vortex = {
          args: { speed: 15, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_vortex, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                  decorateOptions: function (options) {
                    return presets_stories_object_spread({}, options);
                  },
                },
                props,
              ),
            );
          },
        },
        presets_stories_Photons = {
          args: { speed: 8, duration: 5e3, delay: 0 },
          argTypes: {
            speed: { control: "number" },
            duration: { control: "number" },
            delay: { control: "number" },
          },
          render: function (props) {
            return react.createElement(
              Wrapper,
              presets_stories_object_spread(
                {
                  preset: function (param) {
                    var onInit = param.onInit,
                      decorateOptions = param.decorateOptions;
                    return react.createElement(presets_photons, {
                      onInit: onInit,
                      decorateOptions: decorateOptions,
                    });
                  },
                },
                props,
              ),
            );
          },
        },
        Wrapper = function (param) {
          var preset = param.preset,
            speed = param.speed,
            duration = param.duration,
            delay = param.delay,
            decorateOptions = param.decorateOptions,
            _React_useState = presets_stories_sliced_to_array(
              react.useState(),
              2,
            ),
            conductor = _React_useState[0],
            setConductor = _React_useState[1];
          return react.createElement(
            "div",
            null,
            react.createElement(
              "div",
              { className: "controls" },
              react.createElement(
                "button",
                {
                  onClick: function () {
                    null == conductor || conductor.shoot();
                  },
                },
                "Once",
              ),
              react.createElement(
                "button",
                {
                  onClick: function () {
                    null == conductor ||
                      conductor.run({
                        speed: speed,
                        duration: duration,
                        delay: delay,
                      });
                  },
                },
                "Run",
              ),
              react.createElement(
                "button",
                {
                  onClick: function () {
                    null == conductor || conductor.pause();
                  },
                },
                "Pause",
              ),
              react.createElement(
                "button",
                {
                  onClick: function () {
                    null == conductor || conductor.stop();
                  },
                },
                "Stop",
              ),
            ),
            preset({
              onInit: function (param) {
                setConductor(param.conductor);
              },
              decorateOptions: decorateOptions,
            }),
          );
        };
      (Main.parameters = {
        ...Main.parameters,
        docs: {
          ...Main.parameters?.docs,
          source: { originalSource: "{}", ...Main.parameters?.docs?.source },
        },
      }),
        (presets_stories_Fireworks.parameters = {
          ...presets_stories_Fireworks.parameters,
          docs: {
            ...presets_stories_Fireworks.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 3,\n    duration: 3000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit\n    }) => <FireworksPreset onInit={onInit} />} {...props} />;\n  }\n}',
              ...presets_stories_Fireworks.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Crossfire.parameters = {
          ...presets_stories_Crossfire.parameters,
          docs: {
            ...presets_stories_Crossfire.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 15,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <CrossfirePreset onInit={onInit} decorateOptions={decorateOptions} />} {...props} />;\n  }\n}',
              ...presets_stories_Crossfire.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Snow.parameters = {
          ...presets_stories_Snow.parameters,
          docs: {
            ...presets_stories_Snow.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 60,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <SnowPreset onInit={onInit} decorateOptions={decorateOptions} />} decorateOptions={options => ({\n      ...options,\n      colors: ["#C9DDF1"]\n    })} {...props} />;\n  }\n}',
              ...presets_stories_Snow.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Realistic.parameters = {
          ...presets_stories_Realistic.parameters,
          docs: {
            ...presets_stories_Realistic.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 1,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit\n    }) => <RealisticPreset onInit={onInit} />} {...props} />;\n  }\n}',
              ...presets_stories_Realistic.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Explosion.parameters = {
          ...presets_stories_Explosion.parameters,
          docs: {
            ...presets_stories_Explosion.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 10,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <ExplosionPreset onInit={onInit} decorateOptions={decorateOptions} />} {...props} />;\n  }\n}',
              ...presets_stories_Explosion.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Pride.parameters = {
          ...presets_stories_Pride.parameters,
          docs: {
            ...presets_stories_Pride.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 60,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <PridePreset onInit={onInit} decorateOptions={decorateOptions} />} decorateOptions={options => ({\n      ...options\n      // colors: ["#bb0000", "#00ff00"],\n    })} {...props} />;\n  }\n}',
              ...presets_stories_Pride.parameters?.docs?.source,
            },
          },
        }),
        (Vortex.parameters = {
          ...Vortex.parameters,
          docs: {
            ...Vortex.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 15,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <VortexPreset onInit={onInit} decorateOptions={decorateOptions} />} decorateOptions={options => ({\n      ...options\n      // colors: ["#bb0000", "#00ff00"],\n    })} {...props} />;\n  }\n}',
              ...Vortex.parameters?.docs?.source,
            },
          },
        }),
        (presets_stories_Photons.parameters = {
          ...presets_stories_Photons.parameters,
          docs: {
            ...presets_stories_Photons.parameters?.docs,
            source: {
              originalSource:
                '{\n  args: {\n    speed: 8,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <PhotonsPreset onInit={onInit} decorateOptions={decorateOptions} />} {...props} />;\n  }\n}',
              ...presets_stories_Photons.parameters?.docs?.source,
            },
          },
        });
      let __namedExportsOrder = [
        "Main",
        "Fireworks",
        "Crossfire",
        "Snow",
        "Realistic",
        "Explosion",
        "Pride",
        "Vortex",
        "Photons",
      ];
    },
    "./src/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        A: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/react/index.js",
        ),
        canvas_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/canvas-confetti/dist/confetti.module.mjs",
        );
      function _define_property(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _object_spread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {},
            ownKeys = Object.keys(source);
          "function" == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function (sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function (key) {
              _define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var DEFAULT_GLOBAL_OPTIONS = { resize: !0, useWorker: !1 },
        DEFAULT_STYLE = {
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        };
      function getFinalStyle(style, className) {
        return style || className ? style : DEFAULT_STYLE;
      }
      function ReactCanvasConfetti(param) {
        var style = param.style,
          className = param.className,
          width = param.width,
          height = param.height,
          globalOptions = param.globalOptions,
          onInit = param.onInit,
          canvasRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),
          confetti = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
        return (
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            if (canvasRef.current)
              return (
                (confetti.current =
                  canvas_confetti__WEBPACK_IMPORTED_MODULE_1__.A.create(
                    canvasRef.current,
                    _object_spread({}, DEFAULT_GLOBAL_OPTIONS, globalOptions),
                  )),
                null == onInit || onInit({ confetti: confetti.current }),
                function () {
                  var _confetti_current;
                  null === (_confetti_current = confetti.current) ||
                    void 0 === _confetti_current ||
                    _confetti_current.reset();
                }
              );
          }, []),
          react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas", {
            ref: canvasRef,
            style: getFinalStyle(style, className),
            className: className,
            width: width,
            height: height,
          })
        );
      }
      let __WEBPACK_DEFAULT_EXPORT__ = ReactCanvasConfetti;
      try {
        (ReactCanvasConfetti.displayName = "ReactCanvasConfetti"),
          (ReactCanvasConfetti.__docgenInfo = {
            description: "",
            displayName: "ReactCanvasConfetti",
            props: {
              className: {
                defaultValue: null,
                description: "",
                name: "className",
                required: !1,
                type: { name: "string" },
              },
              style: {
                defaultValue: null,
                description: "",
                name: "style",
                required: !1,
                type: { name: "CSSProperties" },
              },
              width: {
                defaultValue: null,
                description: "",
                name: "width",
                required: !1,
                type: { name: "string | number" },
              },
              height: {
                defaultValue: null,
                description: "",
                name: "height",
                required: !1,
                type: { name: "string | number" },
              },
              globalOptions: {
                defaultValue: null,
                description: "",
                name: "globalOptions",
                required: !1,
                type: { name: "GlobalOptions" },
              },
              onInit: {
                defaultValue: null,
                description: "",
                name: "onInit",
                required: !1,
                type: { name: "TOnInitComponentFn" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/index.tsx#ReactCanvasConfetti"] = {
              docgenInfo: ReactCanvasConfetti.__docgenInfo,
              name: "ReactCanvasConfetti",
              path: "src/index.tsx#ReactCanvasConfetti",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
  },
]);
