import styled from 'styled-components';
import { colors } from '../../stylesheets/colors';
import { LandingMain } from './LandingMain';
import { Info } from './Info';
import { BaseSection } from '../BaseSection';

const Section = styled(BaseSection)`
  min-height: 100vh;
  background-color: ${colors.backgroundColor};
`;

export const Landing = () => {
  return (
    <Section>
      <LandingMain />
      <Info />
    </Section>
  );
};
