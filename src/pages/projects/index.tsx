import config from '@/config/general.config';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { useState } from 'react';
import SEO from 'src/components/SEO';
import {
  IdentityButton,
  ButtonMode,
  useGateway,
  GatewayStatus,
} from '@civic/solana-gateway-react';
import { BiSearch, BiSearchAlt2 } from 'react-icons/bi';
import { projectType } from '@/interfaces/project';
import ProjectList from 'src/components/Projects/ProjectList';

function RequestGatewayToken() {
  const { gatewayStatus, requestGatewayToken, gatewayToken } = useGateway();
  return (
    <>
      <div>Wallet adapter connected</div>
      <div>Pass status: {GatewayStatus[gatewayStatus]}</div>
      <br />
      <button type="submit" onClick={requestGatewayToken}>
        Request Pass
      </button>
      <br />
      <div>Pass: {gatewayToken?.publicKey.toBase58()}</div>
    </>
  );
}

const Data = [{ name: '' }];

const Projects = () => {
  const [wordEntered, setWordEntered] = useState();
  const [searchResult, setSearchResult] = useState(false);
  const [projectsData, setProjectsData] = useState(Data);
  //const { requestGatewayToken } = useGateway();
  const handleSearch = (event: { target: { value: any } }) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    if (searchWord === '') {
      setSearchResult(false);
      return setProjectsData(Data);
    }

    if (searchWord !== '') {
      setSearchResult(true);
    }

    const newFilter = Data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setProjectsData(newFilter);
  };
  return (
    <>
      <SEO
        title={`Cubic | Projects`}
        description={`Quadratic fund your favorite solana Projects`}
        image={`https://solana.ghost.io/content/images/2022/06/solana-network-upgrades.png`}
      />
      <main>
        <Container maxW="8xl" px="2rem" py="2rem">
          <HStack>
            <VStack maxW="20rem" gap="2rem">
              <Heading color="#D1D1D1" fontWeight={'600'}>
                Discover and Fund Solana Projects
              </Heading>
              <InputGroup
                rounded="full"
                background={'rgba(18, 18, 18, 0.4)'}
                p="0.5rem 0rem"
                sx={{
                  backdropFilter: 'blur(14px)',
                  margin: '0px !important',
                  marginTop: '0px !important',
                }}
                _after={{
                  content: `" "`,
                  position: 'absolute',
                  inset: '0',
                  borderRadius: '4rem',
                  padding: '3px',
                  background:
                    'linear-gradient(20.84deg,rgba(51, 51, 51, 1), rgba(104, 104, 104, 0))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  MaskComposite: 'exclude',
                }}
              >
                <InputLeftElement w="4.5rem" h="full" pointerEvents="none">
                  <BiSearch size="1.4rem" color="#5B5B5B" />
                </InputLeftElement>
                <Input
                  pl="3.5rem"
                  border="none"
                  bg="transparent"
                  placeholder="Search User"
                  _placeholder={{
                    color: '#5B5B5B',
                    fontSize: '16px',
                    fontWeight: '500',
                  }}
                  _focus={{
                    borderColor: 'transparent',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  rounded="full"
                  pb={'3px'}
                  value={wordEntered}
                  onChange={handleSearch}
                />
              </InputGroup>
            </VStack>
            <ProjectList />
          </HStack>
        </Container>
      </main>
    </>
  );
};

export default Projects;
