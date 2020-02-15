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

export const parseArticle = async (
  slug: string
): Promise<ArticleFile | null> => {
  try {
    const file: ArticleFileImport = await import(`../articles/${slug}.md`);
    const data = matter(file.default) as ArticleFile;
    return data;
  } catch {
    return null;
  }
};
