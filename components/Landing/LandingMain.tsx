import React from 'react';
import styled from 'styled-components';
import { ABOUT_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import { constants } from '../../stylesheets/constants';

const Content = styled.div`
  @media (min-width: ${constants.minWidth}) {
    min-width: 400px;
    margin: 40vh 0 0;
  }
  margin-top: 30vh;
`;

const CustomHeader = styled(Header)`
  color: ${(props) => props.color};
`;

export const LandingMain = () => {
  return (
    <Content>
      <CustomHeader color={colors.accentColor4}>
        {ABOUT_FIF.header}
      </CustomHeader>
      <Paragraph>{ABOUT_FIF.content}</Paragraph>
    </Content>
  );
};
