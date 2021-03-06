/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Электрик Харьков",
    description: "This is Electr Portfolio Site",
    author: "@electr",
    //twitterUsername: "@payevska",
    image: "/logo-icon.png",
    siteUrl: "https://electric.kh.ua",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5W3JMLH",
        includeInDevelopment: false,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:5000`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`prices`, `projects`, `blogs`, `abouts`],
        singleTypes: [],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:400,700`,
          `Open Sans`
        ],
        display: 'swap'
      }
    }
  ],
}
