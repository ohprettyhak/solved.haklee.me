import React from 'react';
import { graphql } from 'gatsby';
import { Box } from '@chakra-ui/react';

import Layout from '@/components/Layout';

export default function ProblemSolvingTemplate({ data: { mdx }, children }: ProblemSolvingTemplateProps) {
  return (
    <Layout title={mdx!!.frontmatter!!.id?.toString()} prevTitle="🔥 BOJ" prevLink="/problem-solving/boj/">
      <h1>{mdx!!.frontmatter!!.id}</h1>
      <h1>{mdx!!.frontmatter!!.title}</h1>
      <Box as="article">{children}</Box>
    </Layout>
  );
}

export const GetPostQuery = graphql`
  query post($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        id
        title
      }
    }
  }
`;

interface ProblemSolvingTemplateProps {
  data: Queries.postQuery;
  children: React.ReactNode;
}
