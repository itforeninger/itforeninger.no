import styled from "styled-components";

interface FunkyArrowProps {
  color: string;
}

const StyledArrow = styled.a`
  display: block;
  min-width: 1.1em;
  padding-left: 40px;
  padding-top: 20px;
  text-decoration: none;
  color: ${props => props.color};
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
    letter-spacing: 0.2em;
  }
`;

// A joke, but a good one. We'll let it stay
const FunkyArrow: React.FC<FunkyArrowProps> = ({ color }) => (
  <StyledArrow color={color}>{"<------"}</StyledArrow>
);

export default FunkyArrow;
