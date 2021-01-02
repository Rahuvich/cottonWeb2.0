import React from "react";
import MainLayout from "../components/MainLayout";
import "../assets/styles/app.css";
import Image from "../assets/bg_instalaciones/instalaciones-11.jpg";
import { graphql } from "gatsby";

export default ({ data }) => {
  const myData = data.allMarkdownRemark.edges.find(
    ({ node }) => node.frontmatter.code === "inicio"
  );
  return (
    <MainLayout title={myData.node.frontmatter.title} active="index">
      <div className="flex flex-row items-center">
        <img
          src={Image}
          className="border border-primary-blue rounded w-1/2"
          alt="Plancha"
        />
        <div className="flex flex-col px-5 self-start">
          <div dangerouslySetInnerHTML={{ __html: myData.node.html }} />
          {/* <button>Contáctanos</button> */}
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
