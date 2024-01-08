"use strict";
(self.webpackChunkreact_canvas_confetti =
  self.webpackChunkreact_canvas_confetti || []).push([
  [152],
  {
    "./storybook/component.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Main: () => Main,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/react/index.js",
        ),
        _src__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__("./src/index.tsx");
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
      var normalizeOptions = function (props) {
          var colors = props.colors,
            resize = props.resize,
            useWorker = props.useWorker;
          return {
            options: _object_spread_props(
              _object_spread(
                {},
                _object_without_properties(props, [
                  "colors",
                  "resize",
                  "useWorker",
                ]),
              ),
              {
                colors:
                  null == colors
                    ? void 0
                    : colors.map(function (item) {
                        return COLOR_MAP[item];
                      }),
              },
            ),
            globalOptions: { resize: resize, useWorker: useWorker },
          };
        },
        Component = function (props) {
          var _normalizeOptions = normalizeOptions(props),
            options = _normalizeOptions.options,
            globalOptions = _normalizeOptions.globalOptions,
            _useState = _sliced_to_array(
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(globalOptions),
              2,
            ),
            prevGlobalOptions = _useState[0],
            setPrevGlobalOptions = _useState[1],
            _useState1 = _sliced_to_array(
              (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),
              2,
            ),
            needRemount = _useState1[0],
            setNeedRemount = _useState1[1];
          (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
            JSON.stringify(globalOptions) !==
              JSON.stringify(prevGlobalOptions) &&
              (setNeedRemount(!0),
              setTimeout(function () {
                setNeedRemount(!1);
              }, 1)),
              setPrevGlobalOptions(globalOptions);
          });
          var instance = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
          return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
            "div",
            null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(
              "div",
              { className: "controls" },
              react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                "button",
                {
                  onClick: function () {
                    var _instance_current;
                    null === (_instance_current = instance.current) ||
                      void 0 === _instance_current ||
                      _instance_current.call(instance, options);
                  },
                },
                "Shoot",
              ),
            ),
            needRemount
              ? null
              : react__WEBPACK_IMPORTED_MODULE_0__.createElement(
                  _src__WEBPACK_IMPORTED_MODULE_1__.Z,
                  {
                    className: "canvas",
                    globalOptions: globalOptions,
                    onInit: function (param) {
                      var confetti = param.confetti;
                      return (instance.current = confetti);
                    },
                  },
                ),
          );
        },
        COLOR_MAP = {
          blue: "#26ccff",
          purple: "#a25afd",
          red: "#ff5e7e",
          green: "#88ff5a",
          yellow: "#fcff42",
          orange: "#ffa62d",
          pink: "#ff36ff",
        };
      let __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Component/React Canvas Confetti",
        component: Component,
        args: {
          particleCount: 500,
          angle: 90,
          spread: 360,
          startVelocity: 45,
          decay: 0.8,
          gravity: 1,
          drift: 0,
          ticks: 600,
          origin: { x: 0.5, y: 0.5 },
          colors: [
            "blue",
            "purple",
            "red",
            "green",
            "yellow",
            "orange",
            "pink",
          ],
          shapes: ["circle", "square"],
          scalar: 1,
          zIndex: -1,
          disableForReducedMotion: !1,
          resize: !0,
          useWorker: !0,
        },
        argTypes: {
          particleCount: {
            control: { type: "range", min: 1, max: 2e3, step: 1 },
          },
          angle: { control: { type: "range", min: 1, max: 360, step: 1 } },
          spread: { control: { type: "range", min: 1, max: 360, step: 1 } },
          startVelocity: {
            control: { type: "range", min: 1, max: 360, step: 1 },
          },
          decay: { control: { type: "range", min: 0, max: 1, step: 0.1 } },
          gravity: { control: { type: "range", min: -3, max: 3, step: 0.1 } },
          drift: { control: { type: "range", min: 1, max: 3, step: 0.1 } },
          ticks: { control: { type: "range", min: 1, max: 1e3, step: 1 } },
          origin: {
            x: { control: { type: "range", min: -3, max: 3, step: 0.1 } },
            y: { control: { type: "range", min: -3, max: 3, step: 0.1 } },
          },
          colors: { control: "inline-check", options: Object.keys(COLOR_MAP) },
          shapes: {
            control: "inline-check",
            options: ["circle", "square", "star"],
          },
          scalar: { control: { type: "range", min: 0, max: 5, step: 0.1 } },
          zIndex: { control: { type: "range", min: -1, max: 10, step: 1 } },
          disableForReducedMotion: { control: { type: "boolean" } },
          resize: { control: { type: "boolean" } },
          useWorker: { control: { type: "boolean" } },
        },
        render: Component,
      };
      var Main = {};
      Main.parameters = {
        ...Main.parameters,
        docs: {
          ...Main.parameters?.docs,
          source: { originalSource: "{}", ...Main.parameters?.docs?.source },
        },
      };
      let __namedExportsOrder = ["Main"];
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
