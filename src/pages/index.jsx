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
      <div className="flex flex-row items-stretch">
        <img
          src={Image}
          className="border border-primary-blue rounded w-1/2"
          alt="Imagen"
        />
        <div className="flex flex-col flex-grow px-5 items-end">
          <div
            className="h-full"
            dangerouslySetInnerHTML={{ __html: myData.node.html }}
          />
          <div>
            <button
              className="focus:outline-none flex flex-row justify-center items-center uppercase flex-grow-0 px-4 py-2 rounded shadow border border-primary-blue text-primary-blue hover:text-white bg-white hover:bg-primary-blue"
              onClick={() => navigate("/contacto")}
            >
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
