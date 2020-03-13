import React from 'react';
import styled from 'styled-components';
import { AboutMembers } from '../components/AboutMembers';
import { motion } from 'framer-motion';
import RowWrapper from '../components/RowWrapper';
import { colors } from '../stylesheets/colors';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import { ABOUT_FIF, JOIN_FIF } from '../constants/paragraphs';
import Link from 'next/link';
import { LandingMain } from '../components/Landing/LandingMain';
import { Info } from '../components/Landing/Info';

const Main = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

const Home = () => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: '100vw',
        opacity: 0,
      }}
      transition={{
        type: 'tween',
        ease: 'anticipate',
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
          <AboutMembers />
        </RowWrapper>
      </Main>
    </motion.div>
  );
};

export default Home;
