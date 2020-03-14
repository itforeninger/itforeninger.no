import React from 'react';
import styled from 'styled-components';
import { GOTO_NEWS } from '../../constants/paragraphs';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import LinkText from '../LinkText';
import Link from 'next/link';

const Content = styled.div`
  @media (min-width: 1023px) {
    margin: 40vh 0;
    min-width: 400px;
  }
  margin: 20vh 0;
`;

const BigLinkText = styled(LinkText)`
  @media (min-width: 1023px) {
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
  @media (min-width: 1023px) {
    margin-left: ${100 / 12 + 'vw'};
    flex-direction: row;
  }
  max-width: 650px;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  font-size: 1.1em;
`;

const RotatedImage = styled.img`
  transform: rotate(-90deg);
  margin-left: 10px;
  cursor: pointer;
`;

export const NewsLink = () => {
  return (
    <Content>
      <Link href="/nyheter">
        <BigLinkText color={colors.lightBlue}>{GOTO_NEWS.header}</BigLinkText>
      </Link>
      <HorizontalStack>
        <Paragraph>{GOTO_NEWS.content}</Paragraph>
        <Link href="/nyheter">
          <RotatedImage src="Pil.svg" alt="arrow" />
        </Link>
      </HorizontalStack>
    </Content>
  );
};
