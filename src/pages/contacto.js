import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

function Contact({ data }) {
  return (
    <div>
      <Header active="contacto" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">Contacto</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                Envíenos las características de su negocio, así como la
                previsión de producción (tipo y cantidad de ropa) y nos
                pondremos en contacto con Vd. para entregarle un presupuesto
                personalizado del servicio que necesita.
                <br />
                Consulte cualquier duda que tenga, nuestro personal le atenderá
                con la máxima cordialidad.
                <br />
                <br />
                <div class="lead text-center">
                  <i class="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
                  {data.site.siteMetadata.direccion}
                  <br />
                  <i class="fas fa-phone"></i> &nbsp;&nbsp;
                  {data.site.siteMetadata.telefono}
                  <br />
                  <i class="fas fa-mobile-alt"></i> &nbsp;&nbsp;
                  {data.site.siteMetadata.movil}
                  <br />
                  <i class="fas fa-fax"></i> &nbsp;&nbsp;
                  {data.site.siteMetadata.fax}
                  <br />
                  <i class="fas fa-envelope"></i> &nbsp;&nbsp;
                  {data.site.siteMetadata.correo}
                  <br />
                  <br />
                </div>
                <br />
                ¡Muchas gracias por haber visitado nuestra página! Si desea
                realizar alguna consulta sobre nuestros productos o nuestra
                empresa, póngase en contacto con nosotros a través del e-mail,
                el teléfono o por correo.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact

export const query = graphql`
  query contactInfo {
    site {
      siteMetadata {
        direccion
        telefono
        fax
        correo
        movil
      }
    }
  }
`
