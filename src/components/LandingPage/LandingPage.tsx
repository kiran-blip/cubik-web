import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const LandingPage = () => {
  const router = useRouter();
  return (
    <Container maxW="5xl" py={{ base: '8vh', md: '10rem' }}>
      <VStack
        textAlign="center"
        maxW="41rem"
        mx="auto"
        alignItems={'center'}
        justify="center"
        p={{ base: '0.5rem', md: '0rem' }}
        gap="0.1rem"
      >
        <Text fontSize={{ base: 'sm', md: 'lg' }} color="#FF8EFF">
          Arriving 2023
        </Text>
        <Heading
          zIndex="1"
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="600"
        >
          Support public good on Solana in a decentralized way
        </Heading>
        <Center py="1rem">
          <Button
            onClick={() => {
              router.push('/projects');
            }}
            zIndex="1"
            rounded={'full'}
          >
            View Projects
          </Button>
        </Center>
        <Center
          width={{ base: '14rem', md: '22rem' }}
          transform={{ base: 'translateY(-7rem)', md: 'translateY(-8rem)' }}
          zIndex="0"
        >
          <Image
            src="/HeroCube.jpg"
            alt="cubik hero image"
            width={400}
            height={400}
          />
        </Center>
      </VStack>
    </Container>
  );
};

export default LandingPage;
