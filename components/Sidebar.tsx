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
        <div>{"<-"}</div>
        <FixedText>Sakene vi jobber med</FixedText>
      </StickyBar>
    </Container>
  );
};

export default Sidebar;
