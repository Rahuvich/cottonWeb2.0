import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/scss/my-styles.scss"
import Plancha from "../assets/img/instalacion6.jpg"

export default () => (
  <div>
    <Header active="index" />
    <div role="main" class="container-fluid contenido">
      <div class="container py-5">
        <div class="row">
          <div class="col border-bottom border-primary primary">
            <h4 class="text-uppercase text-center">Inicio</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 mt-5">
            <img
              src={Plancha}
              class="border border-primary img-fluid rounded mx-auto d-block"
              alt="Plancha"
            />
          </div>
          <div class="col-sm-12 col-md-6 mt-5 text-justify secondary">
            <div class="lead">
              Lavandería Industrial especializada en empresas de Hosteleria,
              Restauración, Residencias, Salas de masaje, Gimnasios, Spas y
              vestuario industrial.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)
