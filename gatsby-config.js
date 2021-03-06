module.exports = {
  siteMetadata: {
    title: `zolon.me`,
    author: `@zolonw`,
    description: ``,
    image: `/images/og.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `keydYi1iAUNaNRWlN`,
        tables: [
          {
            baseId: `appzxa8oRyeBmpUW4`,
            tableName: `projects`,
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
