import React from 'react';
import { Text } from '@chakra-ui/react';

import Link from '@/components/Link';

export default function CardButton({ href, title, description }: CardButtonProps) {
  return (
    <Link variant="cardButton" href={href} w="100%" h="100%" p="4" userSelect="none" boxShadow="sm" borderRadius="8px">
      <Text variant="title" fontSize="xl" fontWeight="extrabold">
        {`${title} →`}
      </Text>
      <Text fontFamily="mono" fontSize="0.9rem">
        {description}
      </Text>
    </Link>
  );
};

const defaultProps: CardButtonProps = {
  href: '',
  title: '',
  description: '',
};

interface CardButtonProps {
  href: string;
  title: string;
  description: string;
}

CardButton.defaultProps = defaultProps;
