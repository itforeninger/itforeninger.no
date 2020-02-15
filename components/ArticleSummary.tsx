import React from "react";
import styled from "styled-components";
import { colors } from "../stylesheets/colors";
import Link from "./Link";
import ReactMarkdown from "react-markdown";
import ArticleDate from "./ArticleDate";

interface ArticleSummaryInterface {
  href: string;
  title: string;
  content: string;
  date: string;
}

const dateFormatter = new Intl.DateTimeFormat("nb-NO");

const ArticleWrapper = styled.article`
  max-width: 35em;
  margin-bottom: 3em;
`;

const ArticleSummary: React.FC<ArticleSummaryInterface> = ({
  date,
  href,
  title,
  content
}) => {
  return (
    <ArticleWrapper>
      <Link large href={href} color={colors.pink}>
        {title}
      </Link>
      <ArticleDate>
        {"Sist oppdatert: " + dateFormatter.format(new Date(date))}
      </ArticleDate>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ArticleWrapper>
  );
};

export default ArticleSummary;
