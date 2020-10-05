/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const colorPalette =  {
	darkBase: '#28284D',
	lightBase: '#EAEAFF',
	lightText: '#FFFFFF',
};

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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
					colorPalette: colorPalette,
          global: {
            bg: colorPalette.lightBase,
            color: colorPalette.darkBase,
          },
        },
        dark: {
          colorPalette: colorPalette,
          global: {
            bg: colorPalette.darkBase,
            color: colorPalette.lightText,
          },
        },
      },
    },
  ],
};
