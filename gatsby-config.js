/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Jessica's Personal Website`,
    siteUrl: `https://jvssicawu.github.io/website-2020`,
    description: `A static website to showcase my work.`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
};
