import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import FunkyArrow from './FunkyArrow';
import Link from 'next/link';

const Container = styled.div`
  height: 3000px;
  position: relative;
  width: 25em;
`;

const StickyBar = styled.div`
  background-color: ${colors.lightBlue};
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

const FixedText = styled.div`
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  position: absolute;
  bottom: 2.5em;
  left: 0.5em;
  width: 6em;
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
