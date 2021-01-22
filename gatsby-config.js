/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "kadhal kavithai",
    author: "Santhosh Veer",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kadhal`,
        short_name: `Kadhal`,
        description: `Tamil SMS Blog - Get Random Kadhal kavithai and Tamil Love Quotes.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        legacy: true,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
  ],
}
