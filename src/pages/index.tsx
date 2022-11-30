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
        <Text mt={1}>알고리즘 트레이닝 사이트에서 풀이한 문제를 정리합니다</Text>
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
          📐 Mathematics
        </Text>
        <Text mt={1}>컴퓨터 과학에 필요한 수학 지식을 정리합니다</Text>
        <Grid></Grid>
      </Box>
    </Layout>
  );
}
