import { rtkApi } from 'shared/api/rtkApi';

const articleRecommendationsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendations: build.query({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetArticleRecommendationsQuery } =
  articleRecommendationsListApi;
