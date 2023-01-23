import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import UserContributions from './Tabs/UserContributions';
import UserData from './Tabs/UserData';
import UserProjects from './Tabs/UserProjects';

const ProfileTabs = () => {
  return (
    <Container maxW="full" p="0">
      <Tabs p="4rem 0rem" variant={'cubik'}>
        <TabList gap={{ base: '0.5rem', md: '1rem' }}>
          <Tab fontSize={{ base: 'sm', md: 'md' }}>Details</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}>Projects</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}>Contributions</Tab>
          <Tab fontSize={{ base: 'sm', md: 'md' }}>NFTs</Tab>
        </TabList>

        <TabPanels p={{ base: '1rem', md: '0rem' }}>
          <TabPanel>
            <UserData />
          </TabPanel>
          <TabPanel>
            <UserProjects />
          </TabPanel>
          <TabPanel>
            <UserContributions />
          </TabPanel>
          <TabPanel>User NFTs</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default ProfileTabs;
