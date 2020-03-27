import React from 'react';
import ReactMarkdown from 'react-markdown';

import { parseArticle, ArticleFile } from '../../utils/parseArticle';
import { readArticlesDirectory } from '../../utils/readArticlesDirectory';
import { NotFoundError } from '../../errors/NotFound';
import styled from 'styled-components';
import { colors } from '../../stylesheets/colors';
import { motion } from 'framer-motion';
import FunkyArrow from '../../components/FunkyArrow';
import Link from 'next/link';

interface Props {
  article: ArticleFile;
}

const Header = styled.h1`
  color: ${colors.darkGreen};
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 40em;
  padding-top: 10em;
  margin-left: auto;
  margin-right: auto;
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
      <Article>
        <Header>{article.data.title}</Header>
        <div>
          <ReactMarkdown source={article.content} />
        </div>
      </Article>
      <TopLeft>
        <Link href="/nyheter" passHref>
          <FunkyArrow color={colors.lightBlue} />
        </Link>
      </TopLeft>
    </motion.div>
  );
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const article = await parseArticle(slug);
  if (article === null) {
    throw new NotFoundError(slug);
  }
  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const articles = await readArticlesDirectory();
  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  };
};

export default BlogTemplate;
