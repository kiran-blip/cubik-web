import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  HStack,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Cross as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Logo from '../assets/logo/Logo';
import DeskNavMenu from './DeskNavMenu';

export function Header({ children }: { children: ReactNode }) {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const router = useRouter();
  const { publicKey } = useWallet();
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Container
      zIndex="9"
      maxW={'full'}
      position="fixed"
      p="0"
      bg="transparent"
      sx={{
        backdropFilter: 'blur(10px)',
        margin: '0px !important',
        marginTop: '0px !important',
      }}
    >
      <Flex
        mx="auto"
        maxW="7xl"
        alignItems={'center'}
        justifyContent={'space-between'}
        py={{ base: '0.6rem', md: '1.5rem' }}
        px="1.5rem"
      >
        <Box as="button" fontSize={'5xl'} onClick={() => router.push('/')}>
          <Logo />
        </Box>

        {isSmallerThan800 ? (
          <Hamburger
            toggled={isOpen}
            toggle={onToggle}
            size={25}
            duration={0.4}
            color="white"
            hideOutline
            rounded
          />
        ) : (
          <>
            {!(router.pathname === '/signup') && (
              <HStack pl="5rem" gap="1rem">
                <Link href="/projects" passHref>
                  <Text fontSize="sm" fontWeight={'600'} cursor={'pointer'}>
                    Projects
                  </Text>
                </Link>
                <Center>
                  {/*  <Box width='4px' height='4px' bg='white' rounded='full' />*/}
                </Center>
                <Link href="/rounds" passHref>
                  <Text fontSize="sm" fontWeight={'600'} cursor={'pointer'}>
                    Funding Rounds
                  </Text>
                </Link>
              </HStack>
            )}
            <HStack gap="0.5rem">
              {!(
                router.pathname === '/login' || router.pathname === '/signup'
              ) && (
                <Button
                  onClick={() => router.push('/login')}
                  variant={'outline'}
                >
                  Login
                </Button>
              )}
              {!(router.pathname === '/signup') ? (
                <Button onClick={() => router.push('/signup')}>Sign Up</Button>
              ) : (
                <HStack>
                  <Text color={'#7A7A7A'} fontSize="sm">
                    Already have an account?
                  </Text>
                  <Button
                    onClick={() => router.push('/login')}
                    rightIcon={
                      <MdKeyboardArrowRight
                        size={18}
                        style={{ transform: 'translateY(4px)' }}
                      />
                    }
                    px="0.5rem"
                    iconSpacing={'0.2rem'}
                    variant={'unstyled'}
                    height="fit-content"
                    lineHeight={'20px'}
                  >
                    Login
                  </Button>
                </HStack>
              )}
            </HStack>{' '}
          </>
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          flexDirection="column"
          alignItems="start"
          fontSize="18px"
          p="1rem 2.5rem 2rem 2.5rem"
          gap="1.4rem"
        >
          <Button
            onClick={() => {
              router.push('/login');
              onToggle();
            }}
            w="full"
            variant={'outline'}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              router.push('/signup');
              onToggle();
            }}
            w="full"
          >
            {' '}
            Sign Up{' '}
          </Button>
          <Link href="/projects" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              // pb='1rem'
              // borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onToggle()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Projects
              </Box>
            </Flex>
          </Link>
          <Link href="/rounds" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              //pb='1rem'
              //   borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Funding Round
              </Box>
            </Flex>
          </Link>
        </Flex>
      </Collapse>
    </Container>
  );
}

export function AuthHeader() {
  const [isSmallerThan800] = useMediaQuery('(max-width: 800px)');
  const { isOpen, onToggle, onClose } = useDisclosure();
  const router = useRouter();
  const { disconnect, publicKey } = useWallet();
  const pubKey = publicKey?.toBase58();

  if (!pubKey) return <></>;
  const addr = pubKey;
  // console.log('pubkey');
  let first = addr.slice(0, 4);
  let last = addr.slice(addr.length - 4, addr.length);
  let truncatedAddr = first + '...' + last;

  return (
    <Container
      zIndex="9"
      maxW={'full'}
      position="fixed"
      p="0"
      bg="transparent"
      sx={{
        backdropFilter: 'blur(10px)',
        margin: '0px !important',
        marginTop: '0px !important',
      }}
    >
      <Flex
        mx="auto"
        maxW="7xl"
        alignItems={'center'}
        justifyContent={'space-between'}
        py={{ base: '0.6rem', md: '1.5rem' }}
        px="1.5rem"
      >
        <Box as="button" fontSize={'5xl'} onClick={() => router.push('/')}>
          <Logo />
        </Box>

        {isSmallerThan800 ? (
          <Hamburger
            toggled={isOpen}
            toggle={onToggle}
            size={25}
            duration={0.4}
            color="white"
            hideOutline
            rounded
          />
        ) : publicKey ? (
          !(router.pathname === '/signup') && (
            <HStack gap="1rem">
              <Link href="/projects" passHref>
                <Text fontSize="sm" fontWeight={'600'} cursor={'pointer'}>
                  Projects
                </Text>
              </Link>
              <Center>
                {/*  <Box width='4px' height='4px' bg='white' rounded='full' />*/}
              </Center>
              <Link href="/rounds" passHref>
                <Text fontSize="sm" fontWeight={'600'} cursor={'pointer'}>
                  Funding Rounds
                </Text>
              </Link>
            </HStack>
          )
        ) : (
          <DeskNavMenu />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          display={{ base: 'flex', lg: 'none' }}
          flexDirection="column"
          alignItems="start"
          fontSize="18px"
          p="1rem 2.5rem 2rem 2.5rem"
          gap="1.4rem"
        >
          <Button w="full" variant={'outline'} borderColor="white">
            {truncatedAddr}
          </Button>
          <Button onClick={() => disconnect()} w="full" borderColor="white">
            Logout
          </Button>
          <Link href="/profile" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              // pb='1rem'
              // borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onToggle()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Profile
              </Box>
            </Flex>
          </Link>
          <Link href="/projects" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              // pb='1rem'
              // borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onToggle()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Projects
              </Box>
            </Flex>
          </Link>
          <Link href="/rounds" style={{ width: '100%' }} passHref>
            <Flex
              direction={'row'}
              alignItems="center"
              justify={'space-between'}
              w="100%"
              //pb='1rem'
              //   borderBottom='0.1px solid white'
            >
              <Box
                display="flex"
                alignItems={'start'}
                w="100%"
                onClick={() => onClose()}
                as="button"
                transition={'all 0.3s ease'}
                fontSize="15px"
                fontWeight="400"
              >
                Funding Round
              </Box>
            </Flex>
          </Link>{' '}
        </Flex>
      </Collapse>
    </Container>
  );
}
