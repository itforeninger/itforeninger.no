import matter, { GrayMatterFile } from 'gray-matter';

interface ArticleFileImport {
  default: any;
}

export interface ArticleFile extends GrayMatterFile<any> {
  data: {
    title: string;
    author: string;
    date: string;
  };
  content: string;
  excerpt?: string;
  orig: Buffer;
}

export interface ArticleDocument extends ArticleFile {
  slug: string;
}

const createSlug = (fileName: string) => {
  return fileName
    .replace(/^.*[\\\/]/, '')
    .split('.')
    .slice(0, -1)
    .join('.');
};

export const readArticlesDirectory = async (): Promise<ArticleDocument[]> => {
  // Get all '.md' files from the articles directory as a require context.
  const articleDirContext = require.context('../articles', true, /\.md$/);
  const fileNames = articleDirContext.keys();
  const files = fileNames.map<ArticleFileImport>(articleDirContext);
  const data = fileNames.map((fileName, index) => {
    const slug = createSlug(fileName);
    const file = files[index];
    const content = matter(file.default) as ArticleFile;
    return {
      ...content,
      slug,
    };
  });
  return data;
};
