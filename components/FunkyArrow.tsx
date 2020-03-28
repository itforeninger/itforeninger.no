import styled from 'styled-components';
import React from 'react';
import { constants } from '../stylesheets/constants';

interface FunkyArrowProps {
  color: string;
  href?: string;
  onClick?: () => void;
}

const StyledArrow = styled.a`
  display: inline-block;
  margin-right: auto;
  min-width: 1.1em;
  text-decoration: none;
  padding: 20px;
  color: ${(props) => props.color};
  font-size: 3em;
  letter-spacing: -0.5em;
  font-weight: bolder;
  cursor: pointer;
  transition: letter-spacing 1s ease;
  user-select: none;
  @media (min-width: ${constants.minWidth}) {
    padding-left: 40px;
    padding-top: 20px;
    :hover {
      letter-spacing: 0.2em;
    }
  }
`;

// eslint-disable-next-line react/display-name
const FunkyArrow: React.FC<FunkyArrowProps> = React.forwardRef<
  HTMLAnchorElement,
  Omit<FunkyArrowProps, 'innerRef'>
>(({ color, href, onClick }, ref) => {
  return (
    <StyledArrow ref={ref} onClick={onClick} href={href} color={color}>
      {'<------'}
    </StyledArrow>
  );
});

export default FunkyArrow;
