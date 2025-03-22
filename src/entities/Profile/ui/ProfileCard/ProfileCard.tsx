import { FC } from 'react';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedLoader,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { Profile } from '@/features/EditableProfileCard';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  readOnly?: boolean;
  error?: string;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<ProfileCardRedesignedSkeleton />}
        off={<ProfileCardDeprecatedLoader />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={<ProfileCardRedesignedError />}
        off={<ProfileCardDeprecatedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      name="isAppRedesigned"
      on={<ProfileCardRedesigned {...props} />}
      off={<ProfileCardDeprecated {...props} />}
    />
  );
};
