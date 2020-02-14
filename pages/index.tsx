import React from "react";
import styled from "styled-components";
import { AboutMembers } from "../components/AboutMembers";
import { Landing } from "../components/Landing";
import { motion } from "framer-motion";

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1440px auto;
`;

const Home = () => {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: "100vw",
        opacity: 0
      }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 0.5
      }}
    >
      <Main>
        <Landing />
        <AboutMembers />
      </Main>
    </motion.div>
  );
};

export default Home;
