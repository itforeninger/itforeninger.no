import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import Link from 'next/link';
import LinkText from './LinkText';

const Container = styled.div`
  box-sizing: border-box;

  background: ${colors.lightGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 40px ${100 / 12 + 'vw'};
  min-height: 25vh;
`;

const VerticalStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const Footer = () => {
  return (
    <Container>
      <Link href="mailto:koordinator@itforeninger.no" passHref>
        <LinkText color={colors.darkGray}>koordinator@itforeninger.no</LinkText>
      </Link>
      <VerticalStack>
        <Link href="https://github.com/itforeninger">
          <LinkText color={colors.darkGray}>Github</LinkText>
        </Link>
      </VerticalStack>
    </Container>
  );
};

export default Footer;