import { Container, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ProjectsAboutAndDonation } from 'src/components/Projects/ProjectsDetail/ProjectComponents/ProjectAboutAndDonation';
import { ProjectDetailLayout } from 'src/components/Projects/ProjectsDetail/ProjectDetailsLayout';

const ProjectDetails = () => {
  const { query, pathname } = useRouter();
  const [projectDetails, setProjectDetails] = useState({
    name: 'Orca',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DKwvuL_xw36fymf0CzyFXCQWt9m5Mg4qbiO6fWguLA&s',
    about:
      'Orca is the easiest way to exchange cryptocurrency on the Solana blockchain. You can exchange tokens with minimal transaction fees and lower latency than any DEX on Ethereum',
    total_funding_raised: 38748,
    url: 'https://www.orca.so/',
    detailed_description:
      'Orca is the easiest way to exchange cryptocurrency on the Solana blockchain. Here, you can exchange tokens with minimal transaction fees and lower latency than any DEX on Ethereum, all while knowing that you’re getting a fair price. Additionally, you may provide liquidity to a trading pool to earn a share of trading fees.',
    socials: [
      { name: 'twitter', url: 'https://twitter.com/openbookdex' },
      { name: 'discord', url: 'https://discord.com/invite/pX3n5Sercb' },
    ],
    tags: ['DeFi', 'SDK'],
  });

  return (
    <Container maxW="6xl" py={{ base: '1rem', md: '2rem' }}>
      <VStack gap="2rem">
        <ProjectsAboutAndDonation projectDetails={projectDetails} />
        <ProjectDetailLayout projectDetails={projectDetails} />
      </VStack>
    </Container>
  );
};

export default ProjectDetails;
