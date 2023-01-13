import { ChakraProvider } from '@chakra-ui/react';
import { GatewayProvider } from '@civic/solana-gateway-react';
import { useWallet } from '@solana/wallet-adapter-react';
import * as web3 from '@solana/web3.js';
import theme from 'config/chakra.config';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import HomeLayout from 'src/components/Layouts/HomeLayout';
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnectionProvider: any = dynamic(
  () => import('../context/WalletConnectionProvider'),
  {
    ssr: false,
  }
);
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'));
  const wallet = useWallet();

  const gatekeeperNetworkKey = new web3.PublicKey(
    process.env.NEXT_PUBLIC_GATEKEEPER_NETWORK_KEY as string
  );

  return (
    <WalletConnectionProvider>
      <GatewayProvider
        connection={connection}
        wallet={wallet}
        cluster="mainnet-beta"
        gatekeeperNetwork={gatekeeperNetworkKey}
      >
        <ChakraProvider theme={theme}>
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        </ChakraProvider>
      </GatewayProvider>
    </WalletConnectionProvider>
  );
}
