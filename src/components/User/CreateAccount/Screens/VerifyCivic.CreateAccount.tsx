import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from 'react';
import { TruncatedAddr } from 'src/components/Wallet/WalletAdd';
import { useUserStore } from 'src/store/userStore';

const VerifyCivicAccount = () => {
  const { setCivic } = useUserStore();
  const [civicLoader, setCivicLoader] = useState(false);
  const [civicVerified, setCivicVerified] = useState(false);
  const { requestGatewayToken, gatewayStatus, civicPassSrcUrl } = useGateway();
  const { publicKey } = useWallet();
  useEffect(() => {
    if (publicKey && gatewayStatus !== 0) {
      console.log(gatewayStatus, civicPassSrcUrl);

      if (gatewayStatus === 9) {
        setCivicVerified(true);
        // set global civic verified to true
      } else if (gatewayStatus === 5 || gatewayStatus === 1) {
        setCivicLoader(true);
      }
    }
  }, [gatewayStatus, publicKey]);

  return (
    <Stack
      maxW="5xl"
      p={{ base: '2rem 2rem', md: '3rem 0rem' }}
      direction={{ base: 'column', md: 'row' }}
      mx="auto"
    >
      <VStack alignItems={'start'} textAlign={'start'}>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'xs' }}>
          Step 2 of 5
        </Text>
        <Heading pb="0.5rem" fontSize={{ base: '2xl', md: '3xl' }}>
          Verify Your Identity
        </Heading>
        <Text pb="0.5rem" color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          To ensure the security and integrity of our platform and to comply
          with regulatory requirements, we need you to verify your identity
          through Civic.
        </Text>
        <Text color="#C5C5C5" fontSize={{ base: 'xs', md: 'sm' }}>
          Your wallet address{' '}
          <Text as="span" color="#FF8EFF">{`${TruncatedAddr()}`}</Text> will be
          used to verify your uniqueness using a civic pass.
        </Text>
        <Box w="full" py="1rem">
          <Flex
            zIndex={'1'}
            background={'#222222 !important'}
            align="center"
            w="full"
            maxW="16rem"
            h="40px"
            px="1rem"
            rounded="7px"
            cursor="pointer"
            transition="all 0.15s"
            color="#A6A6A6"
            gap={{ base: '0.1rem', md: '0.5rem' }}
            as="button"
            onClick={() => {
              requestGatewayToken()
                .then(() => {
                  console.log('civic success - ', GatewayStatus[gatewayStatus]);
                })
                .catch(() => {
                  console.log('civic error');
                });
            }}
          >
            <Center rounded="full">
              {civicVerified ? (
                <Player
                  autoplay
                  keepLastFrame
                  speed={1}
                  src={
                    'https://lottie.host/3553bc81-a816-4fa1-983a-2e4e0ea51fc5/PUv9dzO0ER.json'
                  }
                  style={{ height: '24px', width: '24px' }}
                />
              ) : (
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
              )}
            </Center>
            <Text fontSize={{ base: 'sm', md: 'md' }} ml={2} fontWeight={600}>
              {civicVerified ? 'Civic Pass Verified' : 'Verify Civic Pass'}
            </Text>
          </Flex>
        </Box>
        {civicVerified && (
          <Box pt="6rem" w="full">
            <Button
              onClick={() => {
                setCivic(true);
              }}
              w="full"
            >
              Next
            </Button>
          </Box>
        )}
      </VStack>
    </Stack>
  );
};

export { VerifyCivicAccount };
