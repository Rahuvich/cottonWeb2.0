import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CottonHelmet from "../components/Helmet"

function MainLayout({ title, children, active }) {
  return (
    <div>
      <CottonHelmet />
      <Header active={active} />
      <main role="main" class="container-fluid contenido">
        <div class="container mt-lg-4 pt-4 py-lg-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">{title}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">{children}</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
