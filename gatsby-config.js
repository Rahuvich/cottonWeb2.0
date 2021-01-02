
module.exports = {
  siteMetadata: {
    title: "Lavandería Cotton",
    description:
      "Lavandería Cotton SERVICIOS DE LAVADO PROFESIONAL PARA EMPRESAS Y COLECTIVOS",
    keywords:
      "lavanderia, industrial, cotton, lavar, lavanderos, planchar, secar, ropa, telas",
    url: "https://www.cotton.es",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require('autoprefixer')]
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/img/logoCotton.jpg",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
