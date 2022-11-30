import * as React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout curTitle="정보" curLink="/about" prev={false}>
      <Box as="section" mt={12}></Box>
    </Layout>
  );
}
