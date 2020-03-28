import React from 'react';
import styled from 'styled-components';
import { GOTO_NEWS } from '../../constants/paragraphs';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import LinkText from '../LinkText';
import Link from 'next/link';
import { constants } from '../../stylesheets/constants';

const Content = styled.div`
  @media (min-width: ${constants.minWidth}) {
    margin: 40vh 0;
    min-width: 400px;
  }
  margin: 10vh 0;
`;

const BigLinkText = styled(LinkText)`
  @media (min-width: ${constants.minWidth}) {
    font-size: 3em;
    width: 400px;
  }
  font-size: 2em;
  width: 250px;
  display: block;
  margin-bottom: 30px;
`;

const HorizontalStack = styled.div`
  display: flex;
  @media (min-width: ${constants.minWidth}) {
    margin-left: ${100 / 12 + 'vw'};
    flex-direction: row;
  }
  max-width: 650px;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  font-size: 1.1em;
`;

const ImageLink = styled.img`
  cursor: pointer;
`;

export const NewsLink = () => {
  return (
    <Content>
      <Link scroll={false} href="/nyheter">
        <BigLinkText color={colors.lightBlue}>{GOTO_NEWS.header}</BigLinkText>
      </Link>
      <HorizontalStack>
        <Paragraph>{GOTO_NEWS.content}</Paragraph>
        <Link scroll={false} href="/nyheter">
          <ImageLink src="LysBlåPilHoyre.svg" alt="arrow" />
        </Link>
      </HorizontalStack>
    </Content>
  );
};
