import styled, { css } from 'styled-components';

interface LinkTextProps {
  large?: boolean;
  color: string;
}

const LinkText = styled.a<LinkTextProps>`
  text-decoration: underline;
  color: ${(props) => props.color};
  transition: filter 0.5s;
  cursor: pointer;

  ${(props) =>
      props.large &&
      css`
        font-size: 1.5em;
      `}
    :hover {
    filter: brightness(80%);
  }
`;

export default LinkText;
