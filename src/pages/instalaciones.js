import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"

function Instalaciones() {
  return (
    <div>
      <Header active="instalaciones" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">Instalaciones</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              {/* <BackgroundSlider
                query={useStaticQuery(graphql`
                  query {
                    backgrounds: allFile(
                      filter: { sourceInstanceName: { eq: "backgrounds" } }
                    ) {
                      nodes {
                        relativePath
                        childImageSharp {
                          fluid(maxWidth: 4000, quality: 100) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                  }
                `)}
              /> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Instalaciones
