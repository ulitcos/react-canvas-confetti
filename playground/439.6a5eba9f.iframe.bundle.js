"use strict";
(self.webpackChunkreact_canvas_confetti =
  self.webpackChunkreact_canvas_confetti || []).push([
  [439],
  {
    "./node_modules/canvas-confetti/dist/confetti.module.mjs": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        Z: () => __WEBPACK_DEFAULT_EXPORT__,
      });
      var module = {};
      !(function main(global, module, isWorker, workerSize) {
        var skipTransform,
          map,
          frame,
          cancel,
          TIME,
          frames,
          lastFrameTime,
          defaultFire,
          canUseWorker = !!(
            global.Worker &&
            global.Blob &&
            global.Promise &&
            global.OffscreenCanvas &&
            global.OffscreenCanvasRenderingContext2D &&
            global.HTMLCanvasElement &&
            global.HTMLCanvasElement.prototype.transferControlToOffscreen &&
            global.URL &&
            global.URL.createObjectURL
          ),
          canUsePaths =
            "function" == typeof Path2D && "function" == typeof DOMMatrix;
        function noop() {}
        function promise(func) {
          var ModulePromise = module.exports.Promise,
            Prom = void 0 !== ModulePromise ? ModulePromise : global.Promise;
          return "function" == typeof Prom
            ? new Prom(func)
            : (func(noop, noop), null);
        }
        var bitmapMapper =
            ((skipTransform = (function () {
              if (!global.OffscreenCanvas) return !1;
              var canvas = new OffscreenCanvas(1, 1),
                ctx = canvas.getContext("2d");
              ctx.fillRect(0, 0, 1, 1);
              var bitmap = canvas.transferToImageBitmap();
              try {
                ctx.createPattern(bitmap, "no-repeat");
              } catch (e) {
                return !1;
              }
              return !0;
            })()),
            (map = new Map()),
            {
              transform: function (bitmap) {
                if (skipTransform) return bitmap;
                if (map.has(bitmap)) return map.get(bitmap);
                var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
                return (
                  canvas.getContext("2d").drawImage(bitmap, 0, 0),
                  map.set(bitmap, canvas),
                  canvas
                );
              },
              clear: function () {
                map.clear();
              },
            }),
          raf =
            ((TIME = Math.floor(1e3 / 60)),
            (frames = {}),
            (lastFrameTime = 0),
            "function" == typeof requestAnimationFrame &&
            "function" == typeof cancelAnimationFrame
              ? ((frame = function (cb) {
                  var id = Math.random();
                  return (
                    (frames[id] = requestAnimationFrame(function onFrame(time) {
                      lastFrameTime === time || lastFrameTime + TIME - 1 < time
                        ? ((lastFrameTime = time), delete frames[id], cb())
                        : (frames[id] = requestAnimationFrame(onFrame));
                    })),
                    id
                  );
                }),
                (cancel = function (id) {
                  frames[id] && cancelAnimationFrame(frames[id]);
                }))
              : ((frame = function (cb) {
                  return setTimeout(cb, TIME);
                }),
                (cancel = function (timer) {
                  return clearTimeout(timer);
                })),
            { frame: frame, cancel: cancel }),
          getWorker = (function () {
            var worker,
              prom,
              resolves = {};
            function decorate(worker) {
              function execute(options, callback) {
                worker.postMessage({
                  options: options || {},
                  callback: callback,
                });
              }
              (worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({ canvas: offscreen }, [offscreen]);
              }),
                (worker.fire = function fireWorker(options, size, done) {
                  if (prom) return execute(options, null), prom;
                  var id = Math.random().toString(36).slice(2);
                  return (prom = promise(function (resolve) {
                    function workerDone(msg) {
                      msg.data.callback === id &&
                        (delete resolves[id],
                        worker.removeEventListener("message", workerDone),
                        (prom = null),
                        bitmapMapper.clear(),
                        done(),
                        resolve());
                    }
                    worker.addEventListener("message", workerDone),
                      execute(options, id),
                      (resolves[id] = workerDone.bind(null, {
                        data: { callback: id },
                      }));
                  }));
                }),
                (worker.reset = function resetWorker() {
                  for (var id in (worker.postMessage({ reset: !0 }), resolves))
                    resolves[id](), delete resolves[id];
                });
            }
            return function () {
              if (worker) return worker;
              if (!isWorker && canUseWorker) {
                var code = [
                  "var CONFETTI, SIZE = {}, module = {};",
                  "(" + main.toString() + ")(this, module, true, SIZE);",
                  "onmessage = function(msg) {",
                  "  if (msg.data.options) {",
                  "    CONFETTI(msg.data.options).then(function () {",
                  "      if (msg.data.callback) {",
                  "        postMessage({ callback: msg.data.callback });",
                  "      }",
                  "    });",
                  "  } else if (msg.data.reset) {",
                  "    CONFETTI && CONFETTI.reset();",
                  "  } else if (msg.data.resize) {",
                  "    SIZE.width = msg.data.resize.width;",
                  "    SIZE.height = msg.data.resize.height;",
                  "  } else if (msg.data.canvas) {",
                  "    SIZE.width = msg.data.canvas.width;",
                  "    SIZE.height = msg.data.canvas.height;",
                  "    CONFETTI = module.exports.create(msg.data.canvas);",
                  "  }",
                  "}",
                ].join("\n");
                try {
                  worker = new Worker(URL.createObjectURL(new Blob([code])));
                } catch (e) {
                  return (
                    "function" == typeof console.warn &&
                      console.warn("🎊 Could not load worker", e),
                    null
                  );
                }
                decorate(worker);
              }
              return worker;
            };
          })(),
          defaults = {
            particleCount: 50,
            angle: 90,
            spread: 45,
            startVelocity: 45,
            decay: 0.9,
            gravity: 1,
            drift: 0,
            ticks: 200,
            x: 0.5,
            y: 0.5,
            shapes: ["square", "circle"],
            zIndex: 100,
            colors: [
              "#26ccff",
              "#a25afd",
              "#ff5e7e",
              "#88ff5a",
              "#fcff42",
              "#ffa62d",
              "#ff36ff",
            ],
            disableForReducedMotion: !1,
            scalar: 1,
          };
        function convert(val, transform) {
          return transform ? transform(val) : val;
        }
        function isOk(val) {
          return null != val;
        }
        function prop(options, name, transform) {
          return convert(
            options && isOk(options[name]) ? options[name] : defaults[name],
            transform,
          );
        }
        function onlyPositiveInt(number) {
          return number < 0 ? 0 : Math.floor(number);
        }
        function randomInt(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        function toDecimal(str) {
          return parseInt(str, 16);
        }
        function colorsToRgb(colors) {
          return colors.map(hexToRgb);
        }
        function hexToRgb(str) {
          var val = String(str).replace(/[^0-9a-f]/gi, "");
          return (
            val.length < 6 &&
              (val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2]),
            {
              r: toDecimal(val.substring(0, 2)),
              g: toDecimal(val.substring(2, 4)),
              b: toDecimal(val.substring(4, 6)),
            }
          );
        }
        function getOrigin(options) {
          var origin = prop(options, "origin", Object);
          return (
            (origin.x = prop(origin, "x", Number)),
            (origin.y = prop(origin, "y", Number)),
            origin
          );
        }
        function setCanvasWindowSize(canvas) {
          (canvas.width = document.documentElement.clientWidth),
            (canvas.height = document.documentElement.clientHeight);
        }
        function setCanvasRectSize(canvas) {
          var rect = canvas.getBoundingClientRect();
          (canvas.width = rect.width), (canvas.height = rect.height);
        }
        function getCanvas(zIndex) {
          var canvas = document.createElement("canvas");
          return (
            (canvas.style.position = "fixed"),
            (canvas.style.top = "0px"),
            (canvas.style.left = "0px"),
            (canvas.style.pointerEvents = "none"),
            (canvas.style.zIndex = zIndex),
            canvas
          );
        }
        function ellipse(
          context,
          x,
          y,
          radiusX,
          radiusY,
          rotation,
          startAngle,
          endAngle,
          antiClockwise,
        ) {
          context.save(),
            context.translate(x, y),
            context.rotate(rotation),
            context.scale(radiusX, radiusY),
            context.arc(0, 0, 1, startAngle, endAngle, antiClockwise),
            context.restore();
        }
        function randomPhysics(opts) {
          var radAngle = opts.angle * (Math.PI / 180),
            radSpread = opts.spread * (Math.PI / 180);
          return {
            x: opts.x,
            y: opts.y,
            wobble: 10 * Math.random(),
            wobbleSpeed: Math.min(0.11, 0.1 * Math.random() + 0.05),
            velocity:
              0.5 * opts.startVelocity + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: (0.5 * Math.random() + 0.25) * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: 3 * opts.gravity,
            ovalScalar: 0.6,
            scalar: opts.scalar,
            flat: opts.flat,
          };
        }
        function updateFetti(context, fetti) {
          (fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift),
            (fetti.y +=
              Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity),
            (fetti.velocity *= fetti.decay),
            fetti.flat
              ? ((fetti.wobble = 0),
                (fetti.wobbleX = fetti.x + 10 * fetti.scalar),
                (fetti.wobbleY = fetti.y + 10 * fetti.scalar),
                (fetti.tiltSin = 0),
                (fetti.tiltCos = 0),
                (fetti.random = 1))
              : ((fetti.wobble += fetti.wobbleSpeed),
                (fetti.wobbleX =
                  fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble)),
                (fetti.wobbleY =
                  fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble)),
                (fetti.tiltAngle += 0.1),
                (fetti.tiltSin = Math.sin(fetti.tiltAngle)),
                (fetti.tiltCos = Math.cos(fetti.tiltAngle)),
                (fetti.random = Math.random() + 2));
          var progress = fetti.tick++ / fetti.totalTicks,
            x1 = fetti.x + fetti.random * fetti.tiltCos,
            y1 = fetti.y + fetti.random * fetti.tiltSin,
            x2 = fetti.wobbleX + fetti.random * fetti.tiltCos,
            y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
          if (
            ((context.fillStyle =
              "rgba(" +
              fetti.color.r +
              ", " +
              fetti.color.g +
              ", " +
              fetti.color.b +
              ", " +
              (1 - progress) +
              ")"),
            context.beginPath(),
            canUsePaths &&
              "path" === fetti.shape.type &&
              "string" == typeof fetti.shape.path &&
              Array.isArray(fetti.shape.matrix))
          )
            context.fill(
              transformPath2D(
                fetti.shape.path,
                fetti.shape.matrix,
                fetti.x,
                fetti.y,
                0.1 * Math.abs(x2 - x1),
                0.1 * Math.abs(y2 - y1),
                (Math.PI / 10) * fetti.wobble,
              ),
            );
          else if ("bitmap" === fetti.shape.type) {
            var rotation = (Math.PI / 10) * fetti.wobble,
              scaleX = 0.1 * Math.abs(x2 - x1),
              scaleY = 0.1 * Math.abs(y2 - y1),
              width = fetti.shape.bitmap.width * fetti.scalar,
              height = fetti.shape.bitmap.height * fetti.scalar,
              matrix = new DOMMatrix([
                Math.cos(rotation) * scaleX,
                Math.sin(rotation) * scaleX,
                -Math.sin(rotation) * scaleY,
                Math.cos(rotation) * scaleY,
                fetti.x,
                fetti.y,
              ]);
            matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
            var pattern = context.createPattern(
              bitmapMapper.transform(fetti.shape.bitmap),
              "no-repeat",
            );
            pattern.setTransform(matrix),
              (context.globalAlpha = 1 - progress),
              (context.fillStyle = pattern),
              context.fillRect(
                fetti.x - width / 2,
                fetti.y - height / 2,
                width,
                height,
              ),
              (context.globalAlpha = 1);
          } else if ("circle" === fetti.shape)
            context.ellipse
              ? context.ellipse(
                  fetti.x,
                  fetti.y,
                  Math.abs(x2 - x1) * fetti.ovalScalar,
                  Math.abs(y2 - y1) * fetti.ovalScalar,
                  (Math.PI / 10) * fetti.wobble,
                  0,
                  2 * Math.PI,
                )
              : ellipse(
                  context,
                  fetti.x,
                  fetti.y,
                  Math.abs(x2 - x1) * fetti.ovalScalar,
                  Math.abs(y2 - y1) * fetti.ovalScalar,
                  (Math.PI / 10) * fetti.wobble,
                  0,
                  2 * Math.PI,
                );
          else if ("star" === fetti.shape)
            for (
              var rot = (Math.PI / 2) * 3,
                innerRadius = 4 * fetti.scalar,
                outerRadius = 8 * fetti.scalar,
                x = fetti.x,
                y = fetti.y,
                spikes = 5,
                step = Math.PI / 5;
              spikes--;

            )
              (x = fetti.x + Math.cos(rot) * outerRadius),
                (y = fetti.y + Math.sin(rot) * outerRadius),
                context.lineTo(x, y),
                (rot += step),
                (x = fetti.x + Math.cos(rot) * innerRadius),
                (y = fetti.y + Math.sin(rot) * innerRadius),
                context.lineTo(x, y),
                (rot += step);
          else
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y)),
              context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1)),
              context.lineTo(Math.floor(x2), Math.floor(y2)),
              context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
          return (
            context.closePath(), context.fill(), fetti.tick < fetti.totalTicks
          );
        }
        function animate(canvas, fettis, resizer, size, done) {
          var animationFrame,
            destroy,
            animatingFettis = fettis.slice(),
            context = canvas.getContext("2d"),
            prom = promise(function (resolve) {
              function onDone() {
                (animationFrame = destroy = null),
                  context.clearRect(0, 0, size.width, size.height),
                  bitmapMapper.clear(),
                  done(),
                  resolve();
              }
              function update() {
                isWorker &&
                  !(
                    size.width === workerSize.width &&
                    size.height === workerSize.height
                  ) &&
                  ((size.width = canvas.width = workerSize.width),
                  (size.height = canvas.height = workerSize.height)),
                  size.width ||
                    size.height ||
                    (resizer(canvas),
                    (size.width = canvas.width),
                    (size.height = canvas.height)),
                  context.clearRect(0, 0, size.width, size.height),
                  (animatingFettis = animatingFettis.filter(function (fetti) {
                    return updateFetti(context, fetti);
                  })).length
                    ? (animationFrame = raf.frame(update))
                    : onDone();
              }
              (animationFrame = raf.frame(update)), (destroy = onDone);
            });
          return {
            addFettis: function (fettis) {
              return (animatingFettis = animatingFettis.concat(fettis)), prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function () {
              animationFrame && raf.cancel(animationFrame),
                destroy && destroy();
            },
          };
        }
        function confettiCannon(canvas, globalOpts) {
          var animationObj,
            isLibCanvas = !canvas,
            allowResize = !!prop(globalOpts || {}, "resize"),
            hasResizeEventRegistered = !1,
            globalDisableForReducedMotion = prop(
              globalOpts,
              "disableForReducedMotion",
              Boolean,
            ),
            worker =
              canUseWorker && prop(globalOpts || {}, "useWorker")
                ? getWorker()
                : null,
            resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize,
            initialized =
              !!canvas && !!worker && !!canvas.__confetti_initialized,
            preferLessMotion =
              "function" == typeof matchMedia &&
              matchMedia("(prefers-reduced-motion)").matches;
          function fireLocal(options, size, done) {
            for (
              var particleCount = prop(
                  options,
                  "particleCount",
                  onlyPositiveInt,
                ),
                angle = prop(options, "angle", Number),
                spread = prop(options, "spread", Number),
                startVelocity = prop(options, "startVelocity", Number),
                decay = prop(options, "decay", Number),
                gravity = prop(options, "gravity", Number),
                drift = prop(options, "drift", Number),
                colors = prop(options, "colors", colorsToRgb),
                ticks = prop(options, "ticks", Number),
                shapes = prop(options, "shapes"),
                scalar = prop(options, "scalar"),
                flat = !!prop(options, "flat"),
                origin = getOrigin(options),
                temp = particleCount,
                fettis = [],
                startX = canvas.width * origin.x,
                startY = canvas.height * origin.y;
              temp--;

            )
              fettis.push(
                randomPhysics({
                  x: startX,
                  y: startY,
                  angle: angle,
                  spread: spread,
                  startVelocity: startVelocity,
                  color: colors[temp % colors.length],
                  shape: shapes[randomInt(0, shapes.length)],
                  ticks: ticks,
                  decay: decay,
                  gravity: gravity,
                  drift: drift,
                  scalar: scalar,
                  flat: flat,
                }),
              );
            return animationObj
              ? animationObj.addFettis(fettis)
              : (animationObj = animate(canvas, fettis, resizer, size, done))
                  .promise;
          }
          function fire(options) {
            var disableForReducedMotion =
                globalDisableForReducedMotion ||
                prop(options, "disableForReducedMotion", Boolean),
              zIndex = prop(options, "zIndex", Number);
            if (disableForReducedMotion && preferLessMotion)
              return promise(function (resolve) {
                resolve();
              });
            isLibCanvas && animationObj
              ? (canvas = animationObj.canvas)
              : isLibCanvas &&
                !canvas &&
                ((canvas = getCanvas(zIndex)),
                document.body.appendChild(canvas)),
              allowResize && !initialized && resizer(canvas);
            var size = { width: canvas.width, height: canvas.height };
            function onResize() {
              if (worker) {
                var obj = {
                  getBoundingClientRect: function () {
                    if (!isLibCanvas) return canvas.getBoundingClientRect();
                  },
                };
                resizer(obj),
                  worker.postMessage({
                    resize: { width: obj.width, height: obj.height },
                  });
                return;
              }
              size.width = size.height = null;
            }
            function done() {
              (animationObj = null),
                allowResize &&
                  ((hasResizeEventRegistered = !1),
                  global.removeEventListener("resize", onResize)),
                isLibCanvas &&
                  canvas &&
                  (document.body.removeChild(canvas),
                  (canvas = null),
                  (initialized = !1));
            }
            return (worker && !initialized && worker.init(canvas),
            (initialized = !0),
            worker && (canvas.__confetti_initialized = !0),
            allowResize &&
              !hasResizeEventRegistered &&
              ((hasResizeEventRegistered = !0),
              global.addEventListener("resize", onResize, !1)),
            worker)
              ? worker.fire(options, size, done)
              : fireLocal(options, size, done);
          }
          return (
            (fire.reset = function () {
              worker && worker.reset(), animationObj && animationObj.reset();
            }),
            fire
          );
        }
        function getDefaultFire() {
          return (
            defaultFire ||
              (defaultFire = confettiCannon(null, {
                useWorker: !0,
                resize: !0,
              })),
            defaultFire
          );
        }
        function transformPath2D(
          pathString,
          pathMatrix,
          x,
          y,
          scaleX,
          scaleY,
          rotation,
        ) {
          var path2d = new Path2D(pathString),
            t1 = new Path2D();
          t1.addPath(path2d, new DOMMatrix(pathMatrix));
          var t2 = new Path2D();
          return (
            t2.addPath(
              t1,
              new DOMMatrix([
                Math.cos(rotation) * scaleX,
                Math.sin(rotation) * scaleX,
                -Math.sin(rotation) * scaleY,
                Math.cos(rotation) * scaleY,
                x,
                y,
              ]),
            ),
            t2
          );
        }
        function shapeFromPath(pathData) {
          if (!canUsePaths)
            throw Error("path confetti are not supported in this browser");
          "string" == typeof pathData
            ? (path = pathData)
            : ((path = pathData.path), (matrix = pathData.matrix));
          var path2d = new Path2D(path),
            tempCtx = document.createElement("canvas").getContext("2d");
          if (!matrix) {
            for (
              var path,
                matrix,
                width,
                height,
                minX = 1e3,
                minY = 1e3,
                maxX = 0,
                maxY = 0,
                x = 0;
              x < 1e3;
              x += 2
            )
              for (var y = 0; y < 1e3; y += 2)
                tempCtx.isPointInPath(path2d, x, y, "nonzero") &&
                  ((minX = Math.min(minX, x)),
                  (minY = Math.min(minY, y)),
                  (maxX = Math.max(maxX, x)),
                  (maxY = Math.max(maxY, y)));
            var scale = Math.min(
              10 / (width = maxX - minX),
              10 / (height = maxY - minY),
            );
            matrix = [
              scale,
              0,
              0,
              scale,
              -Math.round(width / 2 + minX) * scale,
              -Math.round(height / 2 + minY) * scale,
            ];
          }
          return { type: "path", path: path, matrix: matrix };
        }
        function shapeFromText(textData) {
          var text,
            scalar = 1,
            color = "#000000",
            fontFamily =
              '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
          "string" == typeof textData
            ? (text = textData)
            : ((text = textData.text),
              (scalar = "scalar" in textData ? textData.scalar : scalar),
              (fontFamily =
                "fontFamily" in textData ? textData.fontFamily : fontFamily),
              (color = "color" in textData ? textData.color : color));
          var fontSize = 10 * scalar,
            font = "" + fontSize + "px " + fontFamily,
            canvas = new OffscreenCanvas(fontSize, fontSize),
            ctx = canvas.getContext("2d");
          ctx.font = font;
          var size = ctx.measureText(text),
            width = Math.ceil(
              size.actualBoundingBoxRight + size.actualBoundingBoxLeft,
            ),
            height = Math.ceil(
              size.actualBoundingBoxAscent + size.actualBoundingBoxDescent,
            ),
            x = size.actualBoundingBoxLeft + 2,
            y = size.actualBoundingBoxAscent + 2;
          (width += 4),
            (height += 4),
            ((ctx = (canvas = new OffscreenCanvas(width, height)).getContext(
              "2d",
            )).font = font),
            (ctx.fillStyle = color),
            ctx.fillText(text, x, y);
          var scale = 1 / scalar;
          return {
            type: "bitmap",
            bitmap: canvas.transferToImageBitmap(),
            matrix: [
              scale,
              0,
              0,
              scale,
              (-width * scale) / 2,
              (-height * scale) / 2,
            ],
          };
        }
        (module.exports = function () {
          return getDefaultFire().apply(this, arguments);
        }),
          (module.exports.reset = function () {
            getDefaultFire().reset();
          }),
          (module.exports.create = confettiCannon),
          (module.exports.shapeFromPath = shapeFromPath),
          (module.exports.shapeFromText = shapeFromText);
      })(
        (function () {
          return "undefined" != typeof window
            ? window
            : "undefined" != typeof self
              ? self
              : this || {};
        })(),
        module,
        !1,
      );
      let __WEBPACK_DEFAULT_EXPORT__ = module.exports;
      module.exports.create;
    },
  },
]);
