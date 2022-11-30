import React from 'react';
import { ChakraProvider, Container, Box } from '@chakra-ui/react';

import Navigation from '@/components/Navigation';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';
import '@/styles/jetbrains-mono.css';

export default function Layout({ children, title, description, curTitle, curLink, prev }: LayoutProps) {
  return (
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <Navigation curTitle={curTitle} curLink={curLink} prev={prev} />
      <Container maxW="container.lg" pt={12}>
        <Box as="main">{children}</Box>
      </Container>
    </ChakraProvider>
  );
}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  curTitle?: string;
  curLink?: string;
  prev?: boolean;
}
