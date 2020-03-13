import React from 'react';
import Header from '../Header';
import { colors } from '../../stylesheets/colors';
import styled from 'styled-components';
import { MEMBERS } from '../../constants/about';
import LinkText from '../LinkText';
import Link from 'next/link';

const MemberLink = styled(LinkText)`
  text-transform: uppercase;
  font-size: 1.5em;
`;

const Section = styled.div`
  height: 100vh;
  padding: 80px 0;
  box-sizing: border-box;
`;

export const AboutMembers = () => {
  return (
    <Section>
      <Header color={colors.lightBlue}>Studentforeningene i FIF</Header>
      {MEMBERS.sort((member1, member2) =>
        member1.name.toLowerCase() > member2.name.toLowerCase() ? 1 : -1
      ).map((member) => (
        <p key={member.link}>
          <Link href={member.link} passHref>
            <MemberLink color={colors.accentColor1}>{member.name}</MemberLink>
          </Link>
        </p>
      ))}
    </Section>
  );
};
