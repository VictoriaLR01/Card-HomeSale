import React from "react";
import AgregarBut from "~/components/agregar";
function CardG() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <body className="antialiased  text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              className="c-card block bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h2 className="mt-2 mb-2  font-bold">
                  San Cristobal de las casas.
                </h2>
                <p className="text-sm">
                  Casa amarilla con 8 cuartos, 2 baños, una cocina de 420m, sala
                  con comedor.
                </p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">$</span>&nbsp;
                  <span className="font-bold text-xl">450</span>&nbsp;
                  <span className="text-sm font-semibold">dls</span>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center mb-1">
                  <i className="far fa-clock fa-fw mr-2 text-gray-900"></i>
                  José Weber 99, Barrio de Sta Cruz Almolonga, 29256 San
                  Cristóbal de las Casas, Chis.
                </span>
                <span className="flex items-center mb-1">
                  <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-4 ease-linear transition-all duration-150">
                    Borrar
                  </button>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
export default CardG;
