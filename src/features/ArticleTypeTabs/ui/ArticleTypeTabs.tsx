import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '../../../entities/Article/model/types/article';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Tabs
            tabs={tabs}
            value={value}
            onTabClick={onChangeType}
          />
        }
        off={
          <TabsDeprecated
            tabs={tabs}
            value={value}
            onTabClick={onChangeType}
          />
        }
      />
    );
  }
);

ArticleTypeTabs.displayName = 'ArticleTypeTabs';
