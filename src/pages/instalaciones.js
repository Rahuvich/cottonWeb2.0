import React from "react"
import MainLayout from "../components/MainLayout"
import { graphql } from "gatsby"
import ImageSlider from "../components/ImageSlider"

function Instalaciones({ data }) {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "instalaciones"
  )
  return (
    <MainLayout title={myData.node.frontmatter.title} active="instalaciones">
      <ImageSlider />
    </MainLayout>
  )
}

export default Instalaciones

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
