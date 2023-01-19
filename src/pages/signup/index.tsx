import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import {
  ConnectSocialAccounts,
  ProfileDetailsData,
  VerifyCivicAccount,
  WelcomeToCreateAccount,
} from 'src/components/User/CreateAccount';
import useSetupAccount from 'src/components/User/CreateAccount/Hooks/SetupAccountHook';
import CreateAccountLayout from 'src/components/User/CreateAccount/Layout';
import { AccountCreationStep } from 'src/lib/enums/AccountCreation.enum';

const ActiveMainScreen = () => {
  const { createAccountScreen } = useSetupAccount();
  const router = useRouter();
  switch (createAccountScreen) {
    case AccountCreationStep.CIVIC:
      return <VerifyCivicAccount />;
    case AccountCreationStep.PROFILE_DETAILS:
      return <ProfileDetailsData />;
    case AccountCreationStep.SOCIALS:
      return <ConnectSocialAccounts />;
    case AccountCreationStep.ACCOUNT_FEE:
      return <div></div>;
    case AccountCreationStep.ACCOUNT_SUCCESS:
      router.push('/signup/success');
      return <div />;
    default:
      return <WelcomeToCreateAccount />; // default return welcome
  }
};

const SignUp = () => {
  useEffect(() => {
    // use if else and check if that step is ready to be shown else return error
  }, []);

  return (
    <CreateAccountLayout>
      <ActiveMainScreen />
      <div />
    </CreateAccountLayout>
  );
};

export default SignUp;
