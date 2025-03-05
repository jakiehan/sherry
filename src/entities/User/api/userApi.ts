import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';
import { JsonSettings } from '@/shared/types/jsonSettings';

interface SetJsonSettingsRequest {
  userId: string;
  jsonSettings: JsonSettings;
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
    getUserDataById: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSetJsonSettingsMutation, useGetUserDataByIdQuery } = userApi;
