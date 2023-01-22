import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountCreationStep } from 'src/lib/enums/AccountCreation.enum';
import { useUserStore } from 'src/store/userStore';

const useSetupAccount = () => {
  const { publicKey } = useWallet();
  const { user, civic, setWallet } = useUserStore();
  const router = useRouter();

  const [createAccountScreen, setCreateAccountScreen] =
    useState<AccountCreationStep>(AccountCreationStep.WELCOME);

  useEffect(() => {
    if (publicKey) {
      console.log('civic verification - ', civic);
      if (publicKey?.toBase58() && !civic?.verified && !user?._id) {
        setWallet({ publicKey: publicKey.toBase58(), connected: true });
        setCreateAccountScreen(AccountCreationStep.CIVIC);
      } else if (user?.wallet?.connected && civic?.verified && !user?._id) {
        console.log('here inside civic - ', civic.verified);
        setCreateAccountScreen(AccountCreationStep.PROFILE_DETAILS);
      } else if (user?.wallet?.connected && civic?.verified && user?._id) {
        console.log('returning account success');
      }
    }
  }, [
    publicKey,
    router,
    setWallet,
    user?._id,
    civic?.verified,
    user?.wallet?.connected,
    user?.wallet?.publicKey,
    civic,
  ]);

  const ActiveScreen = <div />;
  return { createAccountScreen, ActiveScreen };
};

export default useSetupAccount;
