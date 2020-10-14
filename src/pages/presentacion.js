import React from "react"
import Header from "../components/Header"
import MainLayout from "../components/MainLayout"
import { graphql } from "gatsby"

function Presentacion({ data }) {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "presentacion"
  )

  return (
    <MainLayout title={myData.node.frontmatter.title} active="presentacion">
      <div dangerouslySetInnerHTML={{ __html: myData.node.html }}></div>
    </MainLayout>
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
