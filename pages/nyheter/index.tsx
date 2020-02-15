import Link from 'next/link';
import {
  readArticlesDirectory,
  ArticleDocument,
} from '../../utils/readArticlesDirectory';
import { motion } from 'framer-motion';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import { colors } from '../../stylesheets/colors';
import ArticleSummary from '../../components/ArticleSummary';

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
  margin-left: 4em;
  margin-top: 6em;
`;

const Index = ({ articles }: Props) => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{
        type: 'tween',
        ease: 'anticipate',
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
              href={`/nyheter/${article.slug}`}
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
