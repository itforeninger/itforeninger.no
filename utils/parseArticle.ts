import matter, { GrayMatterFile } from "gray-matter";

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
