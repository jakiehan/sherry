import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/Select';
import { ArticleSortField } from '../../../entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';

interface ArticleSortSelectorProps {
  sort: ArticleSortField;
  order: SortOrder;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  className?: string;
}

export const ArticleSortSelector = memo(
  ({
    className,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
  }: ArticleSortSelectorProps) => {
    const { t } = useTranslation('article');

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('дате создания'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('названию'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('просмотрам'),
        },
      ],
      [t]
    );

    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию'),
        },
        {
          value: 'desc',
          content: t('убыванию'),
        },
      ],
      [t]
    );

    return (
      <div className={classNames(cls.articleSortSelector, {}, [className])}>
        <Select
          value={sort}
          options={sortFieldOptions}
          label={t('Сортировать по')}
          onChange={onChangeSort}
        />
        <Select
          value={order}
          options={orderOptions}
          label={t('по')}
          onChange={onChangeOrder}
        />
      </div>
    );
  }
);

ArticleSortSelector.displayName = 'ArticleSortSelector';
