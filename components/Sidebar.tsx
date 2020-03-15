import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import FunkyArrow from './FunkyArrow';
import Link from 'next/link';

const Container = styled.div`
  position: relative;
  @media (min-width: 1023px) {
    width: 25em;
  }
  width: auto;
`;

const StickyBar = styled.div`
  background-color: ${colors.lightBlue};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors.gray};
  }
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

const FixedText = styled.div`
  @media (min-width: 1023px) {
    bottom: 2.5em;
    left: 0.5em;
    width: 6em;
    font-size: 4em;
  }
  font-size: 3em;
  width: 12em;
  left: 0.4em;
  bottom: 6em;
  text-transform: uppercase;
  color: white;
  position: absolute;
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
`;

const Sidebar = () => {
  return (
    <Container>
      <StickyBar>
        <Link href="/" passHref>
          <FunkyArrow color={colors.white} />
        </Link>
        <FixedText>Sakene vi jobber med</FixedText>
      </StickyBar>
    </Container>
  );
};

export default Sidebar;
