import { projectType } from '@/interfaces/project';
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { HiFlag, HiLink } from 'react-icons/hi';
import { getDomain } from 'src/lib/functions';
import { ProjectsDetailedDescription } from './ProjectComponents/DetailedDescription';
import { ProjectsTabs } from './ProjectComponents/ProjectTabs';

const ProjectLink = ({ urlName }: { urlName: string }) => {
  switch (urlName) {
    case 'url':
      return <HiLink />;
    case 'twitter':
      return <FaTwitter />;
    case 'discord':
      return <FaDiscord />;
    case 'telegram':
      return <FaTelegramPlane />;
    case 'youtube':
      return <FaYoutube />;
    case 'flag':
      return <HiFlag />;
    default:
      return <></>;
  }
};
const ProjectOwners = () => {
  return (
    <Box w={{ base: 'auto', sm: 'auto', md: '18rem' }}>
      <Heading fontSize={{ base: 'md', md: '2xl' }}>Project Owners</Heading>
      <VStack
        py={{ base: '1rem', sm: '1.2rem', md: '2rem' }}
        pl={{ base: '2rem', md: '2.4rem' }}
        gap={{ base: '0.6rem', sm: '0.8rem', md: '1rem' }}
        align="flex-start"
        justify={'start'}
      >
        <HStack
          w={{ base: '45vw', sm: '13rem', md: '15rem' }}
          justifyContent={'space-between'}
        >
          <HStack gap="0.6rem">
            <Avatar size={{ base: 'sm', md: 'sm' }} />{' '}
            <Text fontSize={{ base: 'sm', md: 'md' }}>irffan.sol</Text>
          </HStack>
          <Text
            display={{ base: 'none', sm: 'block', md: 'block' }}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            0xkm..3fts
          </Text>
        </HStack>
        <HStack
          w={{ base: '45vw', sm: '13rem', md: '15rem' }}
          justifyContent={'space-between'}
        >
          <HStack gap="0.6rem">
            <Avatar size={{ base: 'sm', md: 'sm' }} />{' '}
            <Text fontSize={{ base: 'sm', md: 'md' }}>dhruvraj.sol</Text>
          </HStack>
          <Text
            display={{ base: 'none', sm: 'block', md: 'block' }}
            fontSize={{ base: 'xs', md: 'md' }}
          >
            0xkm..3fts
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};
// section 2
export const ProjectDetailLayout = ({
  projectDetails,
}: {
  projectDetails: projectType;
}) => {
  return (
    <Stack
      mx="auto"
      w="full"
      maxW="6xl"
      gap={{ base: '1rem', md: '4rem' }}
      p={{ base: '0rem', sm: '1rem', md: '1rem', lg: '1rem' }}
      display={'flex'}
      flexDir={{ base: 'column', md: 'row-reverse' }}
      justifyContent="space-between"
    >
      <Stack
        justify={'space-between'}
        direction={{ base: 'row', sm: 'row', md: 'column' }}
        gap="1rem"
      >
        <Box w={{ base: 'auto', sm: 'auto', md: '18rem' }}>
          <Heading fontSize={{ base: 'md', md: '2xl' }}>Links</Heading>
          <VStack
            py="1rem"
            pl={{ base: '1rem', md: '2rem' }}
            align={'start'}
            gap="0rem"
            color="#CBCBCB"
          >
            <Button
              variant={'unstyled'}
              iconSpacing={'0.8rem'}
              p="0"
              h="fit-content"
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              leftIcon={<ProjectLink urlName={'url'} />}
            >
              {getDomain(projectDetails.url)}
            </Button>
            {projectDetails?.socials?.map((link, key) => (
              <Button
                iconSpacing={'0.8rem'}
                h="fit-content"
                variant={'unstyled'}
                fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                key={key}
                leftIcon={<ProjectLink urlName={link.name} />}
              >
                {getDomain(link.url)}
              </Button>
            ))}{' '}
            <Button
              variant={'unstyled'}
              iconSpacing={'0.8rem'}
              p="0"
              h="fit-content"
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              leftIcon={<ProjectLink urlName={'flag'} />}
            >
              Flag
            </Button>
          </VStack>
        </Box>
        <ProjectOwners />
      </Stack>
      <Stack direction={'column'} gap="2rem">
        <ProjectsDetailedDescription
          description={projectDetails.detailed_description}
        />
        <ProjectsTabs />
      </Stack>
    </Stack>
  );
};
