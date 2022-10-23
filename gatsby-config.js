const metaConfig = require('./gatsby-meta-config');

module.exports = {
  siteMetadata: metaConfig,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
};
