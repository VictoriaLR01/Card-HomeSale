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
var tailwind_default = "/build/_assets/tailwind-ZU3SKHOU.css";

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

// app/routes/tests.$testId._index.tsx
var tests_testId_index_exports = {};
__export(tests_testId_index_exports, {
  default: () => lugarid,
  loader: () => loader
});
var import_react3 = require("@remix-run/react");

// app/services/db.ts
var import_client = require("@prisma/client"), db = new import_client.PrismaClient();

// app/routes/tests.$testId._index.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function lugarid() {
  let lugar = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: lugar.nombre }, void 0, !1, {
    fileName: "app/routes/tests.$testId._index.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tests.$testId._index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var loader = async ({ params }) => await db.lugar.findUnique({
  where: {
    id: params.testId
  }
});

// app/routes/tests.$testId.delete.tsx
var tests_testId_delete_exports = {};
__export(tests_testId_delete_exports, {
  action: () => action,
  default: () => LugarDelete,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function LugarDelete() {
  let lugar = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "absolute left-10 top-1 ", children: [
      "Vas a borrar ",
      lugar.nombre,
      " ?"
    ] }, void 0, !0, {
      fileName: "app/routes/tests.$testId.delete.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "button",
      {
        type: "submit",
        className: " absolute left-10 top-10 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        children: "Borrar"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tests.$testId.delete.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.delete.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests.$testId.delete.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var action = async ({ params }) => (await db.lugar.delete({ where: { id: params.testId } }), (0, import_node2.redirect)("/tests")), loader2 = async ({ params }) => await db.lugar.findUnique({
  where: {
    id: params.testId
  }
});

// app/routes/tests.$testId.edit.tsx
var tests_testId_edit_exports = {};
__export(tests_testId_edit_exports, {
  action: () => action2,
  default: () => LugarDelete2,
  loader: () => loader3
});
var import_react5 = require("@remix-run/react");
var import_react6 = require("@remix-run/react"), import_node3 = require("@remix-run/node"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function LugarDelete2() {
  let lugar = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Form, { method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative p-6 flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
          htmlFor: "name",
          children: "Nombre"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tests.$testId.edit.tsx",
          lineNumber: 17,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
          placeholder: "Nombre de la Vivienda",
          type: "text",
          id: "name",
          name: "name"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tests.$testId.edit.tsx",
          lineNumber: 24,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            htmlFor: "descripcion",
            children: "Descripci\xF3n"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 32,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
            placeholder: "No. cuartos, ba\xF1os, color de la vivienda",
            type: "text",
            id: "descripcion",
            name: "descripcion"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 39,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.edit.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            htmlFor: "costo",
            children: "Costo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 48,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
            placeholder: "Costo en dls",
            type: "number",
            id: "costo",
            name: "costo"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 55,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.edit.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "label",
          {
            className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
            htmlFor: "ubicacion",
            children: "Ubicaci\xF3n"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 64,
            columnNumber: 19
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "input",
          {
            className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
            placeholder: "San Patricio 9987",
            type: "text",
            id: "ubicacion",
            name: "ubicacion"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/tests.$testId.edit.tsx",
            lineNumber: 71,
            columnNumber: 19
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/tests.$testId.edit.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tests.$testId.edit.tsx",
      lineNumber: 16,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.edit.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "button",
      {
        className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        type: "submit",
        children: [
          "Agregar",
          " "
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/tests.$testId.edit.tsx",
        lineNumber: 83,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tests.$testId.edit.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests.$testId.edit.tsx",
    lineNumber: 14,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/tests.$testId.edit.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tests.$testId.edit.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tests.$testId.edit.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var action2 = async ({ params, request }) => {
  let form = await request.formData(), name = form.get("name"), descripcion = form.get("descripcion"), costo = parseInt(form.get("costo")), ubicacion = form.get("ubicacion"), lugar = await db.lugar.update({
    where: {
      id: params.testId
    },
    data: {
      nombre: name,
      descripcion,
      precio: costo,
      ubicacion
    }
  });
  return (0, import_node3.redirect)("/tests");
}, loader3 = async ({ params }) => await db.lugar.findUnique({
  where: {
    id: params.testId
  }
});

// app/routes/tests._index.tsx
var tests_index_exports = {};
__export(tests_index_exports, {
  action: () => action3,
  default: () => Result,
  loader: () => loader4
});

// app/components/card.tsx
var import_react7 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function CardG({ lugares }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "antialiased  text-gray-900 font-sans p-6", children: lugares.map((lugar) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap -mx-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "c-card block bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "mt-2 mb-2  font-bold", children: lugar.nombre }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm", children: lugar.descripcion }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-3 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm font-semibold", children: "$" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 20,
          columnNumber: 23
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold text-xl", children: lugar.precio }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 21,
          columnNumber: 23
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-sm font-semibold", children: "dls" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 23,
          columnNumber: 23
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 16,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-4 border-t border-b text-xs text-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "far fa-clock fa-fw mr-2 text-gray-900" }, void 0, !1, {
          fileName: "app/components/card.tsx",
          lineNumber: 28,
          columnNumber: 23
        }, this),
        lugar.ubicacion
      ] }, void 0, !0, {
        fileName: "app/components/card.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `${lugar.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150", children: "Editar" }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 32,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "flex items-center mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react7.Link, { to: `${lugar.id}/delete`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150", children: "Borrar" }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 39,
        columnNumber: 23
      }, this) }, void 0, !1, {
        fileName: "app/components/card.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 10,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, lugar.id, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/card.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var card_default = CardG;

// app/components/agregar.tsx
var import_react8 = require("@remix-run/react"), import_react9 = __toESM(require("react")), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Agregarbut() {
  let [showModal, setShowModal] = import_react9.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    showModal ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "text-3xl font-semibold", children: "Nueva Residencia" }, void 0, !1, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 23,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            "button",
            {
              className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
              onClick: () => setShowModal(!1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\xD7" }, void 0, !1, {
                fileName: "app/components/agregar.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 24,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react8.Form, { method: "POST", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative p-6 flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "label",
              {
                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                htmlFor: "name",
                children: "Nombre"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 37,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                placeholder: "Nombre de la Vivienda",
                type: "text",
                id: "name",
                name: "name"
              },
              void 0,
              !1,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 44,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "descripcion",
                  children: "Descripci\xF3n"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 52,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "No. cuartos, ba\xF1os, color de la vivienda",
                  type: "text",
                  id: "descripcion",
                  name: "descripcion"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 59,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 51,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "costo",
                  children: "Costo"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 68,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "Costo en dls",
                  type: "number",
                  id: "costo",
                  name: "costo"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 75,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "ubicacion",
                  children: "Ubicaci\xF3n"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 84,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "San Patricio 9987",
                  type: "text",
                  id: "ubicacion",
                  name: "ubicacion"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 91,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 36,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
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
                lineNumber: 103,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "button",
              {
                className: "bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "submit",
                children: [
                  "Agregar",
                  " "
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 110,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }, void 0, !1, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/agregar.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/agregar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var agregar_default = Agregarbut;

// app/routes/tests._index.tsx
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Result() {
  let lugares = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "absolute top-[3%] right-[3%] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(agregar_default, {}, void 0, !1, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(card_default, { lugares }, void 0, !1, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tests._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var loader4 = async () => await db.lugar.findMany({
  orderBy: {
    nombre: "asc"
  }
}), action3 = async ({ request }) => {
  let form = await request.formData(), name = form.get("name"), descripcion = form.get("descripcion"), costo = parseInt(form.get("costo")), ubicacion = form.get("ubicacion"), lugar = await db.lugar.create({
    data: {
      nombre: name,
      descripcion,
      precio: costo,
      ubicacion
    }
  });
  return (0, import_node4.redirect)("/tests");
};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), meta = () => [{ title: "New Remix App" }];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-3xl font-bold underline", children: "Hello world!" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

// app/routes/tests.tsx
var tests_exports = {};
__export(tests_exports, {
  default: () => Result2
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Result2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "app/routes/tests.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tests.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WDOTNDEW.js", imports: ["/build/_shared/chunk-N345BNSU.js", "/build/_shared/chunk-NLQNPAAV.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-O654OJ57.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-3SMB4ERY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tests": { id: "routes/tests", parentId: "root", path: "tests", index: void 0, caseSensitive: void 0, module: "/build/routes/tests-HYZIRMMH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tests.$testId._index": { id: "routes/tests.$testId._index", parentId: "routes/tests", path: ":testId", index: !0, caseSensitive: void 0, module: "/build/routes/tests.$testId._index-FJGOEHCT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tests.$testId.delete": { id: "routes/tests.$testId.delete", parentId: "routes/tests", path: ":testId/delete", index: void 0, caseSensitive: void 0, module: "/build/routes/tests.$testId.delete-G3RZWTBS.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tests.$testId.edit": { id: "routes/tests.$testId.edit", parentId: "routes/tests", path: ":testId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/tests.$testId.edit-NSCEXY4T.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tests._index": { id: "routes/tests._index", parentId: "routes/tests", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/tests._index-4JV2GP2N.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "8b68902b", hmr: void 0, url: "/build/manifest-8B68902B.js" };

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
  "routes/tests.$testId._index": {
    id: "routes/tests.$testId._index",
    parentId: "routes/tests",
    path: ":testId",
    index: !0,
    caseSensitive: void 0,
    module: tests_testId_index_exports
  },
  "routes/tests.$testId.delete": {
    id: "routes/tests.$testId.delete",
    parentId: "routes/tests",
    path: ":testId/delete",
    index: void 0,
    caseSensitive: void 0,
    module: tests_testId_delete_exports
  },
  "routes/tests.$testId.edit": {
    id: "routes/tests.$testId.edit",
    parentId: "routes/tests",
    path: ":testId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: tests_testId_edit_exports
  },
  "routes/tests._index": {
    id: "routes/tests._index",
    parentId: "routes/tests",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: tests_index_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/tests": {
    id: "routes/tests",
    parentId: "root",
    path: "tests",
    index: void 0,
    caseSensitive: void 0,
    module: tests_exports
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
