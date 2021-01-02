import React from "react";
import Link from "gatsby-link";
import classNames from "classnames";

function Navbar(props) {
  return (
    <div className="bg-primary-blue w-full flex flex-row justify-center text-white">
      <div className="flex flex-row max-w-screen-xl w-full items-stretch justify-evenly ">
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
