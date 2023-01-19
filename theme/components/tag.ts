import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: 'orange.400',
    color: 'blackAlpha.700',
  },
});
const colorful = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: '#2D2D2D',
    borderRadius: '10rem',
    color: '#BBBBBB',
    padding: '0.3rem 1rem',
  },
});

export const Tag = defineMultiStyleConfig({
  baseStyle,
  variants: { colorful: colorful },
});
