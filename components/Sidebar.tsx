import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import Link from 'next/link';
import { constants } from '../stylesheets/constants';

const Container = styled.div`
  position: relative;
  @media (min-width: ${constants.minWidth}) {
    width: 25em;
  }
  width: 5em;
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
  left: 0.2em;
  bottom: 6em;
  text-transform: uppercase;
  color: ${colors.beige};
  position: absolute;
  transform-origin: 0 50%;
  transform: rotate(-90deg) translate(-50%, 50%);
`;

const ImageLink = styled.img`
  cursor: pointer;
  padding: 30px 15px;
  width: 3em;
`;

const Sidebar = () => {
  return (
    <Container>
      <StickyBar>
        <Link scroll={false} href="/">
          <ImageLink src="LysPilVenstre.svg" alt="arrow" />
        </Link>
        <FixedText>Sakene vi jobber med</FixedText>
      </StickyBar>
    </Container>
  );
};

export default Sidebar;
