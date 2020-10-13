import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

function Contact({ data }) {
  console.log(data);
  const myData = data.allMarkdownRemark.nodes.find(node => node.frontmatter.code === 'contacto');

  return (
    <div>
      <Header active="contacto" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">{myData.frontmatter.title}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-12 mt-5 text-justify secondary">
              <div class="lead">
                <div dangerouslySetInnerHTML={{ __html: myData.html }}></div>

                <div class="lead text-center">
                  <i class="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
                  {myData.frontmatter.direccion}
                  <br />
                  <i class="fas fa-phone"></i> &nbsp;&nbsp;
                  {myData.frontmatter.telefono}
                  <br />
                  <i class="fas fa-mobile-alt"></i> &nbsp;&nbsp;
                  {myData.frontmatter.movil}
                  <br />
                  <i class="fas fa-fax"></i> &nbsp;&nbsp;
                  {myData.frontmatter.fax}
                  <br />
                  <i class="fas fa-envelope"></i> &nbsp;&nbsp;
                  {myData.frontmatter.correo}
                  <br />
                  <br />
                </div>
                <br />
                {myData.frontmatter.outro}
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
query {
  allMarkdownRemark {
    nodes {
      html
      excerpt
      frontmatter {
        title
        code
        correo
        direccion
        fax
        movil
        outro
        telefono
      }
    }
  }
}

`