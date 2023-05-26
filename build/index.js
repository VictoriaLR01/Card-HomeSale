var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-43W62DP4.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold underline", children: "Hello world!" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/routes/test.tsx
var test_exports = {};
__export(test_exports, {
  default: () => Result
});

// app/components/card.tsx
var import_react3 = __toESM(require("react")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function CardG() {
  let [showModal, setShowModal] = import_react3.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { className: "antialiased  text-gray-900 font-sans p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap -mx-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "a",
    {
      href: "",
      className: "c-card block bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "mt-2 mb-2  font-bold", children: "San Cristobal de las casas." }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 15,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm", children: "Casa amarilla con 8 cuartos, 2 ba\xF1os, una cocina de 420m, sala con comedor." }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 18,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-3 flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm font-semibold", children: "$" }, void 0, !1, {
              fileName: "app/components/card.tsx",
              lineNumber: 23,
              columnNumber: 19
            }, this),
            "\xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-bold text-xl", children: "450" }, void 0, !1, {
              fileName: "app/components/card.tsx",
              lineNumber: 24,
              columnNumber: 19
            }, this),
            "\xA0",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-sm font-semibold", children: "dls" }, void 0, !1, {
              fileName: "app/components/card.tsx",
              lineNumber: 25,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/card.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 14,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4 border-t border-b text-xs text-gray-700", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex items-center mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "far fa-clock fa-fw mr-2 text-gray-900" }, void 0, !1, {
              fileName: "app/components/card.tsx",
              lineNumber: 30,
              columnNumber: 19
            }, this),
            "Jos\xE9 Weber 99, Barrio de Sta Cruz Almolonga, 29256 San Crist\xF3bal de las Casas, Chis."
          ] }, void 0, !0, {
            fileName: "app/components/card.tsx",
            lineNumber: 29,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex items-center mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150", children: "Borrar" }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/card.tsx",
            lineNumber: 34,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/card.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/card.tsx",
      lineNumber: 10,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 9,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var card_default = CardG;

// app/components/agregar.tsx
var import_react4 = __toESM(require("react")), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Agregarbut() {
  let [showModal, setShowModal] = import_react4.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        type: "button",
        onClick: () => setShowModal(!0),
        children: "Agregar"
      },
      void 0,
      !1,
      {
        fileName: "app/components/agregar.tsx",
        lineNumber: 7,
        columnNumber: 7
      },
      this
    ),
    showModal ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-3xl font-semibold", children: "Nueva Residencia" }, void 0, !1, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 22,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "button",
            {
              className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
              onClick: () => setShowModal(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\xD7" }, void 0, !1, {
                fileName: "app/components/agregar.tsx",
                lineNumber: 27,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 23,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative p-6 flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "label",
            {
              className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
              htmlFor: "nombrecancion",
              children: "Nombre"
            },
            void 0,
            !1,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 35,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
              placeholder: "Nombre de la Vivienda",
              type: "text",
              id: "nombrecancion",
              name: "nombrecancion"
            },
            void 0,
            !1,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 42,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "label",
              {
                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                htmlFor: "nombrecancion",
                children: "Descripci\xF3n"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 50,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                placeholder: "No. cuartos, ba\xF1os, color de la vivienda",
                type: "text",
                id: "nombrecancion",
                name: "nombrecancion"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 57,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 49,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "label",
              {
                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                htmlFor: "nombrecancion",
                children: "Costo"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 66,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                placeholder: "Costo en dls",
                type: "text",
                id: "nombrecancion",
                name: "nombrecancion"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 73,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 65,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "label",
              {
                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                htmlFor: "nombrecancion",
                children: "Ubicaci\xF3n"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 82,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              "input",
              {
                className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                placeholder: "San Patricio 9987",
                type: "text",
                id: "nombrecancion",
                name: "nombrecancion"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 89,
                columnNumber: 23
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 81,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 34,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "button",
            {
              className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
              type: "button",
              onClick: () => setShowModal(!1),
              children: "Cerrar"
            },
            void 0,
            !1,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 101,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "button",
            {
              className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
              type: "button",
              onClick: () => setShowModal(!1),
              children: [
                "Agregar",
                " "
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 108,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/agregar.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/agregar.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var agregar_default = Agregarbut;

// app/routes/test.tsx
var import_react5 = __toESM(require("react")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Result() {
  let [showModal, setShowModal] = import_react5.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "absolute top-[3%] right-[3%] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(agregar_default, {}, void 0, !1, {
      fileName: "app/routes/test.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/test.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(card_default, {}, void 0, !1, {
      fileName: "app/routes/test.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/test.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WLH75OGU.js", imports: ["/build/_shared/chunk-QEVHFCZ7.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WHI3DXZ5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3SMB4ERY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/test": { id: "routes/test", parentId: "root", path: "test", index: void 0, caseSensitive: void 0, module: "/build/routes/test-MZJVWD3Y.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "814ca4e4", hmr: void 0, url: "/build/manifest-814CA4E4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
