import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Socials from '../Socials';

const ConnectSocialAccounts = () => {
  return (
    <Stack
      maxW="5xl"
      p={{ base: '2rem 2rem', md: '3rem 0rem' }}
      direction={{ base: 'column', md: 'row' }}
      mx="auto"
    >
      <VStack alignItems={'start'} textAlign={'start'}>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'xs' }}>
          Step 4 of 5
        </Text>
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>Connect Socials</Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          Connecting social media accounts helps us verify your identity and
          helps us to detect and prevent fraud.
        </Text>
        <Socials />
      </VStack>
    </Stack>
  );
};

export { ConnectSocialAccounts };
