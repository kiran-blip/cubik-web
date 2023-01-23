import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import SolanaWalletButton from 'src/components/Wallet/SolananWalletButton';
import { getUserByPubKey } from 'src/lib/api/authHelper';
import { useUserStore } from 'src/store/userStore';

const Login = () => {
  const { publicKey } = useWallet();
  const router = useRouter();
  const { setUser, setWallet } = useUserStore();

  useEffect(() => {
    if (publicKey) {
      setWallet({ connected: true, publicKey: publicKey.toBase58() });
      getUserByPubKey(publicKey)
        .then((data) => {
          // const data = res.data;
          console.log('res', data);
          setUser({
            id: data.id,
            bio: data.bio,
            picture: data.picture ?? '',
            userName: data.username,
            verified: data.verified,
          });
          router.push(`/projects`);
        })
        .catch((e) => {
          console.log('error fetching user - ', e);
        });
    }
  }, [publicKey, router, setUser, setWallet]);
  return (
    <Container py={{ base: '2rem', md: '3rem' }} maxW="full" height="200rem">
      <VStack
        maxW={{ base: '15rem', md: '20rem' }}
        mx="auto"
        textAlign={'center'}
        _before={{
          zIndex: '-1',
          content: `" "`,
          position: 'absolute',
          top: `1%`,
          left: `50%`,
          overflow: 'hidden',
          width: '6rem',
          height: '6rem',
          transform: 'translate(-50%, 50%)',
          filter: 'blur(120px)',
          WebkitBackdropFilter: 'blur(0px)',
          WebkitFilter: 'blur(120px)',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>Login</Heading>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          Login to your account and get started with funding your favorite
          projects on Solana.
        </Text>
        <VStack
          w={{ base: '80vw', md: '25rem' }}
          _before={{
            zIndex: '-1',
            content: `" "`,
            position: 'absolute',
            //top: `1%`,
            //left: `50%`,
            overflow: 'hidden',
            width: '6rem',
            height: '6rem',
            transform: 'translate(-4rem, -2rem)',
            filter: 'blur(120px)',
            WebkitBackdropFilter: 'blur(0px)',
            WebkitFilter: 'blur(120px)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
          gap="0.4rem"
          py={{ base: '1.4rem', md: '1.4rem' }}
        >
          <SolanaWalletButton />
        </VStack>
        {/* <VStack w={{ base: '14rem', md: '14rem' }} gap="0.4rem" py="1.4rem">
          <GlareButton name={'Solana'} clickHandler={SolanaLoginClickHandler}>
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 14H13.75L18 9.66667H5.25L1 14ZM5.25 9.66667L1 5.33333H13.75L18 9.66667M13.75 5.33333L18 1H5.25L1 5.33333"
                fill="#A6A6A6"
              />
              <path
                d="M18 9.66667L13.75 14H1L5.25 9.66667M18 9.66667H5.25M18 9.66667L13.75 5.33333M5.25 9.66667L1 5.33333M1 5.33333H13.75M1 5.33333L5.25 1H18L13.75 5.33333"
                stroke="#222222"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </GlareButton>
          <GlareButton name={'Twitter'} clickHandler={TwitterLoginClickHandler}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1.91176C12.5215 2.15882 12.0057 2.32118 11.4713 2.39882C12.0182 2.02471 12.4407 1.43176 12.6396 0.718823C12.1238 1.07176 11.5521 1.31882 10.9493 1.46C10.4584 0.852941 9.76864 0.5 8.98566 0.5C7.52534 0.5 6.33222 1.85529 6.33222 3.52824C6.33222 3.76824 6.35708 4.00118 6.40057 4.22C4.18834 4.09294 2.21845 2.88588 0.907266 1.05765C0.677342 1.50235 0.546845 2.02471 0.546845 2.57529C0.546845 3.62706 1.01291 4.55882 1.73375 5.08824C1.29254 5.08824 0.882409 4.94706 0.521989 4.73529V4.75647C0.521989 6.22471 1.44168 7.45294 2.65966 7.72824C2.26862 7.84979 1.85809 7.86671 1.46033 7.77765C1.62911 8.3794 1.95966 8.90594 2.40551 9.28325C2.85136 9.66055 3.3901 9.86967 3.94598 9.88118C3.00369 10.7285 1.83566 11.1866 0.633843 11.18C0.422562 11.18 0.211281 11.1659 0 11.1376C1.18069 11.9988 2.58509 12.5 4.08891 12.5C8.98566 12.5 11.6764 7.88353 11.6764 3.88118C11.6764 3.74706 11.6764 3.62 11.6702 3.48588C12.1922 3.06235 12.6396 2.52588 13 1.91176Z"
                fill="#A6A6A6"
              />
            </svg>
          </GlareButton>
          <GlareButton name={'Github'} clickHandler={GithubLoginClickHandler}>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C7.88376 0 6.77846 0.225317 5.74719 0.663088C4.71592 1.10086 3.77889 1.74251 2.98959 2.5514C1.39553 4.18504 0.5 6.40072 0.5 8.71103C0.5 12.5613 2.9395 15.8279 6.314 16.9865C6.739 17.0562 6.875 16.7862 6.875 16.551V15.0788C4.5205 15.6015 4.019 13.9115 4.019 13.9115C3.628 12.901 3.0755 12.631 3.0755 12.631C2.302 12.0909 3.135 12.1083 3.135 12.1083C3.985 12.1693 4.4355 13.0056 4.4355 13.0056C5.175 14.3296 6.4245 13.9376 6.909 13.7286C6.9855 13.1624 7.2065 12.7791 7.4445 12.5613C5.5575 12.3435 3.577 11.5944 3.577 8.27548C3.577 7.30855 3.9 6.53327 4.4525 5.91479C4.3675 5.69701 4.07 4.79107 4.5375 3.61508C4.5375 3.61508 5.2515 3.37988 6.875 4.5036C7.5465 4.31196 8.2775 4.21614 9 4.21614C9.7225 4.21614 10.4535 4.31196 11.125 4.5036C12.7485 3.37988 13.4625 3.61508 13.4625 3.61508C13.93 4.79107 13.6325 5.69701 13.5475 5.91479C14.1 6.53327 14.423 7.30855 14.423 8.27548C14.423 11.6031 12.434 12.3348 10.5385 12.5526C10.8445 12.8226 11.125 13.354 11.125 14.1641V16.551C11.125 16.7862 11.261 17.0649 11.6945 16.9865C15.069 15.8192 17.5 12.5613 17.5 8.71103C17.5 7.56708 17.2801 6.43433 16.853 5.37746C16.4258 4.32059 15.7997 3.3603 15.0104 2.5514C14.2211 1.74251 13.2841 1.10086 12.2528 0.663088C11.2215 0.225317 10.1162 0 9 0Z"
                fill="#A6A6A6"
              />
            </svg>
          </GlareButton>
          <GlareButton name={'Civic id'} clickHandler={CivicLoginClickHandler}>
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.962 0.0270997C9.45563 0.0560552 9.94393 0.112823 10.3172 0.227148C11.0708 0.457981 11.9723 0.867066 12.6971 1.50262C13.4327 2.14772 14 3.04208 14 4.19963H12.6233C12.6233 3.46006 12.2728 2.87897 11.7465 2.41748C11.2094 1.94645 10.5048 1.6178 9.88172 1.42694C9.68344 1.36621 9.34105 1.31664 8.87428 1.28926C8.42112 1.26268 7.89778 1.25929 7.3648 1.27149C6.29582 1.29595 5.23218 1.38194 4.68995 1.45305C4.31994 1.50157 3.45682 1.85792 2.69244 2.68963C1.95249 3.49474 1.32428 4.72891 1.38014 6.49998C1.43817 8.33974 1.9281 9.56914 2.57563 10.3487C3.21582 11.1195 4.04435 11.494 4.89816 11.5811C5.90582 11.6839 6.95121 11.7353 7.86234 11.7353C8.7882 11.7353 9.52683 11.682 9.94466 11.5934C10.4583 11.4845 11.1442 11.0996 11.7086 10.5194C12.2699 9.9424 12.6233 9.26322 12.6233 8.62618H14C14 9.67549 13.4356 10.6421 12.735 11.3622C12.0375 12.0792 11.1172 12.6428 10.2542 12.8257C9.67779 12.9479 8.81028 13 7.86232 13C6.89963 13 5.80351 12.946 4.74618 12.8381C3.53499 12.7145 2.35935 12.1732 1.48118 11.1159C0.610359 10.0675 0.0677488 8.55665 0.00403816 6.53661C-0.061838 4.44792 0.686598 2.91168 1.64055 1.87372C2.57006 0.862344 3.71811 0.302945 4.4954 0.20101C5.10047 0.121661 6.2187 0.0325961 7.33052 0.00715289C7.88795 -0.00560343 8.45474 -0.00265508 8.962 0.0270997Z"
                fill="#A6A6A6"
              />
              <path
                d="M8.26389 6.40719C8.54554 6.17561 8.72278 5.83907 8.72278 5.4645C8.72278 4.76601 8.10642 4.19977 7.3461 4.19977C6.58578 4.19977 5.96942 4.76601 5.96942 5.4645C5.96942 5.93262 6.24627 6.34135 6.65776 6.56003V9.25868H8.26389V6.40719Z"
                fill="#A6A6A6"
              />
            </svg>
          </GlareButton>
        </VStack> */}
      </VStack>
    </Container>
  );
};

export default Login;
