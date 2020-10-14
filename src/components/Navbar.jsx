import React from "react"
import Link from "gatsby-link"
import classNames from "classnames"

function Navbar(props) {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-md py-0">
      <div className="container justify-content-end justify-content-md-center">
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-nav collapse navbar-collapse w-100 row"
          id="navbarNavDropdown"
        >
          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "index",
            })}
            to="/"
          >
            Inicio
          </Link>

          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "presentacion",
            })}
            to="/presentacion"
          >
            Quiénes somos
          </Link>

          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "actividad",
            })}
            to="/actividad"
          >
            Actividad
          </Link>

          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "compromiso",
            })}
            to="/compromiso"
          >
            Compromiso
          </Link>

          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "contacto",
            })}
            to="/contacto"
          >
            Contacto
          </Link>
          <Link
            className={classNames(" nav-link navbar-text nav-item col", {
              active: props.active === "instalaciones",
            })}
            to="/instalaciones"
          >
            Instalaciones
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
{
  /*  */
}
