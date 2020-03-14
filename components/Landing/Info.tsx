import React from 'react';
import styled from 'styled-components';
import { JOIN_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from 'next/link';

const Grid = styled.div`
  margin-top: 40vh;
  margin-bottom: 40vh;
  min-height: 20vh;
  @media (min-width: 1023px) {
    min-width: 350px;
  }
  z-index: 1;
`;

export const Info = () => {
  return (
    <Grid>
      <Header color={colors.pink}>{JOIN_FIF.header}</Header>
      <Paragraph>
        {JOIN_FIF.content},{' '}
        <Link href={'mailto:' + JOIN_FIF.contact}>
          <a>{JOIN_FIF.contact}</a>
        </Link>
      </Paragraph>
    </Grid>
  );
};
