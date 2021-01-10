/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const colorPalette = {
  black: '#000000',
  darkBase: '#28284D',
  lightBase: '#EAEAFF',
  lightText: '#FFFFFF',
  primaryButton: '#F37777',
  primaryButtonHover: '#D94A64',
  red: '#F37777',
  teal: '#83D4D1',
  white: '#FFFFFF',
  yellow: '#FED19C',
  lavendar: '#B0CBFF',
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`solway\:300,500,700`],
        display: 'swap',
      },
    },
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
