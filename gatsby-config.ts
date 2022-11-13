import type { GatsbyConfig } from 'gatsby';
import metaConfig from './gatsby-meta-config';

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  graphqlTypegen: {
    typesOutputPath: `src/types/gatsby-types.d.ts`,
  },
  plugins: [
    `gatsby-plugin-no-sourcemaps`,
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 720,
              },
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/content`,
      },
    },
  ],
};

export default config;
