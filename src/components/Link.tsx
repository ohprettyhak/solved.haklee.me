import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

export default function Link({ href, isExternal, ...restProps }: LinkProps) {
  return <ChakraLink {...(isExternal ? { href } : { as: GatsbyLink, to: href })} {...restProps} />;
}
