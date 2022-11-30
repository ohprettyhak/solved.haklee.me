import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/Layout';

export default function ProblemSolvingTemplate({ data: { mdx }, children }: ProblemSolvingTemplateProps) {
  return (
    <Layout>
      <h1>{mdx!!.frontmatter!!.id}</h1>
      <h1>{mdx!!.frontmatter!!.title}</h1>
      {children}
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
