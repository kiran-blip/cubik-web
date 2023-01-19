import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import UserProfile from 'src/components/User/Profile/UserProfile';

const Profile = () => {
  return (
    <Container maxW="7xl" p={{ base: '1rem', md: '1rem 6rem' }}>
      <Heading
        fontWeight={{ base: '500', md: '600' }}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Profile
      </Heading>
      <UserProfile />
    </Container>
  );
};

export default Profile;
