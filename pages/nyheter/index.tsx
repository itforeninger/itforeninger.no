import {
  readArticlesDirectory,
  ArticleDocument,
} from '../../utils/readArticlesDirectory';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import ArticleSummary from '../../components/ArticleSummary';
import React, { useEffect } from 'react';
import { constants } from '../../stylesheets/constants';
import { CANONICAL_URL } from '../../constants/about';
import Head from 'next/head';

interface Props {
  articles: ArticleDocument[];
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${constants.minWidth}) {
    margin-left: 5em;
  }
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 10em;
  padding-bottom: 10em;
`;

const Index = ({ articles }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:url" content={`${CANONICAL_URL}/nyheter`} />
        <meta property="og:title" content="Forente IT-Foreninger | Nyheter" />
        <meta property="og:description" content="Sakene FIF jobber med" />
        <meta property="og:type" content="article" />
        {articles.map((article) => (
          <meta
            key={article.data.author}
            property="og:article:author"
            content={article.data.author}
          />
        ))}
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
        <Container>
          <Sidebar />
          <ArticleList>
            {articles
              .sort((a, b) => {
                const dateA = new Date(a.data.publishedDate).getMilliseconds();
                const dateB = new Date(b.data.publishedDate).getMilliseconds();
                return dateB - dateA;
              })
              .map((article) => (
                <ArticleSummary
                  key={article.slug}
                  date={article.data.publishedDate}
                  slug={article.slug}
                  title={article.data.title}
                  content={article.data.summary}
                ></ArticleSummary>
              ))}
          </ArticleList>
        </Container>
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await readArticlesDirectory();
  return {
    props: {
      articles,
    },
  };
};

export default Index;
