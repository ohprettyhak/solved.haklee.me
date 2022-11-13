import * as React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';

import Layout from '@/components/Layout';
import CardButton from '@/components/CardButton';

export default function IndexPage() {
  return (
    <Layout>
      <Box as="section" mt={12}>
        <Text as="h2" variant="title">
          🔥 Problem Solving
        </Text>
        <Text mt={1}>Solving Algorithms Problems in BOJ and Codeforces</Text>
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
          <CardButton href="/problem-solving/boj" title="BOJ" description="solved.ac Gold II 1390" />
          <CardButton href="/problem-solving/codeforces" title="Codeforces" description="max. newbie, 368" />
        </Grid>
      </Box>
      <Box as="section" mt={12}>
        <Text as="h2" variant="title">
          📐 Maths
        </Text>
        <Text mt={1}>Needed for CS</Text>
        <Grid></Grid>
      </Box>
    </Layout>
  );
}
