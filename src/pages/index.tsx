import * as React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';

import Layout from '@/components/Layout';
import CardButton from '@/components/CardButton';

export default function IndexPage() {
  return (
    <Layout>
      <Box as="section" mt={12}>
        <Text as="h2" variant="title">
          π₯ Problem Solving
        </Text>
        <Text mt={1}>μκ³ λ¦¬μ¦ νΈλ μ΄λ μ¬μ΄νΈμμ νμ΄ν λ¬Έμ λ₯Ό μ λ¦¬ν©λλ€</Text>
        <Grid
          gridTemplateColumns={{
            base: '100%',
            sm: 'minmax(0, 1fr) minmax(0, 1fr)',
            md: 'minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
          }}
          gridGap={4}
          mt={6}
          placeItems="start"
          justifyContent="space-around"
        >
          <CardButton href="/problem-solving/boj" title="BOJ" description="solved.ac Gold I 1421" />
          <CardButton href="/problem-solving/codeforces" title="Codeforces" description="max. newbie, 368" />
        </Grid>
      </Box>
      <Box as="section" mt={12}>
        <Text as="h2" variant="title">
          π Mathematics
        </Text>
        <Text mt={1}>μ»΄ν¨ν° κ³Όνμ νμν μν μ§μμ μ λ¦¬ν©λλ€</Text>
        <Grid></Grid>
      </Box>
    </Layout>
  );
}
