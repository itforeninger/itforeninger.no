import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { strict } from "assert";

const Index = props => {
  // data from getInitialProps
  const articles = props.allBlogs;
  return (
    <div>
      {articles.map(article => (
        <article key={article.slug}>
          <Link href={`/nyheter/${article.slug}`}>
            <a>{article.document.data.title}</a>
          </Link>
        </article>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => {
  // get all .md files from the src/posts dir
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      //@ts-ignore
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug
      };
    });
    // return all the posts
    return data;
  })(require.context("../../articles", true, /\.md$/));

  return {
    allBlogs: posts
  };
};

export default Index;
