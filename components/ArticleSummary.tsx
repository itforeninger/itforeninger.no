import React from 'react';
import styled from 'styled-components';
import { colors } from '../stylesheets/colors';
import ReactMarkdown from 'react-markdown';
import ArticleDate from './ArticleDate';
import LinkText from './LinkText';
import Link from 'next/link';

interface ArticleSummaryInterface {
  slug: string;
  title: string;
  content: string;
  date: string;
}

const dateFormatter = new Intl.DateTimeFormat('nb-NO');

const ArticleWrapper = styled.article`
  max-width: 35em;
  padding-bottom: 3em;

  & p {
    color: ${colors.paragraphColor};
  }
`;

const ArticleSummary: React.FC<ArticleSummaryInterface> = ({
  date,
  slug,
  title,
  content,
}) => {
  return (
    <ArticleWrapper>
      <Link scroll={false} href="/nyheter/[slug]" as={`/nyheter/${slug}`}>
        <LinkText large color={colors.dullGreen}>
          {title}
        </LinkText>
      </Link>
      <ArticleDate>
        {'Sist oppdatert: ' + dateFormatter.format(new Date(date))}
      </ArticleDate>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ArticleWrapper>
  );
};

export default ArticleSummary;
