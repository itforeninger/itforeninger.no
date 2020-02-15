import React from 'react';
import ReactMarkdown from 'react-markdown';

import { parseArticle, ArticleFile } from '../../utils/parseArticle';
import { NotFoundError } from '../../errors/NotFound';
import styled from 'styled-components';
import { colors } from '../../stylesheets/colors';
import { motion } from 'framer-motion';

interface Props {
  article: ArticleFile;
}

const Header = styled.h1`
  color: ${colors.darkGreen};
`;

const BlogTemplate = ({ article }: Props) => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: '100vw',
        opacity: 0,
      }}
      transition={{
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
      }}
    >
      <article>
        <Header>{article.data.title}</Header>
        <div>
          <ReactMarkdown source={article.content} />
        </div>
        <a href="/nyheter">tilbake</a>
      </article>
    </motion.div>
  );
};

BlogTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  const article = await parseArticle(slug);
  if (article === null) {
    throw new NotFoundError(slug);
  }
  return {
    article,
  };
};

export default BlogTemplate;
