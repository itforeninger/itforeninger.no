import Header from "../Header";
import { colors } from "../../stylesheets/colors";
import styled from "styled-components";
import { MEMBERS } from "../../constants/about";
import { BaseSection } from "../BaseSection";
import LinkText from "../LinkText";
import Link from "next/link";

const MemberLink = styled(LinkText)`
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
      {MEMBERS.map(member => (
        <p key={member.link}>
          <Link href={"http://online.ntnu.no"} passHref>
            <MemberLink color={colors.accentColor1}>{member.name}</MemberLink>
          </Link>
        </p>
      ))}
    </Section>
  );
};
