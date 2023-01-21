import { Avatar } from '@chakra-ui/avatar';
import { Button } from '@chakra-ui/button';
import { HStack, Text, VStack } from '@chakra-ui/layout';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu';
import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import useUser from '../User/Profile/useUser';
import WalletAdd from '../Wallet/WalletAdd';

const DeskNavMenu = () => {
  const { disconnect } = useWallet();
  const { user } = useUser();
  return (
    <HStack gap="0.5rem">
      <Menu>
        <MenuButton
          fontSize={'md'}
          backgroundColor={'transparent'}
          color="#C5C5C5"
          _hover={{
            backgroundColor: 'transparent',
          }}
          _active={{
            backgroundColor: 'transparent',
          }}
          _focus={{
            backgroundColor: 'transparent',
          }}
          as={Button}
          rightIcon={<BiChevronDown />}
        >
          Irfan Asif
        </MenuButton>
        <MenuList bg="#121212" border="1px solid #222222">
          <HStack p="0.5rem 1rem" gap="0.5rem">
            <Avatar size={'sm'} />
            <VStack alignItems={'start'} justify="center" w="full" spacing="0">
              <Text fontSize="md">{user?.username}</Text>
              <WalletAdd size="xs" copy={true} />
            </VStack>
          </HStack>
          <MenuDivider />
          <MenuItem
            mx="0.5rem"
            bg="transparent"
            rounded="md"
            sx={{
              width: '-webkit-fill-available',
            }}
            _hover={{
              backgroundColor: '#262626',
            }}
            _active={{
              backgroundColor: '#262626',
            }}
          >
            Projects
          </MenuItem>
          <MenuItem
            mx="0.5rem"
            bg="transparent"
            rounded="md"
            sx={{
              width: '-webkit-fill-available',
            }}
            _hover={{
              backgroundColor: '#262626',
            }}
            _active={{
              backgroundColor: '#262626',
            }}
          >
            Funding Rounds
          </MenuItem>
          <MenuItem
            mx="0.5rem"
            bg="transparent"
            rounded="md"
            sx={{
              width: '-webkit-fill-available',
            }}
            _hover={{
              backgroundColor: '#262626',
            }}
            _active={{
              backgroundColor: '#262626',
            }}
          >
            View Profile
          </MenuItem>
          <MenuItem
            mx="0.5rem"
            bg="transparent"
            rounded="md"
            sx={{
              width: '-webkit-fill-available',
            }}
            _hover={{
              backgroundColor: '#262626',
            }}
            _active={{
              backgroundColor: '#262626',
            }}
            as="button"
            onClick={disconnect}
          >
            Sign out
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default DeskNavMenu;
