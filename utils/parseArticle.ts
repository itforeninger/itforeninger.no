import matter, { GrayMatterFile } from 'gray-matter';

interface ArticleFileImport {
  default: matter.Input;
}

export interface ArticleFile extends GrayMatterFile<Buffer> {
  data: {
    title: string;
    author: string;
    publishedDate: string;
    modifiedDate: string;
    summary: string;
  };
  content: string;
  excerpt?: string;
  orig: null;
}

interface ArticleFileMatter {
  title: string;
  author: string;
  publishedDate: Date;
  modifiedDate: Date;
  summary: string;
}

type RawArticleFile = Omit<
  Omit<ArticleFile, 'publishedDate'>,
  'modifiedDate'
> & { data: ArticleFileMatter };

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
        publishedDate: content.data.publishedDate.toISOString(),
        modifiedDate: content.data.modifiedDate.toISOString(),
      },
      orig: null,
    };
    return article;
  } catch {
    return null;
  }
};
