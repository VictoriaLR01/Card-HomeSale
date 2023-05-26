import CardG from "~/components/card";
import AgregarBut from "~/components/agregar";
import React from "react";

export default function Result() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="absolute top-[3%] right-[3%] ">
        <AgregarBut />
      </div>

      <CardG />
    </>
  );
}
