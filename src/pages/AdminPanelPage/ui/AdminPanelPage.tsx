import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation('admin');

  return <Page data-testid="admin-panel-page">{t('Админ панель')}</Page>;
};

export default memo(AdminPanelPage);
