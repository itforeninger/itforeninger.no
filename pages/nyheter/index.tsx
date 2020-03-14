import {
  readArticlesDirectory,
  ArticleDocument,
} from '../../utils/readArticlesDirectory';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import ArticleSummary from '../../components/ArticleSummary';
import React from 'react';

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
  @media (min-width: 1023px) {
    margin-left: 5em;
  }
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10em;
`;

const Index = ({ articles }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Container>
        <Sidebar />
        <ArticleList>
          {articles.map((article) => (
            <ArticleSummary
              key={article.slug}
              date={article.data.date}
              slug={article.slug}
              title={article.data.title}
              content={article.content}
            ></ArticleSummary>
          ))}
        </ArticleList>
      </Container>
    </motion.div>
  );
};

Index.getInitialProps = async () => {
  const articles = await readArticlesDirectory();
  return {
    articles,
  };
};

export default Index;
