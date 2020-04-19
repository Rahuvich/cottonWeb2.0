import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Presentacion() {
  return (
    <div>
      <Header active="presentacion" />
      <div role="main" className="container-fluid contenido">
        <div className="container py-5">
          <div className="row">
            <div className="col border-bottom border-primary primary">
              <h4 className="text-uppercase text-center">Quiénes somos</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5 text-justify secondary">
              <div className="lead">
                Lavandería COTTON (sucesora de Lavandería Godoy desde 2006) es
                una empresa de servicios de lavado y planchado industrial en las
                comarcas del Barcelonés y Maresme (Barcelona).
                <br />
                <br />
                El equipo directivo de Lavandería COTTON presenta una amplia
                experiencia en el manejo de equipos, control de procesos
                industriales y optimización energética de instalaciones. La
                aplicación de estos conocimientos conjuntamente con la
                experiencia del personal del taller han dado como resultado una
                mejora de la productividad, un ahorro de agua y energía y unos
                acabados de calidad que revierten en una mayor duración de la
                ropa.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Presentacion
