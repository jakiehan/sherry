import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Page data-testid="about-page">{t('О сайте')}</Page>;
};

export default memo(AboutPage);
