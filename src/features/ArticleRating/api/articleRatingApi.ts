import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/Rating';

interface ArticleRatingArg {
  userId: string;
  articleId: string;
}

interface RateArticleArg extends ArticleRatingArg {
  rate: number;
  feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], ArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useRateArticleMutation } =
  articleRatingApi;
