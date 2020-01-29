import React from "react";
import ReactMarkdown from "react-markdown";

import { parseArticle, ArticleFile } from "../../utils/parseArticle";
import { NotFoundError } from "../../errors/NotFound";

interface Props {
  article: ArticleFile;
}

const BlogTemplate = ({ article }: Props) => {
  return (
    <article>
      <h1>{article.data.title}</h1>
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
