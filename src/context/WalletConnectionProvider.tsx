import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import {
  BackpackWalletAdapter,
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import React, { FC, useMemo } from 'react';

type Props = {
  children?: React.ReactNode;
};
const WalletConnectionProvider: FC<Props> = ({ children }: any) => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = process.env.NEXT_PUBLIC_RPC_URL;
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new CoinbaseWalletAdapter(),
      new GlowWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint as string}>
      <WalletProvider wallets={wallets} autoConnect={false}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
