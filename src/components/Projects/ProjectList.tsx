import { Avatar, Container, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const ProjectCard = () => {
  return (
    <VStack>
      <HStack justifyContent={'space-between'}>
        <Avatar src="https://www.anchor-lang.com/logo.png" name="anchor" />
      </HStack>
      <VStack>
        <HStack>
          <Text></Text>
          <Text></Text>
        </HStack>
        <Text></Text>
      </VStack>
      <HStack>
        <VStack></VStack>
        <VStack></VStack>
      </HStack>
    </VStack>
  );
};
const ProjectList = () => {
  return (
    <Container maxW="7xl" p="2rem">
      ProjectList
    </Container>
  );
};

export default ProjectList;
