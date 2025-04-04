import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { UIDesignSwitcher } from '@/features/UIDesignSwitcher';
import { VStack } from '@/shared/ui/redesigned/Flex';

const SettingsPage = () => {
  const { t } = useTranslation('settings');

  return (
    <Page data-testid="settings-page">
      <VStack gap="16">
        <Text title={t('Настройки приложения')} />
        <UIDesignSwitcher />
      </VStack>
    </Page>
  );
};

export default memo(SettingsPage);
