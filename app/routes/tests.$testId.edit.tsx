import { useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";
import { Form } from "@remix-run/react";
import { redirect } from "@remix-run/node";

export default function LugarDelete() {
  const lugar = useLoaderData();
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*body*/}
          <Form method="POST">
            <div className="relative p-6 flex-auto">
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>

                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Nombre de la Vivienda"
                  type="text"
                  id="name"
                  name="name"
                />
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="descripcion"
                  >
                    Descripción
                  </label>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="No. cuartos, baños, color de la vivienda"
                    type="text"
                    id="descripcion"
                    name="descripcion"
                  />
                </div>
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="costo"
                  >
                    Costo
                  </label>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="Costo en dls"
                    type="number"
                    id="costo"
                    name="costo"
                  />
                </div>
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="ubicacion"
                  >
                    Ubicación
                  </label>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    placeholder="San Patricio 9987"
                    type="text"
                    id="ubicacion"
                    name="ubicacion"
                  />
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Agregar{" "}
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export const action = async ({ params, request }: any) => {
  const form = await request.formData();
  const name = form.get("name");
  const descripcion = form.get("descripcion");
  const costo = parseInt(form.get("costo"));
  const ubicacion = form.get("ubicacion");

  const lugar = await db.lugar.update({
    where: {
      id: params.testId,
    },
    data: {
      nombre: name,
      descripcion: descripcion,
      precio: costo,
      ubicacion: ubicacion,
    },
  });
  return redirect(`/tests`);
};

export const loader = async ({ params }: any) => {
  const lugar = await db.lugar.findUnique({
    where: {
      id: params.testId,
    },
  });
  return lugar;
};
