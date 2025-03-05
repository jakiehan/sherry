import { FC, ReactElement } from 'react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { useFeatureFlag } from '../../hooks/useGetFeatureFlag/useGetFeatureFlag';

interface ToggleFeaturesProps {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures: FC<ToggleFeaturesProps> = ({ on, off, name }) => {
  const isOn = useFeatureFlag(name);

  if (isOn) {
    return on;
  }

  return off;
};

ToggleFeatures.displayName = 'ToggleFeatures';
