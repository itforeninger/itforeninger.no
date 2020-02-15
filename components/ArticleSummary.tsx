import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import Link from './Link';
import ReactMarkdown from 'react-markdown';
import Paragraph from './Paragraph';

interface ArticleSummaryInterface {
  href: string;
  title: string;
  content: string;
  date: string;
}

const dateFormatter = new Intl.DateTimeFormat('nb-NO');

const ArticleWrapper = styled.article`
  max-width: 30em;
  margin-bottom: 2em;
`;

const ArticleSummary: React.FC<ArticleSummaryInterface> = ({
  date,
  href,
  title,
  content,
}) => {
  return (
    <ArticleWrapper>
      <Link href={href} color={colors.pink}>
        {title}
      </Link>
      <Paragraph>
        {'Sist oppdatert: ' + dateFormatter.format(new Date(date))}
      </Paragraph>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ArticleWrapper>
  );
};

export default ArticleSummary;
