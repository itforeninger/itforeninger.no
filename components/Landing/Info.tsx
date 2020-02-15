import React from 'react';
import styled from 'styled-components';
import { JOIN_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from '../Link';

const Grid = styled.div`
  margin: 100px 0;
`;

export const Info = () => {
  return (
    <Grid>
      <Header color={colors.pink}>{JOIN_FIF.header}</Header>
      <Paragraph>
        {JOIN_FIF.content}, <Link>{JOIN_FIF.contact}</Link>
      </Paragraph>
    </Grid>
  );
};
