import readingTime from 'reading-time';

export default async function onCreateNode({ node, getNode, actions }: any) {
  let slug;

  if (node.internal.type === 'Mdx') {
    if (node.frontmatter.category === 'boj') slug = `/problem-solving/boj/${node.frontmatter.slug}/`;
    else if (node.frontmatter.category === 'codeforces') slug = `/problem-solving/codeforces/${node.frontmatter.slug}/`;
    else slug = `${node.frontmatter.slug}/`;

    actions.createNodeField({ node, name: `slug`, value: slug });
    actions.createNodeField({ node, name: `timeToRead`, value: readingTime(node.body) });
  }
}
