import React from 'react';
import Header from '../Header';
import Link from '../Link';
import { colors } from '../../stylesheets/colors';
import styled from 'styled-components';
import { MEMBERS } from '../../constants/about';
import { BaseSection } from '../BaseSection';

const MemberLink = styled(Link)`
  color: ${colors.accentColor1};
  text-transform: uppercase;
`;

const Section = styled(BaseSection)`
  height: 100vh;
  background-color: ${colors.backgroundColor2};
  padding: 100px 0;
  box-sizing: border-box;
`;

export const AboutMembers = () => {
  return (
    <Section>
      <Header color={colors.lightBlue}>Studentforeningene i FIF</Header>
      {MEMBERS.map((member) => (
        <p key={member.link}>
          <MemberLink href={member.link}>{member.name}</MemberLink>
        </p>
      ))}
    </Section>
  );
};
