import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-N345BNSU.js";
import {
  __toESM,
  init_buffer,
  init_dirname,
  init_filename,
  init_global,
  init_process,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NLQNPAAV.js";

// browser-route-module:routes/tests.$testId.delete.tsx?browser
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();

// app/routes/tests.$testId.delete.tsx
init_global();
init_dirname();
init_filename();
init_buffer();
init_process();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LugarDelete() {
  const lugar = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "absolute left-10 top-1 ", children: [
      "Vas a borrar ",
      lugar.nombre,
      " ?"
    ] }, void 0, true, {
      fileName: "app/routes/tests.$testId.delete.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "button",
      {
        type: "submit",
        className: " absolute left-10 top-10 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
        children: "Borrar"
      },
      void 0,
      false,
      {
        fileName: "app/routes/tests.$testId.delete.tsx",
        lineNumber: 11,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/tests.$testId.delete.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tests.$testId.delete.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
export {
  LugarDelete as default
};
//# sourceMappingURL=/build/routes/tests.$testId.delete-G3RZWTBS.js.map
