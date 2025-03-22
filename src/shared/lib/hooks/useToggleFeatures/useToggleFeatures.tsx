import { FeatureFlags } from '@/shared/types/featureFlags';
import { useFeatureFlag } from '../useGetFeatureFlag/useGetFeatureFlag';

interface ToggleFeatureProps<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const useToggleFeatures = <T extends any>({
  name,
  off,
  on,
}: ToggleFeatureProps<T>): T => {
  const isOn = useFeatureFlag(name);

  if (isOn) {
    return on();
  }
  return off();
};
