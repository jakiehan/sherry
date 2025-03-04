import { UserRole } from '../constants/constants';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { JsonSettings } from '@/shared/types/jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar: string;
  roles?: UserRole[];
  features?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserSchema {
  autData?: User;
  _inited: boolean;
}
