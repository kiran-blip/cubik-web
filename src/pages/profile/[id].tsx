import { Container, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserProfile from 'src/components/User/Profile/UserProfile';
import { getUserByid } from 'src/lib/api/authHelper';
import { useUserStore } from 'src/store/userStore';
const Profile = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { setUser } = useUserStore();
  useEffect(() => {
    const fetchUser = async () => {
      if (router.query.id) {
        setLoading(true);
        const data = await getUserByid(router.query.id as string);
        console.log('data - ', data);
        // setUserProfile({
        //   id: data.data.id,
        //   name: data.data.name ?? '',
        //   bio: data.data.bio,
        //   contributions: data.Contribution ?? [],
        //   picture: data.data.picture ?? '',
        //   userName: data.data.username,
        //   pub_key: data.data.publickey,
        //   verified: data.data.verified,
        //   projects: data.data.Projects ?? [],
        // });
        setUser({
          id: data.data.id,
          bio: data.data.bio,
          picture: data.data.picture ?? '',
          userName: data.data.username,
          pub_key: data.data.publickey,
          verified: data.data.verified,
        });
        setLoading(false);
      }
    };
    fetchUser();
  }, [router.query.id]);
  return (
    <Container maxW="7xl" p={{ base: '1rem', md: '1rem 6rem' }}>
      <Heading
        fontWeight={{ base: '500', md: '600' }}
        fontSize={{ base: 'xl', md: '2xl' }}
      >
        Profile
      </Heading>
      <UserProfile loading={loading} />
    </Container>
  );
};

export default Profile;
