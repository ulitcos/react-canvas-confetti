"use strict";
(self.webpackChunkreact_canvas_confetti =
  self.webpackChunkreact_canvas_confetti || []).push([
  [968],
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
          Pride: () => presets_stories_Pride,
          Realistic: () => presets_stories_Realistic,
          Snow: () => presets_stories_Snow,
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
      function _class_call_check(instance, Constructor) {
        if (!(instance instanceof Constructor))
          throw TypeError("Cannot call a class as a function");
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
      let helpers_Conductor = function Conductor(param) {
        var confetti = param.confetti,
          getTickAnimation = param.getTickAnimation,
          decorateOptions = param.decorateOptions,
          _this = this;
        _class_call_check(this, Conductor),
          _define_property(this, "interval", null),
          _define_property(this, "confetti", void 0),
          _define_property(this, "getTickAnimation", void 0),
          _define_property(this, "decorateOptions", void 0),
          _define_property(this, "shoot", function () {
            return _this.getTickAnimation(
              _this.confetti,
              _this.decorateOptions,
            );
          }),
          _define_property(this, "run", function (param) {
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
          _define_property(this, "pause", function () {
            clearInterval(_this.interval), (_this.interval = null);
          }),
          _define_property(this, "stop", function () {
            _this.pause(), _this.confetti.reset();
          }),
          (this.confetti = confetti),
          (this.getTickAnimation = getTickAnimation),
          (this.decorateOptions = decorateOptions);
      };
      function _array_like_to_array(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _array_with_holes(arr) {
        if (Array.isArray(arr)) return arr;
      }
      function presets_define_property(obj, key, value) {
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
              presets_define_property(target, key, source[key]);
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
          getTickAnimation = _param.getTickAnimation,
          autorun = _param.autorun,
          onInit = _param.onInit,
          rest = _object_without_properties(_param, [
            "decorateOptions",
            "getTickAnimation",
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
                var conductor = new helpers_Conductor({
                  confetti: confetti,
                  getTickAnimation: getTickAnimation,
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
            src.Z,
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
              getTickAnimation: {
                defaultValue: null,
                description: "",
                name: "getTickAnimation",
                required: !0,
                type: { name: "TGetTickAnimationFn" },
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
      let helpers_randomInRange = function (min, max) {
        return Math.random() * (max - min) + min;
      };
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
              fireworks_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var getTickAnimation = function (confetti, decorateOptions) {
        confetti(
          decorateOptions({
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
          confetti(
            decorateOptions({
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
      };
      function Fireworks(props) {
        return react.createElement(
          presets,
          fireworks_object_spread(
            { getTickAnimation: getTickAnimation },
            props,
          ),
        );
      }
      let fireworks = Fireworks;
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
              realistic_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var realistic_getTickAnimation = function (confetti, decorateOptions) {
        confetti(
          decorateOptions({
            spread: 26,
            startVelocity: 55,
            origin: { y: 0.7 },
            particleCount: Math.floor(50),
          }),
        ),
          confetti(
            decorateOptions({
              spread: 60,
              origin: { y: 0.7 },
              particleCount: Math.floor(40),
            }),
          ),
          confetti(
            decorateOptions({
              spread: 100,
              decay: 0.91,
              scalar: 0.8,
              origin: { y: 0.7 },
              particleCount: Math.floor(70),
            }),
          ),
          confetti(
            decorateOptions({
              spread: 120,
              startVelocity: 25,
              decay: 0.92,
              scalar: 1.2,
              origin: { y: 0.7 },
              particleCount: Math.floor(20),
            }),
          ),
          confetti(
            decorateOptions({
              spread: 120,
              startVelocity: 45,
              origin: { y: 0.7 },
              particleCount: Math.floor(20),
            }),
          );
      };
      function Realistic(props) {
        return react.createElement(
          presets,
          realistic_object_spread(
            { getTickAnimation: realistic_getTickAnimation },
            props,
          ),
        );
      }
      let realistic = Realistic;
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
              pride_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var pride_getTickAnimation = function (confetti, decorateOptions) {
        confetti(
          decorateOptions({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ["#bb0000", "#ffffff"],
          }),
        ),
          confetti(
            decorateOptions({
              particleCount: 3,
              angle: 120,
              spread: 55,
              origin: { x: 1 },
              colors: ["#bb0000", "#ffffff"],
            }),
          );
      };
      function Pride(props) {
        return react.createElement(
          presets,
          pride_object_spread(
            { getTickAnimation: pride_getTickAnimation },
            props,
          ),
        );
      }
      let pride = Pride;
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
              snow_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var snow_getTickAnimation = function (confetti, decorateOptions) {
        confetti(
          decorateOptions({
            particleCount: 1,
            startVelocity: 0,
            ticks: 200,
            gravity: 0.3,
            origin: { x: Math.random(), y: 0.999 * Math.random() - 0.2 },
            colors: ["#ffffff"],
            shapes: ["circle"],
            scalar: helpers_randomInRange(0.4, 1),
          }),
        );
      };
      function Snow(props) {
        return react.createElement(
          presets,
          snow_object_spread(
            { getTickAnimation: snow_getTickAnimation },
            props,
          ),
        );
      }
      let snow = Snow;
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
              explosion_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var explosion_getTickAnimation = function (confetti, decorateOptions) {
        confetti(
          decorateOptions({
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
          confetti(
            decorateOptions({
              spread: 360,
              ticks: 50,
              gravity: 0,
              decay: 0.94,
              startVelocity: 30,
              colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            }),
          );
      };
      function Explosion(props) {
        return react.createElement(
          presets,
          explosion_object_spread(
            { getTickAnimation: explosion_getTickAnimation },
            props,
          ),
        );
      }
      let explosion = Explosion;
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
              crossfire_define_property(target, key, source[key]);
            });
        }
        return target;
      }
      var crossfire_getTickAnimation = function (confetti, decorateOptions) {
        var colors = ["#E8B837"],
          particleCount = helpers_randomInRange(13, 17),
          spread = helpers_randomInRange(75, 85),
          decay = helpers_randomInRange(0.97, 0.99),
          startVelocity = helpers_randomInRange(9, 11),
          ticks = helpers_randomInRange(40, 60);
        confetti(
          decorateOptions({
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
          confetti(
            decorateOptions({
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
          confetti(
            decorateOptions({
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
          confetti(
            decorateOptions({
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
      };
      function Crossfire(props) {
        return react.createElement(
          presets,
          crossfire_object_spread(
            { getTickAnimation: crossfire_getTickAnimation },
            props,
          ),
        );
      }
      let crossfire = Crossfire;
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
        component: src.Z,
        render: function () {
          var config = {
              Fireworks: {
                run: { speed: 2 },
                link: linkTo("Presets", "Fireworks"),
                decorateOptions: {},
                component: fireworks,
              },
              Crossfire: {
                run: { speed: 15 },
                link: linkTo("Presets", "Crossfire"),
                decorateOptions: { decay: 0.93, particleCount: 5 },
                component: crossfire,
              },
              Snow: {
                run: { speed: 30 },
                link: linkTo("Presets", "Snow"),
                decorateOptions: { colors: ["#C9DDF1"] },
                component: snow,
              },
              Realistic: {
                run: { speed: 1 },
                link: linkTo("Presets", "Realistic"),
                decorateOptions: {},
                component: realistic,
              },
              Explosion: {
                run: { speed: 10 },
                link: linkTo("Presets", "Explosion"),
                decorateOptions: {},
                component: explosion,
              },
              Pride: {
                run: { speed: 30 },
                link: linkTo("Presets", "Pride"),
                decorateOptions: { colors: ["#bb0000", "#00ff00"] },
                component: pride,
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
                    return react.createElement(fireworks, { onInit: onInit });
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
                    return react.createElement(crossfire, {
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
                    return react.createElement(snow, {
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
                    return react.createElement(realistic, { onInit: onInit });
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
                    return react.createElement(explosion, {
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
                    return react.createElement(pride, {
                      autorun: { speed: 20 },
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
                '{\n  args: {\n    speed: 60,\n    duration: 5000,\n    delay: 0\n  },\n  argTypes: {\n    speed: {\n      control: "number"\n    },\n    duration: {\n      control: "number"\n    },\n    delay: {\n      control: "number"\n    }\n  },\n  render: (props: TRunAnimationParams) => {\n    return <Wrapper preset={({\n      onInit,\n      decorateOptions\n    }) => <PridePreset autorun={{\n      speed: 20\n    }} onInit={onInit} decorateOptions={decorateOptions} />} decorateOptions={options => ({\n      ...options\n      // colors: ["#bb0000", "#00ff00"],\n    })} {...props} />;\n  }\n}',
              ...presets_stories_Pride.parameters?.docs?.source,
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
      ];
    },
    "./src/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
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
                  canvas_confetti__WEBPACK_IMPORTED_MODULE_1__.Z.create(
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
