import type { GatsbyConfig } from 'gatsby';
import metaConfig from './gatsby-meta-config';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/content`,
      },
    },
  ],
};

export default config;
