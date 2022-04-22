import { Box } from '@chakra-ui/react';
import NextImage from 'next/image';
import React from 'react';

export const BoxedNextImage = ({ src, alt, ...props }) => (
  <Box
    pos="relative"
    {...props}
    style={{
      objectFit: 'contain',
    }}
  >
    <NextImage {...{ src, alt }} layout="fill" objectFit="contain" />
  </Box>
);

