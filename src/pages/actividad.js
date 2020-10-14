import React from "react"
import MainLayout from "../components/MainLayout"
import { graphql } from "gatsby"

function Actividad({ data }) {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "actividad"
  )
  return (
    <MainLayout title={myData.node.frontmatter.title} active="actividad">
      <div dangerouslySetInnerHTML={{ __html: myData.node.html }}></div>
    </MainLayout>
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
