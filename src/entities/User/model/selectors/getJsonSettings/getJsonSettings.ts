import { buildSelectors } from '@/shared/lib/store';
import { JsonSettings } from '@/shared/types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};

export const [useJsonSettings, getJsonSettings] = buildSelectors(
  (state) => state.user.autData?.jsonSettings ?? defaultJsonSettings
);
