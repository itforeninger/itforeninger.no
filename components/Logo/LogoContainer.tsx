import { Logo } from "./Logo";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100px;
  margin: 30px 40px;
`;

const LogoImage = styled.img`
  height: 100%;
`;

export const LogoContainer = () => {
  return (
    <Wrapper>
      <LogoImage src="/Logo2.svg" alt="FIF logo" />
    </Wrapper>
  );
};
