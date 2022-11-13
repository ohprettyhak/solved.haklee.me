import { CreateWebpackConfigArgs } from 'gatsby';
import path from 'path';

import createNode from './gatsby/create-node';
import createPage from './gatsby/create-pages';

export const onCreateNode = createNode;
export const createPages = createPage;
export const onCreateWebpackConfig = ({ getConfig, actions }: CreateWebpackConfigArgs) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/config': path.resolve(__dirname, '.'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/utils': path.resolve(__dirname, 'src/utils'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
        '@/types': path.resolve(__dirname, 'src/types'),
      },
    },
  });
};
