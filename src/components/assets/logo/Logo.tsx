import { Center, HStack } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <HStack gap="0.2rem" alignItems={'center'} justify="space-between">
      <Center>
        <svg
          width="25"
          height="30"
          viewBox="0 0 25 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.5 13.1667V8.1905L12.5 1.64288L1.5 8.1905V21.5476M23.5 13.1667L12.5 6.61907L6 10.2857M23.5 13.1667L20.67 15M6 10.2857V13.9524L9 12.1392M6 10.2857L9 12.1392M23.25 21.5476V16.5715L20.67 15M23.25 21.5476L12.5 15.2619L1.5 21.5476M23.25 21.5476L12.5 28.3572L1.5 21.5476M9 12.1392L12.5 10.0238L20.67 15"
            stroke="url(#paint0_linear_164_4380)"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_164_4380"
              x1="12.5"
              y1="1.64288"
              x2="12.5"
              y2="60.0003"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.10061" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </Center>
    </HStack>
  );
};

export default Logo;
