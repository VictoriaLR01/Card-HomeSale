import {
  Form,
  Link,
  useLoaderData
} from "/build/_shared/chunk-N345BNSU.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/tests._index.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/tests._index.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/components/card.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CardG({ lugares }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "antialiased  text-gray-900 font-sans p-6", children: lugares.map((lugar) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap -mx-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "c-card block bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 mb-2  font-bold", children: lugar.nombre }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 17,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm", children: lugar.descripcion }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 18,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold", children: "$" }, void 0, false, {
          fileName: "app/components/card.tsx",
          lineNumber: 20,
          columnNumber: 23
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-bold text-xl", children: lugar.precio }, void 0, false, {
          fileName: "app/components/card.tsx",
          lineNumber: 21,
          columnNumber: 23
        }, this),
        "\xA0",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-semibold", children: "dls" }, void 0, false, {
          fileName: "app/components/card.tsx",
          lineNumber: 23,
          columnNumber: 23
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/card.tsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/card.tsx",
      lineNumber: 16,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 border-t border-b text-xs text-gray-700", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center mb-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "far fa-clock fa-fw mr-2 text-gray-900" }, void 0, false, {
          fileName: "app/components/card.tsx",
          lineNumber: 28,
          columnNumber: 23
        }, this),
        lugar.ubicacion
      ] }, void 0, true, {
        fileName: "app/components/card.tsx",
        lineNumber: 27,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${lugar.id}/edit`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150", children: "Editar" }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 33,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 32,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `${lugar.id}/delete`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150", children: "Borrar" }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 39,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/card.tsx",
        lineNumber: 38,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/card.tsx",
      lineNumber: 26,
      columnNumber: 19
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/card.tsx",
    lineNumber: 15,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/components/card.tsx",
    lineNumber: 10,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/components/card.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, lugar.id, false, {
    fileName: "app/components/card.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/components/card.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/card.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var card_default = CardG;

// app/components/agregar.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Agregarbut() {
  const [showModal, setShowModal] = import_react3.default.useState(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        className: "bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        type: "button",
        onClick: () => setShowModal(true),
        children: "Agregar"
      },
      void 0,
      false,
      {
        fileName: "app/components/agregar.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      this
    ),
    showModal ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative w-auto my-6 mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-3xl font-semibold", children: "Nueva Residencia" }, void 0, false, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 23,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "button",
            {
              className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
              onClick: () => setShowModal(false),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none", children: "\xD7" }, void 0, false, {
                fileName: "app/components/agregar.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this)
            },
            void 0,
            false,
            {
              fileName: "app/components/agregar.tsx",
              lineNumber: 24,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 22,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "POST", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative p-6 flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "label",
              {
                className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                htmlFor: "name",
                children: "Nombre"
              },
              void 0,
              false,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 37,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "input",
              {
                className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                placeholder: "Nombre de la Vivienda",
                type: "text",
                id: "name",
                name: "name"
              },
              void 0,
              false,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 44,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "descripcion",
                  children: "Descripci\xF3n"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 52,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "No. cuartos, ba\xF1os, color de la vivienda",
                  type: "text",
                  id: "descripcion",
                  name: "descripcion"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 59,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 51,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "costo",
                  children: "Costo"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 68,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "Costo en dls",
                  type: "number",
                  id: "costo",
                  name: "costo"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 75,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "label",
                {
                  className: "block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",
                  htmlFor: "ubicacion",
                  children: "Ubicaci\xF3n"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 84,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "input",
                {
                  className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",
                  placeholder: "San Patricio 9987",
                  type: "text",
                  id: "ubicacion",
                  name: "ubicacion"
                },
                void 0,
                false,
                {
                  fileName: "app/components/agregar.tsx",
                  lineNumber: 91,
                  columnNumber: 25
                },
                this
              )
            ] }, void 0, true, {
              fileName: "app/components/agregar.tsx",
              lineNumber: 83,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 36,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 35,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "button",
              {
                className: "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                type: "button",
                onClick: () => setShowModal(false),
                children: "Cerrar"
              },
              void 0,
              false,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 103,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
              true,
              {
                fileName: "app/components/agregar.tsx",
                lineNumber: 110,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/agregar.tsx",
            lineNumber: 102,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/agregar.tsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" }, void 0, false, {
        fileName: "app/components/agregar.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/agregar.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/agregar.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var agregar_default = Agregarbut;

// app/routes/tests._index.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Result() {
  const lugares = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "absolute top-[3%] right-[3%] ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(agregar_default, {}, void 0, false, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(card_default, { lugares }, void 0, false, {
      fileName: "app/routes/tests._index.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tests._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
export {
  Result as default
};
//# sourceMappingURL=/build/routes/tests._index-4JV2GP2N.js.map
