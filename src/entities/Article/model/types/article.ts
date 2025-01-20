import { User } from '@/entities/User';

export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  CODE = 'CODE',
}

export enum ArticleSortField {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED = 'createdAt',
}

interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock =
  | ArticleImageBlock
  | ArticleCodeBlock
  | ArticleTextBlock;

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
  ANIMALS = 'ANIMALS',
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
  user: User;
}

export type View = 'place' | 'list';
