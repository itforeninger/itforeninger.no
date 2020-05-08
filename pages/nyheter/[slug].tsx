import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { parseArticle, ArticleFile } from '../../utils/parseArticle';
import { readArticlesDirectory } from '../../utils/readArticlesDirectory';
import { NotFoundError } from '../../errors/NotFound';
import styled from 'styled-components';
import { colors } from '../../stylesheets/colors';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import { constants } from '../../stylesheets/constants';
import Head from 'next/head';
import { CANONICAL_URL } from '../../constants/about';

interface Props {
  article: ArticleFile;
  slug: string;
}

const Article = styled.article`
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  max-width: 40em;
  padding-top: 10em;
  @media (min-width: ${constants.minWidth}) {
    margin-left: auto;
    margin-right: auto;
  }
  padding-bottom: 10em;
  margin-left: 5%;
  margin-right: 5%;

  & p {
    color: ${colors.paragraphColor};
  }
`;

const TopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageLink = styled.img`
  cursor: pointer;
  padding: 40px;
  width: 3em;
`;

const BlogTemplate = ({ article, slug }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:url" content={`${CANONICAL_URL}/nyheter/${slug}`} />
        <meta property="og:title" content={article.data.title} />
        <meta property="og:description" content={article.data.summary} />
        <meta property="og:type" content="article" />
        <meta
          property="og:article:published_time"
          content={article.data.publishedDate}
        />
        <meta
          property="og:article:modified_time"
          content={article.data.modifiedDate}
        />
        <meta property="og:article:author" content={article.data.author} />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.48, 0.15, 0.25, 0.96],
        }}
      >
        <Article>
          <Header color={colors.dullGreen}>{article.data.title}</Header>
          <div>
            <ReactMarkdown source={article.content} />
          </div>
        </Article>
        <TopLeft>
          <Link scroll={false} href="/nyheter">
            <ImageLink src="/LysPilVenstre.svg" alt="arrow" />
          </Link>
        </TopLeft>
      </motion.div>
    </>
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
      slug,
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
