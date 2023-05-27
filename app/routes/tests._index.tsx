import CardG from "~/components/card";
import AgregarBut from "~/components/agregar";
import { db } from "~/services/db";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export default function Result() {
  const lugares = useLoaderData();
  return (
    <>
      <div className="absolute top-[3%] right-[3%] ">
        <AgregarBut />
      </div>
      <CardG lugares={lugares} />
    </>
  );
}

export const loader = async () => {
  const lugares = await db.lugar.findMany({
    orderBy: {
      nombre: "asc",
    },
  });
  return lugares;
};

export const action = async ({ request }: any) => {
  const form = await request.formData();
  const name = form.get("name");
  const descripcion = form.get("descripcion");
  const costo = parseInt(form.get("costo"));
  const ubicacion = form.get("ubicacion");

  const lugar = await db.lugar.create({
    data: {
      nombre: name,
      descripcion: descripcion,
      precio: costo,
      ubicacion: ubicacion,
    },
  });
  return redirect(`/tests`);
};
