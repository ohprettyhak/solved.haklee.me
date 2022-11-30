import path from 'path';
import _ from 'lodash';

const BOJTemplate = path.resolve(__dirname, '../src/templates/BOJ.tsx');

const query = `
  {
    posts: allMdx {
      nodes {
        fields {
          slug
        }
        id
        internal {
          contentFilePath
        }
      }
    }
  }
`;

export default async function createPages({ graphql, actions }: any) {
  const response = await graphql(query);
  if (response.errors) throw new Error(response.errors);
  const { posts } = response.data;

  posts.nodes.forEach((nodes: any) => {
    actions.createPage({
      path: nodes.fields.slug,
      component: `${BOJTemplate}?__contentFilePath=${nodes.internal.contentFilePath}`,
      context: { id: nodes.id },
    });
  });
}
