import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@/components/Layout';

export default function PostTemplate({ data: { mdx }, children }: PostTemplateProps) {
  return (
    <Layout>
      <h1>{mdx!!.frontmatter!!.title}</h1>
      {children}
    </Layout>
  );
}

export const pageQuery = graphql`
  query post($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

interface PostTemplateProps {
  data: Queries.postQuery;
  children: React.ReactNode;
}
