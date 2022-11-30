import React from 'react';
import { useColorMode, Container, Box, Text, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

import Link from '@/components/Link';

export default function Navigation({ title, prevTitle, prevLink }: NavigationProps) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="nav" position="fixed" w="100%">
      <Container display="flex" maxWidth="100%" h={12} alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1.5}>
          <Link href="/" variant="grayhover" px={1.5} py={0.5}>
            <Text as="h2" variant="navigation">
              🧠 홈
            </Text>
          </Link>
          {prevTitle && prevLink && (
            <>
              <Text>/</Text>
              <Link href={prevLink} variant="grayhover" px={1.5} py={0.5}>
                <Text as="h2" variant="navigation">
                  {prevTitle}
                </Text>
              </Link>
            </>
          )}
          {title && (
            <>
              <Text>/</Text>
              <Link href="" variant="grayhover" px={1.5} py={0.5}>
                <Text as="h2" variant="navigation">
                  {title}
                </Text>
              </Link>
            </>
          )}
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/about" variant="grayhover" px={1.5} py={0.5}>
            <Text variant="navigation">정보</Text>
          </Link>
          <IconButton
            variant="unstyled"
            display="flex"
            width={4}
            aria-label="Switch Color Mode"
            onClick={toggleColorMode}
            isRound
            icon={colorMode === `light` ? <FaMoon /> : <FaSun />}
            transition="all 0.2s ease-in-out"
            _hover={{ bgColor: 'blackAlpha.100' }}
            sx={{
              '.chakra-ui-dark &': {
                _hover: { backgroundColor: 'whiteAlpha.200' },
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}

interface NavigationProps {
  title?: string;
  prevTitle?: string;
  prevLink?: string;
}
