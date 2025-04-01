import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import {
  useAllFeaturesFlags,
  useFeatureFlag,
} from '@/shared/lib/hooks/useGetFeatureFlag/useGetFeatureFlag';
import { useGetUserDataByIdQuery, useUserId } from '@/entities/User';
import { useSetFeaturesFlagsMutation } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { HStack } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { LOCALE_STORAGE_DESIGN_KEY } from '@/shared/constants/localstorage';

interface UIDesignSwitcherProps {
  className?: string;
}

export const UIDesignSwitcher = memo(({ className }: UIDesignSwitcherProps) => {
  const { t } = useTranslation('settings');

  const userId = useUserId();
  const isNewDesign = useFeatureFlag('isAppRedesigned');
  const allFeatures = useAllFeaturesFlags();

  const [setFeatures, { isLoading }] = useSetFeaturesFlagsMutation();
  const { isFetching } = useGetUserDataByIdQuery(userId!, {
    skip: !userId,
  });

  const onChangeDesign = (value: string) => {
    if (userId) {
      setFeatures({
        userId,
        features: { ...allFeatures, isAppRedesigned: value === 'new' },
      });
    }
  };

  const options = [
    {
      value: 'new',
      content: t('Новый'),
    },
    {
      value: 'old',
      content: t('Старый'),
    },
  ];

  if (isLoading || isFetching) {
    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Skeleton
            width={230}
            height={32}
          />
        }
        off={
          <SkeletonDeprecated
            width={230}
            height={32}
          />
        }
      />
    );
  }

  return (
    <HStack gap="4">
      <Text text={`${t('Вариант дизайна')}:`} />
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <ListBox
            value={isNewDesign ? 'new' : 'old'}
            options={options}
            onChange={onChangeDesign}
          />
        }
        off={
          <ListBoxDeprecated
            value={isNewDesign ? 'new' : 'old'}
            options={options}
            onChange={onChangeDesign}
          />
        }
      />
    </HStack>
  );
});

UIDesignSwitcher.displayName = 'UIDesignSwitcher';
