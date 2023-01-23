import { Container, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ProjectsAboutAndDonation } from 'src/components/Projects/ProjectsDetail/ProjectComponents/ProjectAboutAndDonation';
import { ProjectDetailLayout } from 'src/components/Projects/ProjectsDetail/ProjectDetailsLayout';
import data from '../../data/projects.json';

const ProjectDetails = () => {
  const { query, pathname } = useRouter();
  console.log('project name - ', query.projectId);
  const project = data.filter((project, index) => {
    return project.name === query.projectId;
  });
  console.log(project[0].detailed_description);

  return (
    <Container maxW="6xl" py={{ base: '1rem', md: '2rem' }}>
      <VStack gap="2rem">
        {/* @ts-ignore */}
        <ProjectsAboutAndDonation projectDetails={project[0]} />
        {/* @ts-ignore */}
        <ProjectDetailLayout projectDetails={project[0]} />
      </VStack>
    </Container>
  );
};

export default ProjectDetails;
