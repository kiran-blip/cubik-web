import { CivicProfile } from '@civic/profile';
import { GatewayStatus, useGateway } from '@civic/solana-gateway-react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AccountCreationStep } from 'src/lib/enums/AccountCreation.enum';
import { useUserStore } from 'src/store/userStore';

const useSetupAccount = () => {
  const { publicKey } = useWallet();
  const { user, setWallet } = useUserStore();
  const { gatewayStatus } = useGateway();
  const router = useRouter();

  const [createAccountScreen, setCreateAccountScreen] =
    useState<AccountCreationStep>(AccountCreationStep.WELCOME);

  let civicId = GatewayStatus[gatewayStatus];

  useEffect(() => {
    console.log(
      'useSetupAccount Hook - publicKey, civicId, user?._id',
      publicKey?.toBase58(),
      civicId === 'ACTIVE',
      user?._id
    );
    if (publicKey?.toBase58() && civicId !== 'ACTIVE' && !user?._id) {
      setWallet({ publicKey: publicKey.toBase58(), connected: true });
      setCreateAccountScreen(AccountCreationStep.CIVIC);
    } else if (user?.wallet?.connected && civicId === 'ACTIVE' && !user?._id) {
      CivicProfile.get(user?.wallet?.publicKey)
        .then((res) => {
          console.log(
            'res from profile -',
            res,
            res.name?.value,
            res.image?.url,
            res.headline?.value
          );
          setCreateAccountScreen(AccountCreationStep.PROFILE_DETAILS);
        })
        .catch((e) => {
          console.log('error while fetching civic profile - ', e);
        });
    } else if (user?.wallet?.connected && civicId === 'ACTIVE' && user?._id) {
      console.log('returning account success');
      router.push('/signup/success');
      // setCreateAccountScreen(AccountCreationStep.ACCOUNT_SUCCESS);
    }
  }, [
    civicId,
    publicKey,
    router,
    setWallet,
    user?._id,
    user?.wallet?.connected,
    user?.wallet?.publicKey,
  ]);

  const ActiveScreen = <div />;
  return { createAccountScreen, ActiveScreen };
};

export default useSetupAccount;
