import { useClipboard } from '@chakra-ui/hooks';
import { Center, HStack, Text } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/toast';
import { SetStateAction, useEffect } from 'react';
import { TbCopy } from 'react-icons/tb';
import { useUserStore } from 'src/store/userStore';
import { SuccessToast } from '../Toasts/Toasts';

type PropsType = {
  size?: string;
  color?: string;
  copy?: boolean;
};

const WalletAdd = ({ size, color, copy }: PropsType) => {
  const { onCopy, value, setValue, hasCopied } = useClipboard('');
  const { wallet } = useUserStore();
  const toast = useToast();
  const addr = wallet?.publicKey
    ? wallet?.publicKey
    : 'DJDqurqEufUxUhdtXgcRydDQ8VamZHpvMPioDt5nAdEW';

  useEffect(() => {
    if (addr) {
      setValue(addr as SetStateAction<string>);
    }
  }, [addr, hasCopied, setValue, value]);

  if (!addr) return <></>;

  let first = addr.slice(0, 4);
  let last = addr.slice(addr.length - 4, addr.length);
  let truncatedAddr = first + '...' + last;
  console.log('truncated addy - ', truncatedAddr);
  const fillColor = color ? color : '#A6A6A6';

  const propsSize = size ? size : 'md';
  let logoSize;

  switch (propsSize) {
    case 'xs':
      logoSize = 3;
      break;
    case 'sm':
      logoSize = 4;
      break;
    case 'md':
      logoSize = 6;
      break;
    case 'lg':
      logoSize = 8;
      break;
    case 'xl':
      logoSize = 12;
      break;
    default:
      logoSize = 6;
      break;
  }
  return (
    <HStack
      w="100%"
      transform={{ base: 'translateX(-5px) scale(0.9)', sm: 'none' }}
      justify={'space-between'}
    >
      <HStack>
        <Center
          height={{ base: '3', md: logoSize }}
          width={{ base: '3', md: logoSize }}
        >
          <svg
            width="30"
            height="22"
            viewBox="0 0 30 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.95617 0.123687C6.0368 0.0448914 6.15088 0 6.27047 0H28.5682C28.9404 0 29.1334 0.396374 28.8791 0.639027L24.0377 5.26011C23.9573 5.3369 23.8447 5.38051 23.7268 5.38051H1.54166C1.17175 5.38051 0.977956 4.98849 1.22737 4.74477L5.95617 0.123687Z"
              fill={fillColor}
            />
            <path
              d="M5.69251 16.735C5.77313 16.6562 5.88721 16.6113 6.0068 16.6113H28.3047C28.6768 16.6113 28.8696 17.0077 28.6155 17.2504L23.7741 21.8714C23.6935 21.9483 23.5809 21.9918 23.4632 21.9918H1.27798C0.908082 21.9918 0.714283 21.5997 0.963697 21.3561L5.69251 16.735Z"
              fill={fillColor}
            />
            <path
              d="M5.85174 13.5439C6.01333 13.7079 6.24627 13.8019 6.49104 13.8019H28.7225C29.0908 13.8019 29.2853 13.4126 29.0389 13.1682L24.3958 8.56466C24.1537 8.32458 23.8087 8.1875 23.4468 8.1875H1.51576C1.14967 8.1875 0.954423 8.57258 1.19611 8.81791L5.85174 13.5439Z"
              fill={fillColor}
            />
          </svg>
        </Center>
        <Text
          fontSize={{ base: 'xs', md: size }}
          color={fillColor}
          fontWeight="600"
        >
          {truncatedAddr}
        </Text>
      </HStack>
      {copy && (
        <Center
          onClick={() => {
            onCopy();
            SuccessToast({ toast, message: 'Copied' });
          }}
          transform={'scale(0.95)'}
          opacity={'0.8'}
          transition={'all 0.2s'}
          _hover={{
            //transform: 'scale(1)',
            opacity: '1',
            transition: 'all 0.2s',
          }}
          as="button"
        >
          <TbCopy width={3} height={3} color={fillColor} />
        </Center>
      )}
    </HStack>
  );
};

export const TruncatedAddr = () => {
  const { wallet } = useUserStore();
  const addr = wallet?.publicKey
    ? wallet?.publicKey
    : 'DJDqurqEufUxUhdtXgcRydDQ8VamZHpvMPioDt5nAdEW';

  let first = addr.slice(0, 4);
  let last = addr.slice(addr.length - 4, addr.length);
  let truncatedAdd = first + '...' + last;
  return truncatedAdd;
};

export default WalletAdd;
