import React from "react";
import MainLayout from "../components/MainLayout";
import "../assets/styles/app.css";
import Image from "../assets/bg_instalaciones/instalaciones-11.jpg";
import { graphql } from "gatsby";
import { navigate } from "gatsby"; //import navigate from gatsby
import { IoIosArrowForward } from "react-icons/io";

export default ({ data }) => {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "inicio"
  );
  return (
    <MainLayout title={myData.node.frontmatter.title} active="index">
      <div className="flex flex-col md:flex-row items-stretch">
        <img
          src={Image}
          className="border border-primary-blue rounded md:w-1/2"
          alt="Imagen"
        />
        <div className="flex flex-col flex-grow py-5 md:py-0 md:px-5 items-end">
          <div
            className="h-full"
            dangerouslySetInnerHTML={{ __html: myData.node.html }}
          />
          <div>
            <button onClick={() => navigate("/contacto")}>
              Contáctanos <IoIosArrowForward className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

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
`;
