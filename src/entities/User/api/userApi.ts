import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { JsonSettings } from '@/shared/types/jsonSettings';
import { FeatureFlags } from '@/shared/types/featureFlags';

interface SetJsonSettingsRequest {
  userId: string;
  jsonSettings: JsonSettings;
}

interface SetFeaturesFlagsRequest {
  userId: string;
  features: FeatureFlags;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // jsonSettings нужны например для хранения темы пользователя(чтобы в любом браузере была одна)
    // какие то флаги - первое посещение сайта, просмотр определенного блока и т.д.
    setJsonSettings: build.mutation<User, SetJsonSettingsRequest>({
      query: ({ jsonSettings, userId }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          jsonSettings,
        },
      }),
    }),
    setFeaturesFlags: build.mutation<User, SetFeaturesFlagsRequest>({
      query: ({ features, userId }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features,
        },
      }),
      invalidatesTags: ['user'],
    }),
    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
      providesTags: ['user'],
    }),
  }),
});

export const {
  useSetJsonSettingsMutation,
  useGetUserDataByIdQuery,
  useSetFeaturesFlagsMutation,
} = userApi;
