import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../model/types/article';
import { TabItem, Tabs } from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (value: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  ({ value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation('article');

    const tabs = useMemo<TabItem<ArticleType>[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('Все статьи'),
        },
        {
          value: ArticleType.IT,
          content: t('Айти'),
        },
        {
          value: ArticleType.ANIMALS,
          content: t('Животные'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Экономика'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Наука'),
        },
      ],
      [t]
    );

    return (
      <Tabs
        tabs={tabs}
        value={value}
        onTabClick={onChangeType}
      />
    );
  }
);

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
