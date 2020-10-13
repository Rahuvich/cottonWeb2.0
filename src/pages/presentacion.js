import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

function Presentacion({ data }) {

  const myData = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.code === 'presentacion');


  return (
    <div>
      <Header active="presentacion" />
      <div role="main" className="container-fluid contenido">
        <div className="container py-5">
          <div className="row">
            <div className="col border-bottom border-primary primary">
              <h4 className="text-uppercase text-center">{myData.node.frontmatter.title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-5 text-justify secondary">
              <div className="lead" dangerouslySetInnerHTML={{ __html: myData.node.html }}>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Presentacion

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