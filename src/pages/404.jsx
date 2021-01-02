import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFoundPage() {
  return (
    <div>
      <Header active="actividad" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">No se ha encontrado!</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                Parece que has ido a una pàgina que ya no existe! Vuelve atrás.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
