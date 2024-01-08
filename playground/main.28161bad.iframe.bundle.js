(self.webpackChunkreact_canvas_confetti =
  self.webpackChunkreact_canvas_confetti || []).push([
  [179],
  {
    "./node_modules/@storybook/addon-interactions/dist sync recursive": (
      module,
    ) => {
      function webpackEmptyContext(req) {
        var e = Error("Cannot find module '" + req + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      (webpackEmptyContext.keys = () => []),
        (webpackEmptyContext.resolve = webpackEmptyContext),
        (webpackEmptyContext.id =
          "./node_modules/@storybook/addon-interactions/dist sync recursive"),
        (module.exports = webpackEmptyContext);
    },
    "./storybook-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      var external_STORYBOOK_MODULE_GLOBAL_ =
          __webpack_require__("@storybook/global"),
        external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__(
          "@storybook/preview-api",
        ),
        external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__(
          "@storybook/channels",
        );
      let pipeline = (x) => x(),
        importers = [
          async (path) => {
            if (
              !/^\.[\\/](?:storybook(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(
                path,
              )
            )
              return;
            let pathRemainder = path.substring(12);
            return __webpack_require__(
              "./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",
            )("./" + pathRemainder);
          },
        ];
      async function importFn(path) {
        for (let i = 0; i < importers.length; i++) {
          let moduleExports = await pipeline(() => importers[i](path));
          if (moduleExports) return moduleExports;
        }
      }
      let channel = (0,
      external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({
        page: "preview",
      });
      external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),
        "DEVELOPMENT" ===
          external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE &&
          (window.__STORYBOOK_SERVER_CHANNEL__ = channel);
      let preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();
      (window.__STORYBOOK_PREVIEW__ = preview),
        (window.__STORYBOOK_STORY_STORE__ = preview.storyStore),
        (window.__STORYBOOK_ADDONS_CHANNEL__ = channel),
        (window.__STORYBOOK_CLIENT_API__ =
          new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({
            storyStore: preview.storyStore,
          })),
        preview.initialize({
          importFn: importFn,
          getProjectAnnotations: () =>
            (0, external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([
              __webpack_require__(
                "./node_modules/@storybook/react/dist/entry-preview.mjs",
              ),
              __webpack_require__(
                "./node_modules/@storybook/react/dist/entry-preview-docs.mjs",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-links/dist/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/docs/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/actions/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/measure/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/outline/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-essentials/dist/highlight/preview.js",
              ),
              __webpack_require__(
                "./node_modules/@storybook/addon-interactions/dist/preview.js",
              ),
              __webpack_require__("./.storybook/preview.ts"),
            ]),
        });
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./storybook/index.css":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, {
          Z: () => __WEBPACK_DEFAULT_EXPORT__,
        });
        var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/sourceMaps.js",
            ),
          _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              "./node_modules/css-loader/dist/runtime/api.js",
            ),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          )()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `.controls {
  bottom: 15%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  left: 50%;
  margin-left: -50px;
  position: fixed;
}

.controls button {
  height: 40px;
  width: 100px;
  pointer-events: auto;
}

.list {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  margin: auto;
}

.item {
  outline: 2px solid #fbebd1;
  width: 45%;
  margin: 2.5%;
  position: relative;
  aspect-ratio: 3 / 2;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
}

.item:hover {
  outline-color: #ee7b49;
}

.preset {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.label {
  font-size: min(5vw, 50px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Tahoma, sans-serif;
  z-index: 1;
  transition: opacity 0.25s;
}

.item:hover .label {
  opacity: 0.05;
}
`,
          "",
          {
            version: 3,
            sources: ["webpack://./storybook/index.css"],
            names: [],
            mappings:
              "AAAA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,aAAa;;EAEb,eAAe;EACf,8BAA8B;EAC9B,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,0BAA0B;EAC1B,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,+BAA+B;EAC/B,UAAU;EACV,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf",
            sourcesContent: [
              ".controls {\n  bottom: 15%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  left: 50%;\n  margin-left: -50px;\n  position: fixed;\n}\n\n.controls button {\n  height: 40px;\n  width: 100px;\n  pointer-events: auto;\n}\n\n.list {\n  display: flex;\n\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 1400px;\n  margin: auto;\n}\n\n.item {\n  outline: 2px solid #fbebd1;\n  width: 45%;\n  margin: 2.5%;\n  position: relative;\n  aspect-ratio: 3 / 2;\n  border-radius: 3px;\n  text-transform: capitalize;\n  cursor: pointer;\n}\n\n.item:hover {\n  outline-color: #ee7b49;\n}\n\n.preset {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.label {\n  font-size: min(5vw, 50px);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-family: Tahoma, sans-serif;\n  z-index: 1;\n  transition: opacity 0.25s;\n}\n\n.item:hover .label {\n  opacity: 0.05;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        let __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./.storybook/preview.ts": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          default: () => _storybook_preview,
        });
      var injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(
          injectStylesIntoStyleTag,
        ),
        styleDomAPI = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
        ),
        styleDomAPI_default = __webpack_require__.n(styleDomAPI),
        insertBySelector = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertBySelector.js",
        ),
        insertBySelector_default = __webpack_require__.n(insertBySelector),
        setAttributesWithoutAttributes = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
        ),
        setAttributesWithoutAttributes_default = __webpack_require__.n(
          setAttributesWithoutAttributes,
        ),
        insertStyleElement = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
        ),
        insertStyleElement_default = __webpack_require__.n(insertStyleElement),
        styleTagTransform = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
        ),
        styleTagTransform_default = __webpack_require__.n(styleTagTransform),
        cjs_ruleSet_1_rules_8_use_1_storybook = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./storybook/index.css",
        ),
        options = {};
      (options.styleTagTransform = styleTagTransform_default()),
        (options.setAttributes = setAttributesWithoutAttributes_default()),
        (options.insert = insertBySelector_default().bind(null, "head")),
        (options.domAPI = styleDomAPI_default()),
        (options.insertStyleElement = insertStyleElement_default()),
        injectStylesIntoStyleTag_default()(
          cjs_ruleSet_1_rules_8_use_1_storybook.Z,
          options,
        ),
        cjs_ruleSet_1_rules_8_use_1_storybook.Z &&
          cjs_ruleSet_1_rules_8_use_1_storybook.Z.locals &&
          cjs_ruleSet_1_rules_8_use_1_storybook.Z.locals;
      let _storybook_preview = {
        parameters: {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: {
            matchers: { color: /(background|color)$/i, date: /Date$/i },
          },
        },
      };
    },
    "./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./component.stories": [
            "./storybook/component.stories.tsx",
            439,
            152,
          ],
          "./component.stories.tsx": [
            "./storybook/component.stories.tsx",
            439,
            152,
          ],
          "./presets.stories": ["./storybook/presets.stories.tsx", 439, 968],
          "./presets.stories.tsx": [
            "./storybook/presets.stories.tsx",
            439,
            968,
          ],
        };
        function webpackAsyncContext(req) {
          if (!__webpack_require__.o(map, req))
            return Promise.resolve().then(() => {
              var e = Error("Cannot find module '" + req + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          var ids = map[req],
            id = ids[0];
          return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() =>
            __webpack_require__(id),
          );
        }
        (webpackAsyncContext.keys = () => Object.keys(map)),
          (webpackAsyncContext.id =
            "./storybook lazy recursive ^\\.\\/.*$ include: (?:\\/storybook(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$"),
          (module.exports = webpackAsyncContext);
      },
    "@storybook/channels": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CHANNELS__;
    },
    "@storybook/client-logger": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;
    },
    "@storybook/core-events": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;
    },
    "@storybook/global": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_GLOBAL__;
    },
    "@storybook/preview-api": (module) => {
      "use strict";
      module.exports = __STORYBOOK_MODULE_PREVIEW_API__;
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(0, [804], () =>
      __webpack_exec__("./storybook-config-entry.js"),
    ),
      __webpack_require__.O();
  },
]);
//# sourceMappingURL=main.28161bad.iframe.bundle.js.map
