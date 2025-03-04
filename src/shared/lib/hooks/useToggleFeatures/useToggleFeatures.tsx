import { FeatureFlags } from '@/shared/types/featureFlags';
import { useFeatureFlag } from '../useGetFeatureFlag/useGetFeatureFlag';
import { ReactNode } from 'react';

interface ToggleFeatureProps<T> {
  name: keyof FeatureFlags;
  on: () => T;
  off: () => T;
}

export const useToggleFeatures = <T extends ReactNode>({
  name,
  off,
  on,
}: ToggleFeatureProps<T>) => {
  const isOn = useFeatureFlag(name);

  if (isOn) {
    return on();
  }
  return off();
};
