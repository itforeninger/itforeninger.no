import Link from "next/link";
import {
  readArticlesDirectory,
  ArticleDocument
} from "../../utils/readArticlesDirectory";

interface Props {
  articles: ArticleDocument[];
}

const Index = ({ articles }: Props) => {
  return (
    <div>
      {articles.map(article => (
        <article key={article.slug}>
          <Link href={`/nyheter/${article.slug}`}>
            <a>{article.data.title}</a>
          </Link>
        </article>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  const articles = await readArticlesDirectory();
  return {
    articles
  };
};

export default Index;
