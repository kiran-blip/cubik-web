import {
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import WalletAdd from 'src/components/Wallet/WalletAdd';
import { createUser } from 'src/lib/api/userProfile';
import { useUserStore } from 'src/store/userStore';

const CreateProfile = () => {
  const { publicKey } = useWallet();
  const [loading, setLoading] = useState<boolean>(false);
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: user?.userName,
      publickey: publicKey?.toBase58(),
      about: user?.id,
      icon: publicKey?.toBase58(),
    },
  });

  function onSubmit(values: any) {
    setLoading(true);
    return new Promise<void>((resolve) => {
      //sign transaction here
      createUser({
        icon: publicKey?.toBase58() as string,
        username: values.username,
        publickey: publicKey?.toBase58() as string,
        verified: false,
        bio: values.about,
      }).then((res) => {
        if (res.data.data) {
          console.log('create user response, ', res.data);
          setUser({
            id: res.data.data.id,
            bio: res.data.bio,
            userName: res.data.username,
          });
          console.log('user updated');
          // update user
          router.push(`/signup/success?id=${res.data.data.id}`);
        } else {
          console.log('user already exist'); // throw some error
        }
      });
      setLoading(false);
      resolve();
    }).catch((e) => {
      setLoading(false);
    });
  }
  return (
    <Container p="1rem 0rem" maxW="26rem">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          pb="1rem"
          variant={'outline'}
          colorScheme={'pink'}
          isRequired
        >
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="username">
            First Name
          </FormLabel>
          <Input
            id="username"
            {...register('username', {
              required: 'This is required',
              minLength: {
                value: 6,
                message: 'Minimum length should be 6',
              },
            })}
          />
          <FormErrorMessage>
            {errors.username ? <>{errors.username.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        {/* ---- wallet ---- */}
        <FormControl pb="1rem" isRequired>
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="publickey">
            Wallet Address
          </FormLabel>
          <HStack gap="0.5rem">
            {/* <Input
                  isDisabled
                  id='publickey'
                  {...register('publickey', {
                    required: 'This is required',
                    minLength: {
                      value: 14,
                      message: 'Minimum length should be 6',
                    },
                  })}
                /> */}
            <Center
              rounded="4px"
              bg="#242424"
              height="2.5rem"
              px="1.3rem"
              outline="1px solid #242424"
              w="full"
            >
              <WalletAdd size="sm" />
            </Center>
          </HStack>
          <FormErrorMessage>
            {errors.publickey ? <>{errors.publickey.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        {/* ---- about the user ---- */}
        <FormControl pb="1rem">
          <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor="about">
            About
          </FormLabel>
          <Textarea
            background="#141414"
            boxShadow="none"
            border="1px solid"
            borderColor={' #242424'}
            outline="none"
            _focus={{
              background: '#141414',
              boxShadow: '0 0 0 1px #F290F2',
            }}
            _hover={{
              background: '#141414',
              boxShadow: '0 0 0 1px #F290F2',
            }}
            id="about"
            {...register('about')}
          />
          <FormErrorMessage>
            {errors.about ? <>{errors.about.message}</> : <></>}
          </FormErrorMessage>
        </FormControl>
        {/* ---- profile picture  ---- */}
        {/* <FormControl>
              <FormLabel fontSize={{ base: 'xs', md: 'sm' }} htmlFor='icon'>
                Profile Picture
              </FormLabel>
              <HStack gap='0.5rem'>
                <Center rounded='4px' outline='2px solid #242424' w='6rem' h='6 rem'>
                  <Avatar
                    square={true}
                    size={80}
                    name={publicKey?.toBase58()}
                    variant='marble'
                    colors={['#92A1C6', '#F0AB3D', '#C271B4', '#C20D90']}
                  />
                </Center>
                <Input
                  id='publickey'
                  {...register('publickey', {
                    required: 'This is required',
                    minLength: {
                      value: 14,
                      message: 'Minimum length should be 6',
                    },
                  })}
                  {...register('icon')}
                />
                <Button
                  py='0.9rem'
                  w='12rem'
                  fontSize={'md'}
                  mt={'3rem'}
                  color='#F290F2'
                  backgroundColor={'#261526'}
                  _hover={{
                    backgroundColor: '#402740',
                  }}
                >
                  Random
                </Button>
              </HStack>
              <FormErrorMessage>
                {errors.icon ? <>{errors.icon.message}</> : <></>}
              </FormErrorMessage>
            </FormControl> */}
        <Button
          py="1.1rem"
          fontSize={'md'}
          mt={'3rem'}
          w="full"
          isLoading={loading}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateProfile;
