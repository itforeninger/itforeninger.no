import React from "react";
import styled from "styled-components";
import { colors } from "../stylesheets/colors";

const Container = styled.div`
  height: 3000px;
  position: relative;
  width: 25em;
`;

const StickyBar = styled.div`
  background-color: ${colors.lightBlue};
  height: 100vh;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Arrow = styled.a`
  display: block;
  padding-left: 0.5em;
  padding-top: 0.1em;
  text-decoration: none;
  color: white;
  font-size: 3em;
  letter-spacing: -0.5em;
  font-weight: bolder;
  cursor: pointer;
  transition: letter-spacing 1s ease;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  :hover {
    letter-spacing: 0.1em;
  }
`;

const FixedText = styled.div`
  font-size: 4em;
  color: white;
  position: absolute;
  bottom: 4em;
  left: 0.2em;
  height: 2.5em;
  -webkit-transform-origin: 0 50%;
  -moz-transform-origin: 0 50%;
  -ms-transform-origin: 0 50%;
  -o-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transform: rotate(-90deg) translate(-50%, 50%);
  -moz-transform: rotate(-90deg) translate(-50%, 50%);
  -ms-transform: rotate(-90deg) translate(-50%, 50%);
  -o-transform: rotate(-90deg) translate(-50%, 50%);
  transform: rotate(-90deg) translate(-50%, 50%);
`;

const Sidebar = () => {
  return (
    <Container>
      <StickyBar>
        {/* A joke, but a good one. We'll let it stay */}
        <Arrow href="/">{"<---------"}</Arrow>
        <FixedText>Sakene vi jobber med</FixedText>
      </StickyBar>
    </Container>
  );
};

export default Sidebar;
