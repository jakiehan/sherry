import { buildSelectors } from '../../store';
import { FeatureFlags } from '@/shared/types/featureFlags';

export const [useFeatureFlag, getFeatureFlags] = buildSelectors(
  (state, flag: keyof FeatureFlags) => state?.user?.autData?.features?.[flag]
);
