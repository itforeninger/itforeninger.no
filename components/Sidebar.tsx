import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import FunkyArrow from './FunkyArrow';
import Link from 'next/link';
import { constants } from '../stylesheets/constants';

const Container = styled.div`
  position: relative;
  @media (min-width: ${constants.minWidth}) {
    width: 25em;
  }
  width: auto;
`;

const StickyBar = styled.div`
  background-color: ${colors.backgroundColor4};
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

const FixedText = styled.div`
  @media (min-width: ${constants.minWidth}) {
    bottom: 2.5em;
    left: 0.5em;
    width: 6em;
    font-size: 4em;
  }
  user-select: none;
  font-size: 3em;
  width: 12em;
  left: 0.4em;
  bottom: 6em;
  text-transform: uppercase;
  color: ${colors.beige};
  position: absolute;
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
`;

const Sidebar = () => {
  return (
    <Container>
      <StickyBar>
        <Link scroll={false} href="/" passHref>
          <FunkyArrow color={colors.beige} />
        </Link>
        <FixedText>Sakene vi jobber med</FixedText>
      </StickyBar>
    </Container>
  );
};

export default Sidebar;
