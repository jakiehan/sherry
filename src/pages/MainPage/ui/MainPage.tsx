import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <Page>
      {t('Главная страница')}
      <Counter />
    </Page>
  );
};

export default memo(MainPage);
