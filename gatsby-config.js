module.exports = {
  siteMetadata: {
    title: `Michelle JL`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `sr7yehvxvava`,
        accessToken: `3bafa9e1e8810963d5adc8a372d1d911bbf8951939b99d649972e808754d8ee7`,
      },
    },
  ],
}
