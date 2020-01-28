import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

const BlogTemplate = props => {
  // data from getInitialProps
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div>
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  );
};

BlogTemplate.getInitialProps = async context => {
  // context contains the query param
  const { slug } = context.query;
  console.log(slug);
  // grab the file in the posts dir based on the slug
  const content = await import(`../../articles/${slug}.md`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data
  };
};

export default BlogTemplate;
