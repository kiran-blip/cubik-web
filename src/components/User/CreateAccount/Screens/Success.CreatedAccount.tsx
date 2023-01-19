import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/router';
import { BsArrowRight } from 'react-icons/bs';

// lottie url - https://assets1.lottiefiles.com/packages/lf20_YJFPyhtgf9.json
const AccountCreatedSuccesfully = () => {
  const router = useRouter();
  return (
    <Container maxW="5xl">
      <VStack py={{ base: '1rem', md: '2rem' }}>
        <Player
          autoplay
          keepLastFrame
          speed={1}
          src={'https://assets1.lottiefiles.com/packages/lf20_YJFPyhtgf9.json'}
          style={{ height: `200px`, width: `200px` }}
        />
        <VStack maxW="xl" textAlign={'center'}>
          <Heading fontSize={{ base: 'xl', md: '3xl' }}>
            Account Created Successfully{' '}
          </Heading>
          <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'md' }}>
            Congratulations! Your account has been successfully created. Join
            the cubikDAO discord to verify after verification you can start
            Voting.
          </Text>

          <Center py="2rem" gap="1rem">
            <Button
              fontSize={'md'}
              rightIcon={<BsArrowRight size={16} />}
              iconSpacing="1rem"
              _hover={{
                iconSpacing: '2rem',
              }}
              color="#FF8EFF"
              variant={'unstyled'}
              onClick={() => router.push('/profile')}
            >
              Go to Profile
            </Button>
          </Center>
        </VStack>
      </VStack>
    </Container>
  );
};

export { AccountCreatedSuccesfully };
