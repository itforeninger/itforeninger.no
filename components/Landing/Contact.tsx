import React from 'react';
import styled from 'styled-components';
import { COORDINATORS, COORDINATOR_EMAIL } from '../../constants/about';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from 'next/link';
import LinkText from '../LinkText';
import { constants } from '../../stylesheets/constants';

const Container = styled.div`
  background-image: url('BobleKontakt.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 10vh auto;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${constants.minWidth}) {
    margin: 10vh 0 20vh 0;
    width: 675px;
    height: 500px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 0;
  height: 100%;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${constants.minWidth}) {
    padding: 80px 0;
  }
`;

const DarkParagraph = styled(Paragraph)`
  color: ${colors.lightBlack};
  max-width: 10em;
  @media (min-width: ${constants.minWidth}) {
    font-size: 1.5em;
  }
`;

const BigHeader = styled(Header)`
  @media (min-width: ${constants.minWidth}) {
    font-size: 2.5em;
  }
`;

export const Contact = () => {
  return (
    <Container>
      <Content>
        <BigHeader color={colors.lightBlack}>Kontakt</BigHeader>
        <DarkParagraph>{COORDINATORS.join(' & ')}</DarkParagraph>
        <Link href={'mailto:' + COORDINATOR_EMAIL} passHref>
          <LinkText color={colors.lightBlack}>{COORDINATOR_EMAIL}</LinkText>
        </Link>
      </Content>
    </Container>
  );
};
