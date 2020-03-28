import matter, { GrayMatterFile } from 'gray-matter';

interface ArticleFileImport {
  default: matter.Input;
}

export interface ArticleFile extends GrayMatterFile<Buffer> {
  data: {
    title: string;
    author: string;
    date: string;
  };
  content: string;
  excerpt?: string;
  orig: null;
}

interface ArticleFileMatter {
  title: string;
  author: string;
  date: Date;
}

type RawArticleFile = Omit<ArticleFile, 'date'> & { data: ArticleFileMatter };

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
    const content = matter(file.default) as RawArticleFile;
    const article: ArticleFile = {
      ...content,
      data: {
        ...content.data,
        date: content.data.date.toISOString(),
      },
      orig: null,
    };
    return {
      ...article,
      slug,
    };
  });
  return data;
};
