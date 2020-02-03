import React from "react";
import ReactMarkdown from "react-markdown";

import { parseArticle, ArticleFile } from "../../utils/parseArticle";
import { NotFoundError } from "../../errors/NotFound";
import styled from "styled-components";
import { colors } from "../../stylesheets/colors";

interface Props {
  article: ArticleFile;
}

const Header = styled.h1`
  color: ${colors.darkGreen};
`;

const BlogTemplate = ({ article }: Props) => {
  return (
    <article>
      <Header>{article.data.title}</Header>
      <div>
        <ReactMarkdown source={article.content} />
      </div>
    </article>
  );
};

BlogTemplate.getInitialProps = async context => {
  const { slug } = context.query;
  const article = await parseArticle(slug);
  if (article === null) {
    throw new NotFoundError(slug);
  }
  return {
    article
  };
};

export default BlogTemplate;
