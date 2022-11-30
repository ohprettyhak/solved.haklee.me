import path from 'path';
import _ from 'lodash';

const ProblemSolvingTemplate = path.resolve(__dirname, '../src/templates/ProblemSolving.tsx');

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
      component: `${ProblemSolvingTemplate}?__contentFilePath=${nodes.internal.contentFilePath}`,
      context: { id: nodes.id },
    });
  });
}
