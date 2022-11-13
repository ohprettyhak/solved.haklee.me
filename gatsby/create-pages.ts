const path = require('path');
const _ = require('lodash');

const postTemplate = path.resolve(__dirname, '../src/templates/PostTemplate.tsx');

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
      component: `${postTemplate}?__contentFilePath=${nodes.internal.contentFilePath}`,
      context: { id: nodes.id },
    });
  });
}
