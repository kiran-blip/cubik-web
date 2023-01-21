import { ChildInterface } from '@/interfaces/children';
import { Container, useToast } from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import MainBackground from 'src/components/Background/MainBackground';
import { AuthHeader, Header } from 'src/components/Navigation/Header';
import { useUserStore } from 'src/store/userStore';
import { SuccessToast } from '../Toasts/Toasts';

const HomeLayout = ({ children }: ChildInterface) => {
  const { setUser, user } = useUserStore();
  const { connecting, disconnecting, connected, publicKey } = useWallet();
  const toast = useToast();
  const router = useRouter();

  // this effect is a higer level of use effect which will be called everytime for connecting wallet
  // useEffect(() => {
  //   if (publicKey) {
  //     setUser({
  //       _id: undefined,
  //       wallet: {
  //         publicKey: publicKey.toBase58(),
  //         connected: true,
  //       },
  //       username: undefined,
  //     });
  //     SuccessToast({
  //       toast,
  //       message: 'Wallet Connected Succesfully',
  //     });
  //     // make a request to the server and fetch user details if he exists or not
  //     console.log(
  //       '1 - Signedup/LogedIn and pubkey is there | Lets send request'
  //     );
  //     getUserByPubKey(publicKey)
  //       .then((res) => {
  //         console.log('2 - Got this response from the server - ', res);
  //         // if res.data is empty create new user by redirecting into new page
  //         // redirect to profile/create
  //         router.push('/profile/create');
  //         // if it is not empty then update the state and redirect to profile page
  //       })
  //       .catch((e) => console.log('error here in use effect', e));
  //   } else {
  //     console.log('wallet not connected');
  //     setUser({
  //       _id: undefined,
  //       wallet: undefined,
  //       username: undefined,
  //     });
  //   }
  // }, [connected]);

  useEffect(() => {
    if (disconnecting) {
      console.log('disconnecting...................');
      setUser({
        _id: undefined,
        wallet: undefined,
        username: undefined,
      });
      SuccessToast({
        toast,
        message: 'Wallet Disconnected',
      });
    }
  }, [disconnecting]);

  return (
    <Container p="0" maxW={'full'}>
      <MainBackground />
      <Container p="0" position={'absolute'} maxW={'full'} zIndex="999">
        {user?._id ? (
          <AuthHeader />
        ) : (
          <Header>
            <WalletMultiButton />
          </Header>
        )}
        <Container maxW="full" p="0" mt={{ base: '4.5rem', md: '5.5rem' }}>
          {children}
        </Container>
      </Container>
    </Container>
  );
};

export default HomeLayout;
