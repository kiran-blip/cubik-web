import { Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useUserStore } from 'src/store/userStore';

const Profile = () => {
  const { user } = useUserStore();
  return (
    <Container>
      User Profile Page
      <br />
      Pub key - <Text as="span">{user?.wallet?.publicKey}</Text>
    </Container>
  );
};

export default Profile;
