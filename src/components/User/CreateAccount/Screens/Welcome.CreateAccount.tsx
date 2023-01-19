import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import SolanaWalletButton from 'src/components/Wallet/SolananWalletButton';

const WelcomeToCreateAccount = () => {
  return (
    <Stack
      maxW="5xl"
      p={{ base: '2rem 2rem', md: '3rem 0rem' }}
      direction={{ base: 'column', md: 'row' }}
      mx="auto"
    >
      <VStack alignItems={'start'} textAlign={'start'}>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'xs' }}>
          Step 1 of 5
        </Text>
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>
          Welcome to Cubik
        </Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          Join a movement of individuals dedicated to creating a better Solana
          community. Sign up now to vote on and fund public good projects.
        </Text>
        <VStack
          w={{ base: '80vw', md: '25rem' }}
          _before={{
            zIndex: '-1',
            content: `" "`,
            position: 'absolute',
            //top: `1%`,
            //left: `50%`,
            overflow: 'hidden',
            width: '6rem',
            height: '6rem',
            transform: 'translate(-4rem, -2rem)',
            filter: 'blur(120px)',
            WebkitBackdropFilter: 'blur(0px)',
            WebkitFilter: 'blur(120px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
          gap="0.4rem"
          py={{ base: '1.4rem', md: '1.4rem' }}
        >
          <SolanaWalletButton />
        </VStack>
      </VStack>
    </Stack>
  );
};

export { WelcomeToCreateAccount };
