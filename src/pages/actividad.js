import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Actividad() {
  return (
    <div>
      <Header active="actividad" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">Actividad</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                Nuestra actividad de lavandería industrial se dirige,
                principalmente, a empresas de hostelería, restauración,
                residencias, salas de masaje, gimnasios y Spas, así como
                vestuario laboral del sector industrial.
                <br />
                Complementamos nuestro servicio de lavandería con el alquiler de
                piezas textiles: mantelerías, sábanas, toallas, etc.
                <br />
                Nuestra calidad del servicio va acorde con la rapidez, de forma
                que garantizamos la entrega en 24 horas, y en casos urgentes con
                varios servicios diarios, incluso en días festivos.
                <br />
                Nuestro personal conoce la ropa de nuestros clientes y sabe como
                debe ser tratada. Nos encargamos de la recogida, clasificación,
                lavado, secado, planchado, embolsado de la ropa ya limpia y,
                finalmente, realizamos la entrega en los plazos acordados con
                cada cliente.
                <br />
                Gracias a nuestras líneas de trabajo duplicadas, en caso de
                avería, queda garantizado el normal funcionamiento de la
                instalación.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Actividad
