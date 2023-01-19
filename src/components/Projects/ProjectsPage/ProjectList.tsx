import { projectType } from '@/interfaces/project';
import {
  Avatar,
  AvatarGroup,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import CustomTag from 'src/components/Tags';
import { formatNumberWithK, getDomain } from 'src/lib/functions';
import ProjectsData from '../../../data/projects.json';

type PropsType = {
  project: projectType;
};

const ProjectCard = ({ project }: PropsType) => {
  const router = useRouter();
  return (
    <VStack
      onClick={() => {
        router.push('/projects/' + project.name);
      }}
      h={{ base: '', md: '22rem' }}
      cursor="pointer"
      m="0"
      backgroundColor="#070707"
      _hover={{
        backgroundColor: '#121212',
      }}
      rounded="6px"
      border="1px solid #222222"
      p={{ base: '1rem', xl: '1rem 1.5rem' }}
      maxW={{
        base: '82vw',
        sm: '42vw',
        md: '29vw',
        lg: '24vw',
        xl: '20.5rem',
      }}
      w="100%"
      alignItems={'start'}
      justifyContent="space-between"
    >
      <VStack alignItems={'start'} justifyContent="start" w="full">
        <HStack
          py={{ base: '0.5rem', md: '1rem' }}
          justifyContent={'space-between'}
        >
          <Avatar
            src={project.logo}
            name="anchor"
            size={{ base: 'md', md: 'lg' }}
          />
        </HStack>
        <VStack gap="0" spacing="0" w="full">
          <HStack w="full" justify="space-between">
            <Heading fontSize={{ base: 'md', md: 'lg' }}>
              {project.name}
            </Heading>
            <Heading fontSize={{ base: 'lg', md: '2xl' }}>
              ${formatNumberWithK(project.total_funding_raised)}
            </Heading>
          </HStack>
          <HStack w="full" justify="space-between">
            <Button
              as="a"
              href={project.url}
              target="_blank"
              h="fit-content"
              leftIcon={<BiLink />}
              variant={'unstyled'}
              fontSize={{ base: 'xs', md: 'sm' }}
              color="#FFB5FF"
              fontWeight={'600'}
              display="flex"
              alignItems={'center'}
              justifyContent="start"
              gap="0px"
              iconSpacing={'3px'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              {getDomain(project.url)}
            </Button>
            <Text fontSize={{ base: 'xs', md: 'xs' }} color="#BABABA">
              Funded
            </Text>
          </HStack>
        </VStack>
        <HStack>
          <VStack p="0" alignItems={'start'} pb="3rem">
            <Text
              textAlign={'start'}
              fontSize={{ base: 'xs', md: 'xs' }}
              color="#BABABA"
              sx={{
                noOfLines: '2',
              }}
            >
              {project.about}
            </Text>
            <Wrap>
              {project.tags.map(
                (tag: string, key: React.Key | null | undefined) => {
                  return (
                    <CustomTag color={tag} key={key}>
                      {tag}
                    </CustomTag>
                  );
                }
              )}
            </Wrap>
          </VStack>
        </HStack>
      </VStack>
      <HStack spacing="4px">
        <AvatarGroup size="xs" max={3} variant="contributorsGroup">
          <Avatar
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
            bg="black"
          />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
        <Text fontSize={{ base: 'xs', md: 'xs' }} color="#BABABA">
          <b>2.5k</b> contributors
        </Text>
      </HStack>
    </VStack>
  );
};
const ProjectList = () => {
  return (
    <Container maxW="7xl" overflow={'visible'} p="0">
      <Wrap
        // border="1px solid"
        // borderColor={{
        //   base: 'red',
        //   sm: 'green',
        //   md: 'blue',
        //   lg: 'pink',
        //   xl: 'orange',
        // }}
        spacing="1rem"
        w="100%"
        padding="2rem 0px"
        margin="0"
        justify={'center'}
        align="center"
        direction={{ base: 'column', sm: 'row', md: 'row' }}
      >
        {ProjectsData.map((project, key) => {
          //@ts-ignore
          return <ProjectCard project={project} key={key} />;
        })}
      </Wrap>
    </Container>
  );
};

export default ProjectList;
