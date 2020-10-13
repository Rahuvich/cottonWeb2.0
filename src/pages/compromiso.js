import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

function Compromiso({ data }) {
  const myData = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.code === 'compromiso');
  return (
    <div>
      <Header active="compromiso" />
      <main role="main" class="container-fluid contenido">
        <div class="container py-5">
          <div class="row">
            <div class="col border-bottom border-primary primary">
              <h4 class="text-uppercase text-center">{myData.node.frontmatter.title}</h4>
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

export default Compromiso


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