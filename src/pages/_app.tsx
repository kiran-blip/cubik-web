import { ChakraProvider } from '@chakra-ui/react';
import { GatewayProvider } from '@civic/solana-gateway-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import theme from 'config/chakra.config';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import HomeLayout from 'src/components/Layouts/HomeLayout';
import DispatchApp from 'src/context/dispatchContext';
require('@solana/wallet-adapter-react-ui/styles.css');
require('@usedispatch/forum/dist/style.css');

const GATEKEEPER_NETWORK = 'uniqobk8oGh4XBLMqM68K8M2zNu3CdYX7q5go7whQiv';
const CLUSTER = WalletAdapterNetwork.Devnet;
const Gateway: FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  return (
    <GatewayProvider
      connection={connection}
      wallet={wallet}
      cluster={CLUSTER}
      gatekeeperNetwork={new PublicKey(GATEKEEPER_NETWORK)}
      options={{ autoShowModal: false }}
    >
      {children}
    </GatewayProvider>
  );
};

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
  const baseURL = 'http://localhost:3000';
  const forumURL = '/project';
  const topicURL = '/project';
  return (
    <WalletConnectionProvider>
      <ChakraProvider theme={theme}>
        <Gateway>
          <DispatchApp
            cluster="devnet"
            baseURL={baseURL}
            forumURL={forumURL}
            topicURL={topicURL}
          >
            <HomeLayout>
              <Component {...pageProps} />
            </HomeLayout>
          </DispatchApp>
        </Gateway>
      </ChakraProvider>
    </WalletConnectionProvider>
  );
}
