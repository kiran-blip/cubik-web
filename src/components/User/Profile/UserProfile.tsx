import {
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { userType } from 'interfaces/user';
import WalletAdd from 'src/components/Wallet/WalletAdd';
import ProfileTabs from './ProfileTabs';
interface Props {
  user: userType;
}
const UserDetailsCard = ({ user }: Props) => {
  // const { user } = useUser();
  return (
    <VStack
      rounded="4px"
      alignItems={'start'}
      maxW="32rem"
      w="full"
      h="full"
      bg="#0F0F0F"
      p={{ base: '1.2rem', md: '1.6rem' }}
      color="#BFBFBF"
      gap={{ base: '0.5rem', md: '1rem' }}
      border={'0.5px solid #222222'}
    >
      <HStack
        align={'center'}
        justify="start"
        gap={{ base: '0.4rem', md: '1rem' }}
      >
        <Center
          rounded={'full'}
          transform={{ base: 'scale(0.9)', md: 'scale(1)' }}
        >
          <Avatar
            size={68}
            name={user?.pub_key as string}
            variant="pixel"
            colors={['#92A1C6', '#F0AB3D', '#C271B4', '#C20D90']}
          />
        </Center>
        <VStack
          alignItems={'start'}
          gap={{ base: '', md: '0.1rem' }}
          spacing="0rem"
        >
          <HStack>
            <Text fontWeight="600" fontSize={{ base: '2xl', md: '3xl' }}>
              {user?.userName}
            </Text>
            {/* -- verified symbol --¯¯ */}
          </HStack>
          <WalletAdd size="sm" copy={true} />
        </VStack>
      </HStack>
      <Text
        //maxW="30rem"
        pb="0.5rem"
        px={'0.2rem'}
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        {user?.bio}
      </Text>
    </VStack>
  );
};
const UserProjectsCard = ({ user }: Props) => {
  return (
    <VStack
      rounded="4px"
      alignItems={'start'}
      maxW="22rem"
      w="full"
      h="100%"
      bg="#0F0F0F"
      p={{ base: '1.2rem', md: '1.6rem' }}
      color="#BFBFBF"
      gap={{ base: '0.5rem', md: '1rem' }}
      border={'0.5px solid #222222'}
    >
      <HStack align={'center'} justify="start">
        <Heading fontWeight="600" fontSize={{ base: '2xl', md: '3xl' }}>
          Verify
        </Heading>
        <Center
          color="#BFFF36"
          bg="#192615"
          rounded="full"
          fontSize={{ base: 'xs', md: 'xs' }}
          p={{ base: '0.2rem 0.6rem', md: '0.3rem 0.9rem' }}
        >
          Not Verified
        </Center>
      </HStack>
      <Wrap></Wrap>
    </VStack>
  );
};
const UserProfile = ({ user }: Props) => {
  return (
    <Container maxW="full" p="0" my="2rem">
      {/* ---- user details card */}
      <Stack direction={{ base: 'column', md: 'row' }} gap="1rem">
        <UserDetailsCard user={user} />
        <UserProjectsCard user={user} />
      </Stack>
      <ProfileTabs />
    </Container>
  );
};

export default UserProfile;
