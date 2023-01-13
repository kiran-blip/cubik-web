/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Text,
  Grid,
  Flex,
  Center,
  Spinner,
  useToast,
  HStack,
} from '@chakra-ui/react';
import {
  useWallet,
  Wallet as SolanaWallet,
} from '@solana/wallet-adapter-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useUserStore } from 'src/store/userStore';

export const ConnectWallet = () => {
  const { wallets, select, connected, publicKey } = useWallet();
  const { user } = useUserStore();
  const router = useRouter();

  const onConnectWallet = (wallet: SolanaWallet) => {
    console.log('wallet button clicked');
    // we will not update the user store ( for wallet ) from here it will be done in the layout
    wallet.adapter
      .connect()
      .then(() => {
        console.log('clicked Wallet - ', wallet.adapter.name);
        select(wallet.adapter.name);
        // make a request to the backend fetch the user if the user is not there create a account and redirect to create account page
      })
      .catch((e) =>
        console.log(
          'there was an error while connecting to wallet - ',
          (e as Error).message
        )
      );
  };

  useEffect(() => {
    if (user?.wallet?.connected) {
      router.push('/');
    }
  }, [router, user?.wallet?.connected]);

  return (
    <>
      {wallets.map((wallet: SolanaWallet, index) => {
        return (
          <Flex
            zIndex={'1'}
            key={index}
            background={'#323131 !important'}
            align="center"
            w="12rem"
            h="40px"
            px="1rem"
            rounded="6px"
            cursor="pointer"
            transition="all 0.15s"
            color="#A6A6A6"
            _hover={{
              bg: 'gray.100',
              transition: 'all 0.3s',
              transform: 'translateY(-1px) scale(1.01)',
              shadow: 'xl',
              filter: 'none',
              WebkitFilter: 'none',
              color: '#E4E4E4',
            }}
            // sx={{
            //   filter: ' gray',
            //   WebkitFilter: 'grayscale(1)',
            // }}
            onClick={onConnectWallet.bind(null, wallet)}
          >
            <Flex gap={{ base: '0.1rem', md: '0.5rem' }} align="center">
              <Center rounded="full">
                <Image
                  width={20}
                  height={20}
                  src={
                    wallet.adapter.name === 'Ledger'
                      ? wallet.adapter.icon
                      : wallet.adapter.icon
                  }
                  alt={`${wallet.adapter.name} Icon`}
                />
              </Center>
              <Text fontSize={{ base: 'xs', md: 'sm' }} ml={2} fontWeight={600}>
                {wallet.adapter.name}
              </Text>
            </Flex>
          </Flex>
        );
      })}
    </>
  );
};
