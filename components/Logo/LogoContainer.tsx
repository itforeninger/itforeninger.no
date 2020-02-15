import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 120px;
  margin: 30px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoContainer = () => {
  return (
    <Wrapper>
      <LogoImage src="/Logo2.svg" alt="FIF logo" />
    </Wrapper>
  );
};
