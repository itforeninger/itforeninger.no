import React from "react";
import styled from "styled-components";
import RowWrapper from "../components/RowWrapper";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Link from "../components/Link";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1em;
  grid-row-gap: 1em;
`;

const Home = () => (
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
    <Grid>
      <RowWrapper start={2} end={7}>
        <Header color="orange">FIF er</Header>
        <Paragraph>
          Et forum hvor de største studentforeningene for IT-studenter i Norge
          er representert. Formålet vårt er å samle og forbedre foreningene, og
          tilbudene de gir til studentene. Dette gjør vi gjennom kontinuerlig
          kontakt og faste møter hvor erfaringsutveksling står i fokus
        </Paragraph>
      </RowWrapper>
      <RowWrapper start={5} end={10}>
        <Header color="pink">Bli med i FIF</Header>
        <Paragraph>
          Er din studentforening interessert i å bli med i FIF? Vi vil gjerne
          høre fra deg! Ta kontakt med oss
        </Paragraph>
      </RowWrapper>
      <RowWrapper start={1} end={12} backgroundColor="beige">
        <Header color="lightBlue">Studentforeningene i FIF</Header>
        <Link large href="https://online.ntnu.no" color="orange">
          Online
        </Link>
        <Link large color="orange">
          Abakus
        </Link>
        <Link large color="orange">
          TIHLDE
        </Link>
        <Link large color="orange">
          Cybernistisk Selskab
        </Link>
        <Link large color="orange">
          Navet
        </Link>
        <Link large color="orange">
          Beta
        </Link>
        <Link large color="orange">
          Epsilon
        </Link>
        <Link large color="orange">
          Echo
        </Link>
        <Link large color="orange">
          Tromsøstudentenes Dataforening
        </Link>
        <Link large color="orange">
          Login
        </Link>
      </RowWrapper>
    </Grid>
  </motion.div>
);

export default Home;
