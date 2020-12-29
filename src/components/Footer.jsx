import React from "react"
import Link from "gatsby-link"
import { useStaticQuery, graphql } from "gatsby"

function Footer() {
  const data = useStaticQuery(
    graphql`
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
  )

  const myData = data.allMarkdownRemark.nodes.find(
    node => node.frontmatter.code === "contacto"
  )

  return (
    <div className="footer bg-primary my-auto mx-auto text-white">
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <span >
              <b>Sobre nosotros</b>
            </span>
            <br />
            <small >Lavandería Cotton</small>
            <br />
            <small >{myData.frontmatter.direccion}</small>
          </div>
          <div className="col-sm-6 col-md-4">
            <small >
              Tel: {myData.frontmatter.telefono}
              <br /> Móvil: {myData.frontmatter.movil}
              <br /> Fax: {myData.frontmatter.fax}
              <br /> E-mail: {myData.frontmatter.correo}
            </small>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link className="text-white" to="/avisolegal">
              <small>
                <u>Aviso legal</u>
              </small>
            </Link>
            <div>
              Lavanderia COTTON (SERLAPLAN SL)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
