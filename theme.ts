import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  fonts: {
    heading:
      '-apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Pretendard, Roboto, Noto Sans KR, Segoe UI, Malgun Gothic, sans-serif',
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
      baseStyle: {
        color: 'gray.600',
        fontFamily: 'body',
        lineHeight: '1.75',
        transition: 'all 0.3s ease-in-out',
        '.chakra-ui-dark &': {
          color: 'gray.200',
        },
      },
      variants: {
        navigation: {
          color: 'gray.800',
          fontWeight: 'normal',
          fontSize: '0.95rem',
          userSelect: 'none',
          '.chakra-ui-dark &': {
            color: 'white',
          },
        },
        title: {
          color: 'gray.800',
          fontWeight: 'bold',
          fontSize: 'lg',
          '.chakra-ui-dark &': {
            color: 'white',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'gray.800',
        fontFamily: 'body',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          textDecoration: 'none',
        },
        '.chakra-ui-dark &': {
          color: 'whiteAlpha.800',
        },
      },
      variants: {
        underline: {
          borderBottomColor: 'transparent',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          _hover: { color: 'pink.400', borderBottomColor: 'pink.400', textDecoration: 'none' },
        },
        grayhover: {
          textDecoration: 'none',
          borderRadius: '6px',
          backgroundColor: 'transparent',
          transition: 'all 0.2s ease-in-out',
          _hover: { backgroundColor: 'blackAlpha.100' },
          '.chakra-ui-dark &': {
            _hover: { backgroundColor: 'whiteAlpha.200' },
          },
        },
        cardButton: {
          backgroundColor: 'rgba(0, 0, 0, 0.03)',
          transition: 'all 0.2s ease-in-out',
          _hover: { backgroundColor: 'blackAlpha.200' },
          '.chakra-ui-dark &': {
            backgroundColor: 'whiteAlpha.100',
            _hover: { backgroundColor: 'whiteAlpha.200' },
          },
        },
      },
    },
  },
  layerStyles: {
    tableHeader: {
      display: 'table-cell',
      color: 'gray.800',
      fontWeight: 'extrabold',
      fontSize: 'xs',
      textTransform: 'uppercase',
      textAlign: 'center',
      letterSpacing: 'wider',
      '.chakra-ui-dark &': {
        color: 'white',
      },
    },
    tableData: {
      display: 'table-cell',
      color: 'gray.600',
      fontSize: 'sm',
      fontWeight: 'medium',
      textAlign: 'center',
      '.chakra-ui-dark &': {
        color: 'whiteAlpha.800',
      },
      a: {
        color: 'gray.600',
        borderBottomWidth: 'none',
        borderBottomColor: 'transparent',
        transition: 'all 0.1s ease-in-out',
        ':hover': {
          borderBottomWidth: '1px',
          borderBottomColor: 'gray.600',
        },
        '.chakra-ui-dark &': {
          color: 'whiteAlpha.800',
          ':hover': {
            borderBottomWidth: '1px',
            borderBottomColor: 'whiteAlpha.800',
          },
        },
      },
    },
  },
  styles: {
    global: {
      'html, body, #___gatsby': {
        height: '100%',
        lineHeight: '1.75',
        background: 'white.200',
        '.chakra-ui-dark &': {
          background: 'gitdark.normal',
        },
      },
      nav: {
        background: 'white',
        '.chakra-ui-dark &': {
          background: 'gitdark.normal',
        },
      },
      '.article': {
        p: { mb: '4' },
        a: {
          color: 'pink.400',
          fontWeight: 'medium',
          borderBottomColor: 'transparent',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          _hover: { color: 'pink.400', borderBottomColor: 'pink.400', textDecoration: 'none' },
          '.chakra-ui-dark &': {
            color: 'pink.300',
          },
        },
      },
      '*::selection': {
        background: 'blackAlpha.200',
        '.chakra-ui-dark &': {
          background: 'whiteAlpha.200',
        },
      },
      input: {
        borderColor: 'gray.400',
        ':focus': { borderColor: 'gray.400' },
        '.chakra-ui-dark &': {
          borderColor: 'gray.400',
          ':focus': { borderColor: 'whiteAlpha.400' },
        },
      },
    },
  },
  shadows: { outline: '0 0 0 2px var(--chakra-colors-gray-500)' },
});

export default customTheme;
