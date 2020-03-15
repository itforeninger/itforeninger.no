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

const CustomHeader = styled(Header)`
  color: ${(props) => props.color};
  @media (prefers-color-scheme: dark) {
    color: ${colors.paragraphColor};
  }
`;

export const LandingMain = () => {
  return (
    <Content>
      <CustomHeader color={colors.orange}>{ABOUT_FIF.header}</CustomHeader>
      <Paragraph>{ABOUT_FIF.content}</Paragraph>
    </Content>
  );
};
