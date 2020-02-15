import styled from "styled-components";
import { JOIN_FIF } from "../../constants/paragraphs";
import Header from "../Header";
import Paragraph from "../Paragraph";
import { colors } from "../../stylesheets/colors";
import Link from "next/link";

const Grid = styled.div`
  margin: 100px 0;
`;

export const Info = () => {
  return (
    <Grid>
      <Header color={colors.pink}>{JOIN_FIF.header}</Header>
      <Paragraph>
        {JOIN_FIF.content},{" "}
        <Link href={"mailto:" + JOIN_FIF.contact}>
          <a>{JOIN_FIF.contact}</a>
        </Link>
      </Paragraph>
    </Grid>
  );
};
