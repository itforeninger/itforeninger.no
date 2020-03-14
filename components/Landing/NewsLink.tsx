import React from 'react';
import styled from 'styled-components';
import { GOTO_NEWS } from '../../constants/paragraphs';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import LinkText from '../LinkText';
import Link from 'next/link';

const Content = styled.div`
  margin: 40vh 0;
  min-width: 400px;
`;

const BigLinkText = styled(LinkText)`
  font-size: 3em;
  width: 400px;
  display: block;
  margin-bottom: 30px;
`;

const HorizontalStack = styled.div`
  display: flex;
  margin-left: ${100 / 12 + 'vw'};
  max-width: 650px;
  flex-direction: row;
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
