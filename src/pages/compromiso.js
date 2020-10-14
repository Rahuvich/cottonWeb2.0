import React from "react"
import MainLayout from "../components/MainLayout"
import { graphql } from "gatsby"

function Compromiso({ data }) {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "compromiso"
  )
  return (
    <MainLayout title={myData.node.frontmatter.title} active="compromiso">
      <div dangerouslySetInnerHTML={{ __html: myData.node.html }}></div>
    </MainLayout>
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
