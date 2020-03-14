import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100px;
  margin: 30px 40px;
  z-index: 4;
`;

const LogoImage = styled.img`
  height: 100%;
`;

export const LogoContainer = () => {
  return (
    <Wrapper>
      <a href="/">
        <LogoImage src="/LogoGrønnFyll.svg" alt="FIF logo" />
      </a>
    </Wrapper>
  );
};
