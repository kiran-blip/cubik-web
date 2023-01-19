import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const ProjectsDetailedDescription = ({
  description,
}: {
  description: string;
}) => {
  return (
    <Box>
      <Heading fontSize={{ base: 'md', md: '2xl' }}>About Project</Heading>
      <Text color="#CBCBCB" fontSize={{ base: 'xs', md: 'md' }} py="1rem">
        {description}
      </Text>
    </Box>
  );
};
