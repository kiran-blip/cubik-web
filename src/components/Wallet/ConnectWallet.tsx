import { Center, Flex, Text } from '@chakra-ui/react';
import {
  useWallet,
  Wallet as SolanaWallet,
} from '@solana/wallet-adapter-react';
import Image from 'next/image';

export const ConnectWallet = () => {
  const { wallets, select, publicKey, connecting } = useWallet();

  const onConnectWallet = async (wallet: SolanaWallet) => {
    try {
      const s = await wallet.adapter.connect();
      console.log('con', s, publicKey?.toBase58());

      select(wallet.adapter.name);
    } catch (e) {
      console.log('error');
    }
  };

  return (
    <>
      {wallets.map((wallet, index) => {
        return (
          <Flex
            zIndex={'1'}
            key={index}
            background={'#222222 !important'}
            align="center"
            w="full"
            h="40px"
            px="1rem"
            rounded="7px"
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
                {/* add spinner when wallet is connecting */}
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
