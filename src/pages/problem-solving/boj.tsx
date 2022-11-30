import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Box, Table, Input } from '@chakra-ui/react';

import Layout from '@/components/Layout';
import Link from '@/components/Link';

function level2TierElement(level: number): React.ReactNode {
  if (level === 0)
    return (
      <Box as="td" w="15%" color="black" layerStyle="tableData">
        Unrated
      </Box>
    );

  let tier = level % 5;
  if (tier === 0) tier = 5;

  let textColor = 'rgb(33, 33, 33)';
  let rst = 'Unrated';
  if (level < 6) {
    textColor = 'rgb(173, 86, 0)';
    rst = `B${tier}`;
  } else if (level < 11) {
    textColor = 'rgb(67, 95, 122)';
    rst = `S${tier}`;
  } else if (level < 16) {
    textColor = 'rgb(236, 154, 0)';
    rst = `G${tier}`;
  } else if (level < 21) {
    textColor = 'rgb(39, 226, 164)';
    rst = `P${tier}`;
  } else if (level < 26) {
    textColor = 'rgb(0, 180, 252)';
    rst = `D${tier}`;
  } else {
    textColor = 'rgb(255, 0, 98)';
    rst = `R${tier}`;
  }

  return (
    <Box as="td" w="15%" color={textColor} fontSize="sm" fontWeight="medium" textAlign="center">
      {rst}
    </Box>
  );
}

export default function BOJPage({ data: { allMdx } }: BOJPageProps) {
  const { edges } = allMdx;

  const [query, setQuery] = useState('');

  function filter(word: string) {}

  return (
    <Layout curTitle="🔥 BOJ" curLink="/problem-solving/boj" prev={false}>
      <Box as="section" mt={12}>
        <Box position="relative" display="flex" h={12} boxShadow="base" rounded="lg">
          <Input
            display="relative"
            w="100%"
            h="100%"
            padding="0 50px"
            margin="0"
            outline="none"
            borderRadius="lg"
            sx={{
              borderColor: 'transparent',
              borderWidth: '1px',
              ':hover': { borderColor: 'transparent' },
              ':focus': { boxShadow: 'lg', borderColor: 'blackAlpha.100' },
              '.chakra-ui-dark &': {
                borderColor: 'whiteAlpha.400',
                borderWidth: '1px',
                ':hover': { borderColor: 'whiteAlpha.600' },
                ':focus': { boxShadow: 'lg', borderColor: 'whiteAlpha.600' },
              },
            }}
          />
        </Box>
        <Box
          mt={6}
          boxShadow="base"
          px={5}
          py={3}
          rounded="lg"
          sx={{
            borderColor: 'transparent',
            borderWidth: '1px',
            '.chakra-ui-dark &': {
              borderColor: 'whiteAlpha.400',
              borderWidth: '1px',
            },
          }}
        >
          <Table size="sm">
            <Box as="thead" w="100%" borderBottomWidth="1px" borderColor="gray.100">
              <Box as="tr" w="100%">
                <Box as="th" w="10%" layerStyle="tableHeader">
                  ID
                </Box>
                <Box as="th" w="30%" layerStyle="tableHeader">
                  Title
                </Box>
                <Box as="th" w="15%" layerStyle="tableHeader">
                  Level
                </Box>
                <Box as="th" w="15%" layerStyle="tableHeader">
                  Date
                </Box>
                <Box as="th" w="15%" layerStyle="tableHeader">
                  Language
                </Box>
                <Box as="th" w="15%" layerStyle="tableHeader">
                  Tag
                </Box>
              </Box>
            </Box>
            <Box as="tbody" w="100%">
              {edges.map(({ node }) => (
                <Box as="tr" display="table-row" w="100%" borderTop="8px solid transparent">
                  <Box as="td" w="10%" layerStyle="tableData">
                    <Link href={`/problem-solving/boj/${node.frontmatter?.id}`}>{node.frontmatter?.id}</Link>
                  </Box>
                  <Box as="td" w="30%" layerStyle="tableData">
                    <Link href={`/problem-solving/boj/${node.frontmatter?.id}`}>{node.frontmatter?.title}</Link>
                  </Box>
                  {level2TierElement(node.frontmatter?.level!!)}
                  <Box as="td" w="15%" layerStyle="tableData">
                    {node.frontmatter?.date}
                  </Box>
                  <Box as="td" w="15%" layerStyle="tableData">
                    {node.frontmatter?.language}
                  </Box>
                  <Box as="td" w="15%" layerStyle="tableData">
                    {node.frontmatter?.tags?.join(', ')}
                  </Box>
                </Box>
              ))}
            </Box>
          </Table>
        </Box>
      </Box>
    </Layout>
  );
}

export const GetPostsQuery = graphql`
  query posts {
    allMdx(filter: { frontmatter: { category: { eq: "boj" } } }, sort: { frontmatter: { id: ASC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            id
            title
            date(formatString: "yyyy/MM/DD")
            language
            tags
            level
          }
        }
      }
    }
  }
`;

interface BOJPageProps {
  data: Queries.postsQuery;
}
