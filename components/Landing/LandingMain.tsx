import React from 'react';
import styled from 'styled-components';
import { ABOUT_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';

const Content = styled.div`
  @media (min-width: 1023px) {
    min-width: 400px;
    margin: 40vh 0 0;
  }
  margin-top: 30vh;
`;

export const LandingMain = () => {
  return (
    <Content>
      <Header color={colors.orange}>{ABOUT_FIF.header}</Header>
      <Paragraph>{ABOUT_FIF.content}</Paragraph>
    </Content>
  );
};
