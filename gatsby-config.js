/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/Blog`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
