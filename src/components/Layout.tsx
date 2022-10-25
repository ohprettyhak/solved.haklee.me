import React from 'react';
import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';
import '@/styles/jetbrains-mono.css';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  console.log(children, title, description);
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Navigation />
      <Container maxW="container.md" pt={16}>
        <Box as="main">{children}</Box>
      </Container>
    </ChakraProvider>
  );
};

export default Layout;
