import styled from "styled-components";

const FunkyArrow = styled.a`
  display: block;
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

export default FunkyArrow;
