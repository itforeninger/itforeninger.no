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
  orig: Buffer;
}

interface ArticleFileMatter {
  title: string;
  author: string;
  date: Date;
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
    };
    return article;
  } catch {
    return null;
  }
};
