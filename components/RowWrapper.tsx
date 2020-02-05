import styled, { css, StyledFunction } from "styled-components";
import { colors } from '../stylesheets/colors';

interface RowWrapperProps {
  start: number;
  end: number;
  backgroundColor?: string;
}


const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  flex-direction: column;
  grid-column: ${props => props.start + '/' + (props.end + 1)};
  padding: 1em;

  background: ${props => props.backgroundColor ? colors[props.backgroundColor] : 'none'};
`

export default RowWrapper;