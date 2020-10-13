/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    direccion: "C/ Dr. Ferran nº15 - Vilassar de dalt (BARCELONA)",
    correo: "lavanderia@cotton.es",
    fax: "934 694 482",
    telefono: "934 694 482",
    movil: "649 384 265",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`, // wherever background images are stored
      },
    },
    `gatsby-transformer-remark`,
  ],
}
