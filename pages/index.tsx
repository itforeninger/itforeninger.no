import React from 'react';
import styled from 'styled-components';
import { AboutMembers } from '../components/AboutMembers';
import { motion } from 'framer-motion';
import RowWrapper from '../components/RowWrapper';
import { colors } from '../stylesheets/colors';
import { LandingMain } from '../components/Landing/LandingMain';
import { Info } from '../components/Landing/Info';
import { NewsLink } from '../components/Landing/NewsLink';

const Main = styled.main`
  @media (min-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  display: flex;
  flex-flow: row wrap;
  margin: 0 5%;
`;

const VerticalText = styled.div`
  @media (min-width: 1023px) {
    opacity: 0.2;
  }
  position: absolute;
  z-index: 0;
  font-size: 8em;
  width: 800px;
  color: ${colors.lightBlue};
  line-height: 0.85em;
  opacity: 0.1;
  left: 0;
  transform-origin: 0 50%;
  padding-right: 90px;
  padding-bottom: 20px;
  transform: rotate(90deg) translate(-100%, -50%);
  transition-property: margin-top, margin-left;
  transition-duration: 0.2s;
  &:hover {
    color: ${colors.beige};
    opacity: 1;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Main>
        <RowWrapper start={3} end={6}>
          <LandingMain />
        </RowWrapper>
        <RowWrapper start={5} end={8}>
          <Info />
        </RowWrapper>
        <RowWrapper
          start={2}
          end={11}
          backgroundColor={colors.backgroundColor2}
        >
          <VerticalText>Forente IT Foreninger</VerticalText>
          <AboutMembers />
        </RowWrapper>
        <RowWrapper start={3} end={7}>
          <NewsLink />
        </RowWrapper>
      </Main>
    </motion.div>
  );
};

export default Home;
