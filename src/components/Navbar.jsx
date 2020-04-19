import React from "react"
import Link from "gatsby-link"
import classNames from "classnames"

function Navbar(props) {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-md py-0">
      <div className="container justify-content-center">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="navbar-nav collapse navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <Link
            className={classNames("nav-item nav-link navbar-text", {
              active: props.active === "index",
            })}
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={classNames("nav-item nav-link navbar-text", {
              active: props.active === "presentacion",
            })}
            to="/presentacion"
          >
            Quiénes somos
          </Link>
          <Link
            className={classNames("nav-item nav-link navbar-text", {
              active: props.active === "actividad",
            })}
            to="/actividad"
          >
            Actividad
          </Link>
          <Link
            className={classNames("nav-item nav-link navbar-text", {
              active: props.active === "compromiso",
            })}
            to="/compromiso"
          >
            Compromiso
          </Link>
          <Link
            className={classNames("nav-item nav-link navbar-text", {
              active: props.active === "contacto",
            })}
            to="/contacto"
          >
            Contacto
          </Link>
          <Link
            className={classNames("nav-item nav-link navbar-text", {
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
