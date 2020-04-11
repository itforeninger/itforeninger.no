import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AboutMembers } from '../components/AboutMembers';
import { motion } from 'framer-motion';
import RowWrapper from '../components/RowWrapper';
import { colors } from '../stylesheets/colors';
import { LandingMain } from '../components/Landing/LandingMain';
import { Info } from '../components/Landing/Info';
import { NewsLink } from '../components/Landing/NewsLink';
import { Contact } from '../components/Landing/Contact';
import { constants } from '../stylesheets/constants';
import Head from 'next/head';
import { CANONICAL_URL } from '../constants/about';
import { ABOUT_FIF } from '../constants/paragraphs';

const Main = styled.main`
  @media (min-width: ${constants.minWidth}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 0;
  }
  display: flex;
  flex-flow: row wrap;
  padding: 0 5%;
  overflow: hidden;
`;

const VerticalText = styled.div`
  display: none;
  @media (min-width: ${constants.minWidth}) {
    opacity: 0.2;
    display: block;
  }
  user-select: none;
  position: absolute;
  z-index: 0;
  font-size: 8em;
  width: 800px;
  color: ${colors.lightBlue};
  line-height: 0.85em;
  opacity: 0.1;
  left: 50%;
  margin-left: -50vw;
  transform-origin: 0 50%;
  padding-right: 100px;
  padding-bottom: 20px;
  transform: rotate(90deg) translate(-100%, -50%);
  transition-property: margin-top, margin-left;
  transition-duration: 0.2s;
  &:hover {
    color: ${colors.beige};
    opacity: 1;
    margin-top: 20px;
    margin-left: -49vw;
  }
`;

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Head>
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:title" content="Forente IT-Foreninger" />
        <meta property="og:description" content={ABOUT_FIF.content} />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.48, 0.15, 0.25, 0.96],
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
          <RowWrapper start={3} end={7}>
            <Contact />
          </RowWrapper>
        </Main>
      </motion.div>
    </>
  );
};

export default Home;
