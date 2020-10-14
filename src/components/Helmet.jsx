import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../assets/img/logoCotton.jpg"

function CottonHelmet() {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            keywords
            title
            url
            description
          }
        }
      }
    `
  )
  console.log(data)
  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={data.site.siteMetadata.description}
      />
      <meta property="og:image" content={Logo} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={data.site.siteMetadata.url} />
      <link rel="canonical" href={data.site.siteMetadata.url} />
    </Helmet>
  )
}

export default CottonHelmet
