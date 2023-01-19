import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import CreateProfile from '../ProfileData/CreateProfile';

const ProfileDetailsData = () => {
  return (
    <Stack
      maxW="5xl"
      p={{ base: '2rem 2rem', md: '3rem 0rem' }}
      direction={{ base: 'column', md: 'row' }}
      mx="auto"
    >
      <VStack alignItems={'start'} textAlign={'start'}>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'xs' }}>
          Step 3 of 5
        </Text>
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>Your Profile</Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          To ensure the security and integrity of our platform and to comply
          with regulatory requirements, we need you to verify your identity
          through your Civic Id.
        </Text>
        <CreateProfile />
      </VStack>
    </Stack>
  );
};

export { ProfileDetailsData };
