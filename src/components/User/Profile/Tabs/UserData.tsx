import {
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const UserData = () => {
  return (
    <Container maxW="full" p="0" pt="1rem">
      <VStack alignItems={'start'} gap="3rem">
        <VStack gap="1rem" align={'start'}>
          <Heading
            fontWeight={'500'}
            fontSize="3xl"
            alignItems={'start'}
            color="#B8B8B8"
          >
            Fundings
          </Heading>
          <HStack gap="1rem">
            <VStack
              alignItems={'start'}
              border="1px solid #222222"
              bg="black"
              p="1rem"
              rounded="4px"
              gap="0.5rem"
            >
              <HStack gap="6rem">
                <Text color="#B8B8B8">Amount Raised</Text>
                <Icon color="#222222" as={AiOutlineInfoCircle} />
              </HStack>
              <Heading fontWeight={'500'}>$0.0</Heading>
              <Text pt="2.5rem"></Text>
            </VStack>
            <VStack
              alignItems={'start'}
              border="1px solid #222222"
              bg="black"
              p="1rem"
              rounded="4px"
              gap="0.5rem"
            >
              <HStack gap="6rem">
                <Text color="#B8B8B8">Amount Donated</Text>
                <Icon color="#222222" as={AiOutlineInfoCircle} />
              </HStack>
              <Heading fontWeight={'500'}>$5.0</Heading>
              <Text pt="2.5rem">5.2% vs last round</Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack gap="1rem" align={'start'}>
          <Heading
            fontWeight={'500'}
            fontSize="3xl"
            alignItems={'start'}
            color="#B8B8B8"
          >
            Fundings
          </Heading>
          <VStack
            alignItems={'start'}
            border="1px solid #222222"
            bg="black"
            p="1rem"
            rounded="4px"
            gap="0.5rem"
          >
            <HStack gap="6rem">
              <Text color="#B8B8B8">Amount Raised</Text>
              <Icon color="#222222" as={AiOutlineInfoCircle} />
            </HStack>
            <Heading fontWeight={'500'}>$0.0</Heading>
            <Text pt="2.5rem"></Text>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default UserData;
