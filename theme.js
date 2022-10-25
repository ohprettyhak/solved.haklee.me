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
    Heading: {
      baseStyle: (props) => ({
        color: mode('gray.800', 'white')(props),
        fontFamily: 'body',
        transition: 'all 0.3s ease-in-out',
      }),
    },
    Text: {
      baseStyle: (props) => ({
        color: mode('gray.600', 'gray.200')(props),
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
      }),
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
          borderRadius: '4px',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
          _hover: { backgroundColor: 'blackAlpha.100' },
          '.chakra-ui-dark &': {
            _hover: { backgroundColor: 'whiteAlpha.200' },
          },
        }),
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        lineHeight: 'taller',
        backgroundColor: mode('white.200', 'gitdark.normal')(props),
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
