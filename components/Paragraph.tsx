import styled from 'styled-components';
import { colors } from '../stylesheets/colors';

const Paragraph = styled.p`
  color: ${(props) => props.color || colors.paragraphColor};
  line-height: 150%;
`;

export default Paragraph;
