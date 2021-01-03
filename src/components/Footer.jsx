import React from "react";
import Link from "gatsby-link";
import { useStaticQuery, graphql } from "gatsby";

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
  );

  const myData = data.allMarkdownRemark.nodes.find(
    (node) => node.frontmatter.code === "contacto"
  );

  return (
    <div className="w-full flex flex-row justify-center bg-primary-blue text-white py-3">
      <div className="max-w-screen-xl w-full flex flex-row">
        <div className="flex flex-col flex-grow justify-start px-4">
          <b>Sobre nosotros</b>
          <small>
            Lavandería Cotton
            <br />
            {myData.frontmatter.direccion}
          </small>
        </div>
        <div className="flex flex-col flex-grow justify-start px-4">
          <b>Contacto</b>
          <small>
            Tel: {myData.frontmatter.telefono}
            <br /> Móvil: {myData.frontmatter.movil}
            <br /> Fax: {myData.frontmatter.fax}
            <br /> E-mail: {myData.frontmatter.correo}
            <br />
            <Link className="text-white" to="/contacto">
              <u>Formulario de contacto</u>
            </Link>
          </small>
        </div>
        <div className="flex flex-col flex-grow justify-start px-4">
          <b>Más</b>
          <small>
            <Link className="text-white" to="/avisolegal">
              <u>Aviso legal</u>
            </Link>
            <div>Lavanderia COTTON (SERLAPLAN SL)</div>
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
