module.exports = {
  siteMetadata: {
    title: `Ultra Basic Coffee`,
    description: `An illustrated guide to the fundamentals of coffee extraction.`,
    author: `Dakota Sexton`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: [
            "Knockout 69 A",
            "Knockout 69 B",
            "Input Mono Lt",
          ],
          urls: [
            "https://cloud.typography.com/7428116/7733612/css/fonts.css",
          ],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
