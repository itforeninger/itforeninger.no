import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import Link from 'next/link';
import LinkText from './LinkText';
import { GITHUB_URL, COORDINATOR_EMAIL } from '../constants/about';

const Container = styled.div`
  box-sizing: border-box;
  background: ${colors.backgroundColor3};
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
      <Link href={`mailto:${COORDINATOR_EMAIL}`} passHref>
        <LinkText color={colors.paragraphColor}>{COORDINATOR_EMAIL}</LinkText>
      </Link>
      <VerticalStack>
        <Link href={GITHUB_URL} passHref>
          <LinkText color={colors.paragraphColor}>Github</LinkText>
        </Link>
      </VerticalStack>
    </Container>
  );
};

export default Footer;
