import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import Link from 'next/link';
import LinkText from './LinkText';
import {
  COORDINATOR_EMAIL,
  GITHUB_URL,
  TEMPORARY_COORDINATOR_EMAILS,
} from '../constants/about';

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

const LinkPadding = styled.div`
  padding: 10px 0;
`;

const Footer = () => {
  return (
    <Container>
      <div>
        <LinkPadding>
          <Link href={'mailto:' + TEMPORARY_COORDINATOR_EMAILS[0]} passHref>
            <LinkText color={colors.paragraphColor}>
              {TEMPORARY_COORDINATOR_EMAILS[0]}
            </LinkText>
          </Link>
        </LinkPadding>
        <LinkPadding>
          <Link href={'mailto:' + TEMPORARY_COORDINATOR_EMAILS[1]} passHref>
            <LinkText color={colors.paragraphColor}>
              {TEMPORARY_COORDINATOR_EMAILS[1]}
            </LinkText>
          </Link>
        </LinkPadding>
      </div>
      {/* <Link href={`mailto:${COORDINATOR_EMAIL}`} passHref>
        <LinkText color={colors.paragraphColor}>{COORDINATOR_EMAIL}</LinkText>
      </Link> */}
      <VerticalStack>
        <Link href={GITHUB_URL} passHref>
          <LinkText color={colors.paragraphColor}>Github</LinkText>
        </Link>
      </VerticalStack>
    </Container>
  );
};

export default Footer;
