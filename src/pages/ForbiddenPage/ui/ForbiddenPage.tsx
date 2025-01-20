import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation('forbidden');

  return <Page>{t('У вас нет доступа к админ панели')}</Page>;
};

export default memo(ForbiddenPage);
