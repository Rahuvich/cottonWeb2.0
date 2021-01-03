import React, { useState } from "react";
import Link from "gatsby-link";
import classNames from "classnames";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar(props) {
  const [isOpened, setOpeness] = useState(false);

  return (
    <div className="bg-primary-blue w-full flex flex-col md:flex-row justify-end md:justify-center text-white">
      <div
        className="flex md:hidden p-3 cursor-pointer"
        onClick={() => setOpeness(!isOpened)}
      >
        <AiOutlineMenu className="text-white text-2xl" />
      </div>

      {/* Navbar */}
      <div
        className={classNames(
          "md:flex flex-col md:flex-row max-w-screen-xl w-full items-stretch justify-evenly mx-0 md:mx-5",
          {
            hidden: !isOpened,
            flex: isOpened,
          }
        )}
      >
        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "index",
            }
          )}
          to="/"
        >
          Inicio
        </Link>

        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "presentacion",
            }
          )}
          to="/presentacion"
        >
          Quiénes somos
        </Link>

        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "actividad",
            }
          )}
          to="/actividad"
        >
          Actividad
        </Link>

        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "compromiso",
            }
          )}
          to="/compromiso"
        >
          Compromiso
        </Link>

        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "contacto",
            }
          )}
          to="/contacto"
        >
          Contacto
        </Link>

        <Link
          className={classNames(
            "flex flex-1 w-full justify-center p-4 hover:bg-secondary-blue text-center items-center",
            {
              "bg-secondary-blue": props.active === "instalaciones",
            }
          )}
          to="/instalaciones"
        >
          Instalaciones
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
{
  /*  */
}
