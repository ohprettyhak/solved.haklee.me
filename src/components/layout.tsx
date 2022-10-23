import React from 'react';

import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import 'pretendard/dist/web/static/pretendard.css';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  console.log(children, title, description);
  return (
    <ChakraProvider>
      <Container maxW="container.lg">
        <Box as="main">{children}</Box>
      </Container>
    </ChakraProvider>
  );
};

export default Layout;
