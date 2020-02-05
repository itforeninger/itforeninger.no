import styled, { css } from "styled-components";

interface LinkProps {
  large?: boolean;
}

const Link = styled.a<LinkProps>`
  text-decoration: underline;
  color: ${props => props.color};
  transition: filter .5s;

  ${props => props.large && css`
    font-size: 1.5em;
  `}
  :hover {
    filter: brightness(80%);
  }
`

export default Link;