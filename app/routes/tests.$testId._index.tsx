import { useLoaderData } from "@remix-run/react";
import { db } from "~/services/db";

export default function lugarid() {
  const lugar = useLoaderData();
  return (
    <>
      <p>{lugar.nombre}</p>
    </>
  );
}

export const loader = async ({ params }: any) => {
  const lugar = await db.lugar.findUnique({
    where: {
      id: params.testId,
    },
  });
  return lugar;
};
