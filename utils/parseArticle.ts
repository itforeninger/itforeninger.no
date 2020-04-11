import matter, { GrayMatterFile } from 'gray-matter';

interface ArticleFileImport {
  default: matter.Input;
}

export interface ArticleFile extends GrayMatterFile<Buffer> {
  data: {
    title: string;
    author: string;
    date: string;
    summary: string;
  };
  content: string;
  excerpt?: string;
  orig: null;
}

interface ArticleFileMatter {
  title: string;
  author: string;
  date: Date;
  summary: string;
}

type RawArticleFile = Omit<ArticleFile, 'date'> & { data: ArticleFileMatter };

export const parseArticle = async (
  slug: string
): Promise<ArticleFile | null> => {
  try {
    const file: ArticleFileImport = await import(`../articles/${slug}.md`);
    const content = matter(file.default) as RawArticleFile;
    const article: ArticleFile = {
      ...content,
      data: {
        ...content.data,
        date: content.data.date.toISOString(),
      },
      orig: null,
    };
    return article;
  } catch {
    return null;
  }
};
