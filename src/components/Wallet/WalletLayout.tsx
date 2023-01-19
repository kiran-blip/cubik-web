import { useToast } from '@chakra-ui/react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  useWalletModal,
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import {
  BackpackWalletAdapter,
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useRouter } from 'next/router';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { SuccessToast } from '../Toasts/Toasts';

require('@solana/wallet-adapter-react-ui/styles.css');

type Props = {
  children?: React.ReactNode;
};
export const WalletConnectionProvider: FC<Props> = ({ children }: Props) => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new BackpackWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),

      // new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export const ConnectWallet = ({
  children,
  noFullSize,
  redirectToWelcome,
  noToast,
}: {
  children: React.ReactNode;
  noFullSize?: boolean;
  redirectToWelcome?: boolean;
  noToast?: boolean;
}) => {
  const { wallet, connect, publicKey } = useWallet();
  const { visible, setVisible } = useWalletModal();
  const [clicked, setClicked] = useState(false);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const req =
      !publicKey && wallet && wallet.readyState === 'Installed' && clicked;
    if (req) {
      try {
        connect();
      } catch (e) {
        console.error(e);
      }
      return;
    }
    if (publicKey) {
      console.log(`User Public Key: ${publicKey}`);
      if (!noToast) SuccessToast({ toast: toast, message: 'Wallet connected' });
      if (redirectToWelcome) router.push(`/welcome/${publicKey}`);
    }
  }, [
    wallet,
    visible,
    publicKey,
    redirectToWelcome,
    clicked,
    connect,
    noToast,
    router,
    toast,
  ]);

  const handleConnect = () => {
    if (wallet) return;
    setVisible(true);
  };

  return (
    <div
      style={{
        border: '1px solid red',
        width: noFullSize ? 'max-content' : '100%',
        height: noFullSize ? 'max-content' : '100%',
      }}
      onClick={() => {
        setClicked(true);
        handleConnect();
      }}
    >
      {children}
    </div>
  );
};
