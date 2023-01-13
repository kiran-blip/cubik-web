import {
  Center,
  Collapse,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import React, { useState } from 'react';
import { ConnectWallet } from './ConnectWallet';

const SolanaWalletButton = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { publicKey, connected } = useWallet();
  const [glarePosition, setGlarePosition] = useState({
    x: 100,
    y: -50,
    scale: 0,
  });

  const handleMouseMove = (event: {
    preventDefault: () => void;
    nativeEvent: { offsetX: any; offsetY: any };
  }) => {
    event.preventDefault();
    setGlarePosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
      scale: 1,
    });
  };

  return (
    <VStack
      onMouseOutCapture={() => {
        setGlarePosition({
          x: glarePosition.x,
          y: glarePosition.y,
          scale: 0,
        });
      }}
      onMouseMove={handleMouseMove}
      w="full"
      align={'center'}
      justify="center"
      rounded="6px"
      position={'relative'}
      background="#222222"
      overflow={'hidden'}
      // _after={{
      //   content: `" "`,
      //   zIndex: '1',
      //   position: 'absolute',
      //   top: `${glarePosition.y}px`,
      //   left: `${glarePosition.x}px`,
      //   overflow: 'hidden',
      //   width: `${glarePosition.scale * 1.2}rem`,
      //   height: `${glarePosition.scale * 1.2}rem`,
      //   filter: 'blur(25px)',
      //   WebkitBackdropFilter: 'blur(25pxx)',
      //   backgroundColor: 'rgba(225, 225, 225, 1);',
      // }}
    >
      <HStack
        onClick={() => {
          if (!connected) onToggle();
        }}
        as="button"
        rounded="6px"
        w="full"
        py="0.4rem"
        m="0.1rem"
        px="1rem"
        align={'center'}
        justify="center"
      >
        <Center zIndex={'0'}>
          <svg
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 14H13.75L18 9.66667H5.25L1 14ZM5.25 9.66667L1 5.33333H13.75L18 9.66667M13.75 5.33333L18 1H5.25L1 5.33333"
              fill="#A6A6A6"
            />
            <path
              d="M18 9.66667L13.75 14H1L5.25 9.66667M18 9.66667H5.25M18 9.66667L13.75 5.33333M5.25 9.66667L1 5.33333M1 5.33333H13.75M1 5.33333L5.25 1H18L13.75 5.33333"
              stroke="#222222"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Center>
        <Text
          zIndex={'0'}
          color="#A6A6A6"
          fontWeight={'500'}
          fontSize="lg"
          maxW="10rem"
          sx={{
            noOfLines: '1',
          }}
        >
          {publicKey ? publicKey.toBase58() : 'Solana'}
        </Text>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Text
          px={{ base: '1rem', md: '1.5rem' }}
          color="#C5C5C5"
          fontSize={{ base: 'xs', md: 'xs' }}
        >
          Connect your Solana Wallet to Create Account.
        </Text>
        <Center
          flexDir={'column'}
          gap="0.5rem"
          py="1.5rem"
          px={{ base: '1rem', md: '0.5rem' }}
          w="full"
        >
          <ConnectWallet />
        </Center>
      </Collapse>
    </VStack>
  );
};

export default SolanaWalletButton;
