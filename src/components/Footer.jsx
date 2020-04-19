import React from "react"
import Link from "gatsby-link"

function Footer({ data }) {
  console.log(data)
  return (
    <div className="footer bg-primary my-auto">
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <span className="text-white">
              <b>Sobre nosotros</b>
            </span>
            <br />
            <small className="text-white">Lavandería Cotton</small>
            <br />
            <small className="text-white">
              {data.site.siteMetadata.direccion}
            </small>
          </div>
          <div className="col-sm-6 col-md-4">
            <small className="text-white">
              Tel: {data.site.siteMetadata.telefono}
              <br /> Móvil: {data.site.siteMetadata.movil}
              <br /> Fax: {data.site.siteMetadata.fax}
              <br /> E-mail: {data.site.siteMetadata.correo}
            </small>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link className="text-white" to="./avisolegal">
              <small>
                <u>Aviso legal</u>
              </small>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

export const query = graphql`
  query contactInfoFooter {
    site {
      siteMetadata {
        direccion
        telefono
        fax
        correo
        movil
      }
    }
  }
`
