import React from "react";
import MainLayout from "../components/MainLayout";
import { graphql } from "gatsby";
import { MdLocationCity, MdPhone, MdEmail } from "react-icons/md";
import { FaFax } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import CottonMap from "../components/Map";
import ContactForm from "../components/forms/ContactForm";

function Contact({ data }) {
  const myData = data.allMarkdownRemark.nodes.find(
    (node) => node.frontmatter.code === "contacto"
  );

  return (
    <MainLayout title={myData.frontmatter.title} active="contacto">
      <div dangerouslySetInnerHTML={{ __html: myData.html }}></div>

      <div class="flex flex-col md:flex-row items-center">
        <div class="order-12 md:order-1 pt-10 md:py-2">
          <MdLocationCity className="inline-block" />
          &nbsp;&nbsp;
          {myData.frontmatter.direccion}
          <br />
          <br />
          <MdPhone className="inline-block" />
          &nbsp;&nbsp;
          {myData.frontmatter.telefono}
          <br />
          <BsPhone className="inline-block" />
          &nbsp;&nbsp;
          {myData.frontmatter.movil}
          <br />
          <FaFax className="inline-block" />
          &nbsp;&nbsp;
          {myData.frontmatter.fax}
          <br />
          <br />
          <MdEmail className="inline-block" />
          &nbsp;&nbsp;
          {myData.frontmatter.correo}
        </div>
        <div class="order-2 w-full ml-5">
          <CottonMap />
        </div>
      </div>
      <br />
      <p>{myData.frontmatter.outro}</p>
      <div className="mt-16">
        <ContactForm />
      </div>
    </MainLayout>
  );
}

export default Contact;

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
`;
