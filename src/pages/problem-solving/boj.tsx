import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { Box, Table, Input } from '@chakra-ui/react';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

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

  let textColor: string = 'rgb(33, 33, 33)';
  let rst: string = 'Unrated';
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
  const { nodes } = allMdx;

  const [query, setQuery] = useState('');
  const [problem, setProblem] = useState<Array<ProblemArrayType>>([]);

  function filter(word: string) {
    const list: Array<ProblemArrayType> = [];
    nodes.map((node: ProblemArrayType) => {
      if (node.frontmatter?.id!!.toString().includes(word)) list.push(node);
      else if (node.frontmatter?.title!!.includes(word)) list.push(node);
      else if (node.frontmatter?.level!!.toString().includes(word)) list.push(node);
    });
    setProblem(list);
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => filter(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  console.log(problem);

  return (
    <Layout curTitle="🔥 BOJ" curLink="/problem-solving/boj" prev={false}>
      <Box as="section" my={12}>
        <Box position="relative" display="flex" h={12} boxShadow="base" rounded="lg">
          <Input
            w="100%"
            h="100%"
            px={12}
            margin="0"
            fontWeight="medium"
            outline="none"
            borderRadius="lg"
            sx={{
              borderColor: 'transparent',
              borderWidth: '1px',
              '::placeholder': { color: 'blackAlpha.400', fontFamly: 'body' },
              ':hover': { borderColor: 'transparent' },
              ':focus': { boxShadow: 'lg', borderColor: 'blackAlpha.100' },
              '.chakra-ui-dark &': {
                borderColor: 'whiteAlpha.400',
                borderWidth: '1px',
                '::placeholder': { color: 'whiteAlpha.400' },
                ':hover': { borderColor: 'whiteAlpha.600' },
                ':focus': { boxShadow: 'lg', borderColor: 'whiteAlpha.600' },
              },
            }}
            placeholder="Search problems... (ID, TITLE, ..)"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)}
          />
          <Box
            position="absolute"
            display="flex"
            top="0"
            bottom="0"
            mx={4}
            alignItems="center"
            sx={{
              svg: { width: '16px', height: '16px', color: 'blackAlpha.400' },
              '.chakra-ui-dark &': {
                svg: { color: 'whiteAlpha.400' },
              },
            }}
          >
            <FaSearch />
          </Box>
          <Box
            position="absolute"
            display="flex"
            top="0"
            bottom="0"
            right="0"
            mx={4}
            alignItems="center"
            cursor="pointer"
            sx={{
              svg: { width: '16px', height: '16px', color: 'blackAlpha.400' },
              '.chakra-ui-dark &': {
                svg: { color: 'whiteAlpha.400' },
              },
            }}
          >
            <FaArrowRight />
          </Box>
        </Box>
        <Box
          mt={6}
          boxShadow="base"
          px={5}
          py={3}
          rounded="lg"
          overflowX="auto"
          sx={{
            borderColor: 'transparent',
            borderWidth: '1px',
            '.chakra-ui-dark &': {
              borderColor: 'whiteAlpha.400',
              borderWidth: '1px',
            },
          }}
        >
          <Table size="sm" minWidth="720px">
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
              {problem.length !== 0 &&
                problem.map((node: ProblemArrayType) => (
                  <Box key={node.id} as="tr" display="table-row" w="100%" borderTop="8px solid transparent">
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
      nodes {
        fields {
          slug
        }
        id
        frontmatter {
          id
          title
          tags
          level
          language
          date(formatString: "yyyy/MM/DD")
        }
      }
    }
  }
`;

interface BOJPageProps {
  data: Queries.postsQuery;
}

interface ProblemArrayType {
  readonly id: string;
  readonly fields: { readonly slug: string | null } | null;
  readonly frontmatter: {
    readonly id: number | null;
    readonly title: string | null;
    readonly tags: ReadonlyArray<string | null> | null;
    readonly level: number | null;
    readonly language: ReadonlyArray<string | null> | null;
    readonly date: string | null;
  } | null;
}
