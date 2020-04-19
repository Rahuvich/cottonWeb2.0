import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function AvisoLegal() {
  return (
    <div>
      <Header active="avisolegal" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">Aviso legal</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                Este sitio web ha sido creado por la empresa Lavandería COTTON
                con carácter informativo y para uso personal de los usuarios. A
                través de este Aviso legal, se pretende regular el acceso y uso
                de este sitio web, así como la relación entre el sitio web y sus
                usuarios. Accediendo a este sitio web se aceptan los siguientes
                términos y condiciones: El acceso a este sitio web es
                responsabilidad exclusiva de los usuarios.
                <br />
                El simple acceso a este sitio web no supone entablar ningún tipo
                de relación comercial entre Lavandería COTTON y el usuario.
                <br />
                El acceso y la navegación en este sitio web supone aceptar y
                conocer las advertencias legales, condiciones y términos de uso
                contenidas en ella.
                <br />
                El titular del sitio web puede ofrecer servicios o productos que
                podrán encontrarse sometidos a unas condiciones particulares
                propias que, según los casos, sustituyan, completen y/o
                modifiquen las presentes condiciones, y sobre las cuales se
                informará al usuario en cada caso concreto.
                <br />
                Este sitio está protegido por derechos de autor y está publicado
                por Lavandería COTTON, quedando prohibida su reproducción por
                métodos que no sean la descarga o visionado en una CPU
                particular para uso privado y exclusivo de la empresa. No está
                permitida, por tanto, la reproducción, transmisión o publicación
                en red sin consentimiento escrito previo de Lavandería COTTON.
                <br />
                El nombre "Lavandería COTTON" y el logotipo son marcas
                comerciales registradas. Cualquier violación de los derechos de
                Lavandería COTTON tendrá como consecuencia el procedimiento
                legal pertinente.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AvisoLegal
