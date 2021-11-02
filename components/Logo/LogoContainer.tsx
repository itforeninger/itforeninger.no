import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
  cursor: pointer;
`;

export const LogoContainer = () => {
  return (
    <Wrapper>
      <Link scroll={false} href="/" passHref>
        <a>
          <LogoImage src="/LogoGrønnFyll.svg" alt="FIF logo" />
        </a>
      </Link>
    </Wrapper>
  );
};
