import {
  Alert,
  AlertDescription,
  AlertIcon,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import BadgesList from './BadgesList';

const UserData = () => {
  return (
    <Container maxW="full" p="0" pt="2rem">
      <VStack alignItems={'start'} w="full" gap="3rem">
        <VStack w="full" gap="1rem" align={'start'}>
          <Heading
            fontWeight="600"
            fontSize={{ base: 'md', md: 'xl' }}
            alignItems={'start'}
            color="#B8B8B8"
          >
            Funding
          </Heading>
          <HStack gap="1rem">
            <VStack
              alignItems={'start'}
              border="1px solid #222222"
              bg="black"
              p="1rem 1.5rem"
              rounded="4px"
              gap="0.5rem"
              h="auto"
            >
              <HStack gap="6rem">
                <Text color="#B8B8B8">Amount Raised</Text>
                <Icon color="#222222" as={AiOutlineInfoCircle} />
              </HStack>
              <Heading fontWeight={'500'}>$0.0</Heading>
              {/* <Text pt="2.5rem"></Text> */}
            </VStack>
            <VStack
              alignItems={'start'}
              border="1px solid #222222"
              bg="black"
              p="1rem 1.5rem"
              rounded="4px"
              gap="0.5rem"
              h="auto"
            >
              <HStack gap="6rem">
                <Text color="#B8B8B8">Amount Donated</Text>
                <Icon color="#222222" as={AiOutlineInfoCircle} />
              </HStack>
              <Heading fontWeight={'500'}>$5.0</Heading>
              {/* <Text pt="2.5rem">5.2% vs last round</Text> */}
            </VStack>
          </HStack>
        </VStack>
        <VStack w="full" gap="1rem" align={'start'}>
          <Heading
            fontWeight="600"
            fontSize={{ base: 'md', md: 'xl' }}
            alignItems={'start'}
            color="#B8B8B8"
          >
            Badges
          </Heading>
          <Alert bg="#261526" status="error">
            <AlertIcon color="#DB79DB" />
            <AlertDescription fontSize="sm" color="#DEDEDE">
              You should have at-least 2 verified badges in order to start
              voting for your favourite project
            </AlertDescription>
          </Alert>
          <BadgesList />
        </VStack>
      </VStack>
    </Container>
  );
};

export default UserData;
