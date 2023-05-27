import { redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";

export default function LugarDelete() {
  const lugar = useLoaderData();
  return (
    <div>
      <p className="absolute left-10 top-1 ">Vas a borrar {lugar.nombre} ?</p>
      <Form method="POST">
        <button
          type="submit"
          className=" absolute left-10 top-10 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        >
          Borrar
        </button>
      </Form>
    </div>
  );
}

export const action = async ({ params }: any) => {
  await db.lugar.delete({ where: { id: params.testId } });
  return redirect("/tests");
};

export const loader = async ({ params }: any) => {
  const lugar = await db.lugar.findUnique({
    where: {
      id: params.testId,
    },
  });
  return lugar;
};
