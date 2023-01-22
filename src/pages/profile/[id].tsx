import { Container, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import UserProfile from 'src/components/User/Profile/UserProfile';
import { getUserByid } from 'src/lib/api/authHelper';
const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      if (router.query.id) {
        const data = await getUserByid(router.query.id as string);

        console.log(data, 'data');
      }
    };
    fetchUser();
  }, [router.query.id]);
  return (
    <Container maxW="7xl" p={{ base: '1rem', md: '1rem 6rem' }}>
      <Heading
        fontWeight={{ base: '500', md: '600' }}
        fontSize={{ base: '2xl', md: '4xl' }}
      >
        Profile
      </Heading>
      <UserProfile />
    </Container>
  );
};

export default Profile;
