import React from "react"
import MainLayout from "../components/MainLayout"
import "../assets/scss/my-styles.scss"
import Plancha from "../assets/bg_instalaciones/instalacion6.jpg"
import { graphql } from "gatsby"

export default ({ data }) => {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "inicio"
  )
  return (
    <MainLayout title={myData.node.frontmatter.title} active="index">
      <div class="row">
        <div class="col-sm-12 mt-5 order-12 order-lg-1 col-md-6">
          <img
            src={Plancha}
            class="border border-primary img-fluid rounded mx-auto d-block"
            alt="Plancha"
          />
        </div>
        <div class="col-sm-12 col-md-6 order-1 order-lg-12 text-justify secondary">
          <div dangerouslySetInnerHTML={{ __html: myData.node.html }}></div>
        </div>
      </div>
    </MainLayout>
  )
}

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
