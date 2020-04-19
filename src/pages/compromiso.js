import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Compromiso() {
  return (
    <div>
      <Header active="compromiso" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">Compromiso</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                En Lavandería COTTON nos dedicamos a prestar un servicio de gran
                calidad, nuestra empresa cuenta con un personal altamente
                cualificado que les prestará el servicio que usted necesita, con
                toda seguridad.
                <br />
                El principal objetivo de Lavandería COTTON es prestar siempre un
                servicio de calidad a sus clientes y con un exquisito trato
                personal.
                <br />
                Nuestros servicios se caracterizan por la eficacia en los
                procesos, la calidad de los acabados y la rapidez en las
                entregas.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Compromiso
