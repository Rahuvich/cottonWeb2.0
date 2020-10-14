import React from "react"
import { graphql } from "gatsby"
import MainLayout from "../components/MainLayout"

function AvisoLegal({ data }) {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "avisolegal"
  )

  return (
    <MainLayout title={myData.node.frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: myData.node.html }}></div>
    </MainLayout>
  )
}

export default AvisoLegal

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
