import React from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from '@chakra-ui/react';
import CreateProfile from 'src/components/Profile/CreateProfile/CreateProfile';

const Create = () => {
  return (
    <Container
      display="flex"
      alignItems="top"
      justifyContent="center"
      maxW="2xl"
      mx="auto"
      py={{ base: '1rem', sm: '1.5rem', md: '4rem' }}
      position={'relative'}
      _before={{
        content: `' '`,
        zIndex: '-1',
        background: '#FF8EFF',
        filter: 'blur(70px)',
        position: 'absolute',
        top: '4rem',
        left: '40%',
        width: '8rem',
        height: '8rem',
      }}
      _after={{
        content: `' '`,
        zIndex: '-1',
        background: '#fff',
        filter: 'blur(100px)',
        position: 'absolute',
        top: '18rem',
        left: '60%',
        width: '8rem',
        height: '8rem',
      }}
    >
      <Card p="0.5rem" maxW="30rem" bg="#0F0F0F" color="white">
        <CardHeader>
          <Heading py="0.5rem" fontSize={{ base: 'lg', md: '2xl' }}>
            Create New Profile
          </Heading>
          <Text fontSize={{ base: 'xs', md: 'sm' }} color="#CACACA">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            commodo, arcu in pulvinar sit amet, consectetur adipiscing
          </Text>
        </CardHeader>
        <CardBody>
          <CreateProfile />
        </CardBody>
      </Card>
    </Container>
  );
};

export default Create;
