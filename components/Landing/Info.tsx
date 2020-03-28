import React from 'react';
import styled from 'styled-components';
import { JOIN_FIF } from '../../constants/paragraphs';
import Header from '../Header';
import Paragraph from '../Paragraph';
import { colors } from '../../stylesheets/colors';
import Link from 'next/link';
import { constants } from '../../stylesheets/constants';

const Grid = styled.div`
  min-height: 20vh;
  @media (min-width: ${constants.minWidth}) {
    min-width: 350px;
    margin: 40vh 0;
  }
  margin: 20vh 0;
`;

const StyledLink = styled.a`
  color: ${colors.lightBlue};
`;

const CustomHeader = styled(Header)`
  color: ${(props) => props.color};
  @media (prefers-color-scheme: dark) {
    color: ${colors.paragraphColor};
  }
`;

export const Info = () => {
  return (
    <Grid>
      <CustomHeader color={colors.pink}>{JOIN_FIF.header}</CustomHeader>
      <Paragraph>
        {JOIN_FIF.content},{' '}
        <Link href={'mailto:' + JOIN_FIF.contact} passHref>
          <StyledLink>{JOIN_FIF.contact}</StyledLink>
        </Link>
      </Paragraph>
    </Grid>
  );
};
