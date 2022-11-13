import * as React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '@/components/Layout';

const BOJPage: React.FC = () => {
  return (
    <Layout curTitle="🔥 BOJ" curLink="/problem-solving/boj" prev={false}>
      <Box as="section" mt={12}></Box>
    </Layout>
  );
};

export default BOJPage;
