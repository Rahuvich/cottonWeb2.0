import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Actividad({ data }) {
  const myData = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.code === 'actividad');
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
              <div class="lead" dangerouslySetInnerHTML={{ __html: myData.node.html }}>
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


export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          html
          frontmatter {
            title
            code
          }
          excerpt
        }
      }
    }
  }
`