import styled from 'styled-components';

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 2em;
  margin: 0;
  color: ${(props) => props.color};
`;

export default Header;
