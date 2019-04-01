module.exports = {
  siteMetadata: {
    siteUrl: `https://travisandmeghan.com/`,
    description:
      "Travis Bloom and Meghan Ledan's wedding website. Includes all the details you need to know about our exciting day :)",
    title: "Travis And Meghan's Wedding",
    author: "travisbloom@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: ["toposort", "react-spring", "@emotion/weak-memoize"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-sharp`,
    { resolve: `gatsby-plugin-sharp`, options: { defaultQuality: 99 } },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travis And Meghan's Wedding`,
        short_name: `T & M Wedding`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `content/assets/eiffel-tower.png`,
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`, // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    "gatsby-plugin-sass",
    "gatsby-plugin-lodash",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-23533190-3",
      },
    },
  ],
}
