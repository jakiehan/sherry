import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelectors } from '@/shared/lib/store';

export const getUserAuthData = (state: StateSchema) => state.user.autData;

export const [useUserId, getUserId] = buildSelectors(
  (state) => state.user.autData?.id
);
