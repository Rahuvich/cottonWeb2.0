import React from "react"
import MainLayout from "../components/MainLayout"
import { graphql } from "gatsby"
import { MdLocationCity, MdPhone, MdEmail } from "react-icons/md"
import { FaFax } from "react-icons/fa"
import { BsPhone } from "react-icons/bs"
import CottonMap from "../components/Map"

function Contact({ data }) {
  console.log(data)
  const myData = data.allMarkdownRemark.nodes.find(
    node => node.frontmatter.code === "contacto"
  )

  return (
    <MainLayout title={myData.frontmatter.title} active="contacto">
      <div class="row">
        <div class="col-12 text-justify secondary">
          <div dangerouslySetInnerHTML={{ __html: myData.html }}></div>

          <div class="row align-items-center">
            <div class="col order-12 order-lg-1 py-2">
              <div class="lead text-left ">
                <MdLocationCity />
                &nbsp;&nbsp;
                {myData.frontmatter.direccion}
                <br />
                <br />
                <MdPhone /> &nbsp;&nbsp;
                {myData.frontmatter.telefono}
                <br />
                <BsPhone /> &nbsp;&nbsp;
                {myData.frontmatter.movil}
                <br />
                <FaFax /> &nbsp;&nbsp;
                {myData.frontmatter.fax}
                <br />
                <br />
                <MdEmail />
                &nbsp;&nbsp;
                {myData.frontmatter.correo}
              </div>
            </div>
            <div class="col-12 pt-3 pt-lg-0 col-lg-8 order-1 order-lg-12">
              <CottonMap />
            </div>
          </div>
          <br />
          <p>{myData.frontmatter.outro}</p>
        </div>
      </div>
    </MainLayout>
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
