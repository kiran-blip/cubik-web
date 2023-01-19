import { projectType } from '@/interfaces/project';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { formatNumberWithK } from 'src/lib/functions';

// section 1 part 2
export const ProjectsDonation = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  return (
    <VStack
      width={{ base: 'auto', lg: '9rem' }}
      alignItems={{ base: 'center', md: 'center' }}
    >
      <VStack gap="0" spacing="0" alignItems={'center'} pb="0.5rem">
        <Heading fontSize={{ base: '2xl', md: '4xl' }}>
          ${formatNumberWithK(projectDetails.total_funding_raised)}
        </Heading>
        <Text color="#CBCBCB" fontSize={{ base: 'xs', md: 'sm' }}>
          Funding Raised
        </Text>
      </VStack>
      <Button rounded="full" w="full">
        Contribute
      </Button>
    </VStack>
  );
};
