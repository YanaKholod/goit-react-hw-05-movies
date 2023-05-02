import React from 'react';
import { Styled } from '../SharedLayout/StyledSharedLayout';

const LoadingPoints = () => {
  return (
    <Styled.Points>
      <Styled.Point delay="0s" />
      <Styled.Point delay=".2s" />
      <Styled.Point delay=".4s" />
    </Styled.Points>
  );
};

export default LoadingPoints;
