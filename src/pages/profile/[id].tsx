import { Container, Heading } from '@chakra-ui/react';
import { userType } from 'interfaces/user';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserProfile from 'src/components/User/Profile/UserProfile';
import { getUserByid } from 'src/lib/api/authHelper';
const Profile = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<userType | null>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchUser = async () => {
      if (router.query.id) {
        setLoading(true);
        const data = await getUserByid(router.query.id as string);
        setUserProfile({
          id: data.data.id,
          name: data.data.name ?? '',
          bio: data.data.bio,
          contributions: data.data.Contribution ?? [],
          picture: data.data.picture ?? '',
          userName: data.data.username,
          pub_key: data.data.publickey,
          verified: data.data.verified,
          projects: data.data.Projects ?? [],
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
      <UserProfile loading={loading} user={userProfile as userType} />
    </Container>
  );
};

export default Profile;
