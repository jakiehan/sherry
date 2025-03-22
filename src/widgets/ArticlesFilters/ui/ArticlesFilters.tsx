import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesFilters.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Flex';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { Icon } from '@/shared/ui/redesigned/Icon';
import SearchIcon from '@/shared/assets/icons/search.svg';

interface ArticlesFiltersProps {
  className?: string;
  search: string | number;
  onChangeSearch: (value: string) => void;
  type: ArticleType;
  onChangeType: (value: ArticleType) => void;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticlesFilters = memo(
  ({
    className,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    onChangeSearch,
    search,
    onChangeType,
    type,
  }: ArticlesFiltersProps) => {
    const { t } = useTranslation('article');

    return (
      <Card
        className={classNames(cls.articlesFilters, {}, [className])}
        padding="24"
      >
        <VStack gap="24">
          <Input
            value={search}
            onChange={onChangeSearch}
            placeholder={t('Найти')}
            addonLeft={<Icon Svg={SearchIcon} />}
          />
          <ArticleTypeTabs
            value={type}
            onChangeType={onChangeType}
          />
          <ArticleSortSelector
            onChangeSort={onChangeSort}
            sort={sort}
            onChangeOrder={onChangeOrder}
            order={order}
          />
        </VStack>
      </Card>
    );
  }
);

ArticlesFilters.displayName = 'ArticlesFilters';
