import * as React from 'react';
import { Box } from '@chakra-ui/react';

import Layout from '@/components/Layout';

const CodeforcesPage: React.FC = () => {
  return (
    <Layout curTitle="🔥 Codeforces" curLink="/problem-solving/codeforces" prev={false}>
      <Box as="section" mt={12}></Box>
    </Layout>
  );
};

export default CodeforcesPage;
