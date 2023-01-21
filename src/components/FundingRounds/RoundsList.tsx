import { Wrap } from '@chakra-ui/react';
import React from 'react';
import RoundCard from './RoundCard';

const RoundsList = () => {
  return (
    <Wrap>
      <RoundCard />
      <RoundCard />
    </Wrap>
  );
};

export default RoundsList;
