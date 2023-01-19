import { Container } from '@chakra-ui/react';
import React from 'react';
import { AccountCreatedSuccesfully } from 'src/components/User/CreateAccount';

const success = () => {
  return (
    <Container maxW="6xl">
      <AccountCreatedSuccesfully />
    </Container>
  );
};

export default success;
