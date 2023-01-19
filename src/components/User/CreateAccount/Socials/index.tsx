import { Button, Container, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

const Socials = () => {
  return (
    <Container>
      <VStack>
        <VStack>
          <HStack>
            <HStack></HStack>
            <Button color="white" backgroundColor="#828282">
              Connect
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            <Button color="white" backgroundColor="#828282">
              Skip
            </Button>
            <Button>Continue</Button>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Socials;
