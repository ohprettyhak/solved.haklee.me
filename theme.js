import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
    mono: 'JetBrains Mono, SFMono-Regular, Pretendard, Menlo, Consolas, PT Mono, Liberation Mono, Courier, monospace',
  },
  colors: {
    gitdark: {
      light: '#343434',
      normal: '#202020',
      press: '#181818',
    },
  },
  components: {
    Text: {
      baseStyle: (props) => ({
        color: mode('gray.600', 'gray.200')(props),
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
      }),
      variants: {
        navigation: (props) => ({
          color: mode('gray.800', 'white')(props),
          fontWeight: 'normal',
          fontSize: '0.95rem',
          userSelect: 'none',
        }),
        title: (props) => ({
          color: mode('gray.800', 'white')(props),
          fontWeight: 'bold',
          fontSize: 'lg',
        }),
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('gray.800', 'whiteAlpha.800')(props),
        fontFamily: 'body',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          textDecoration: 'none',
        },
      }),
      variants: {
        underline: (props) => ({
          borderBottomColor: 'transparent',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          _hover: { color: 'pink.400', borderBottomColor: 'pink.400', textDecoration: 'none' },
        }),
        grayhover: (props) => ({
          textDecoration: 'none',
          borderRadius: '6px',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
          _hover: { backgroundColor: 'blackAlpha.100' },
          '.chakra-ui-dark &': {
            _hover: { backgroundColor: 'whiteAlpha.200' },
          },
        }),
        cardButton: (props) => ({
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          transition: 'all 0.2s ease-in-out',
          _hover: { backgroundColor: 'blackAlpha.200' },
          '.chakra-ui-dark &': {
            backgroundColor: 'whiteAlpha.100',
            _hover: { backgroundColor: 'whiteAlpha.300' },
          },
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        lineHeight: '1.75',
        backgroundColor: mode('white.200', 'gitdark.normal')(props),
      },
      nav: {
        backgroundColor: mode('white', 'gitdark.normal')(props),
      },
      '.article': {
        p: { mb: '4' },
        a: {
          color: mode('pink.400', 'pink.300')(props),
          fontWeight: 'medium',
          borderBottomColor: 'transparent',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          _hover: { color: 'pink.400', borderBottomColor: 'pink.400', textDecoration: 'none' },
        },
      },
      '*::selection': {
        background: mode('blackAlpha.200', 'whiteAlpha.200')(props),
      },
    }),
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-gray-500)' },
});

export default customTheme;
