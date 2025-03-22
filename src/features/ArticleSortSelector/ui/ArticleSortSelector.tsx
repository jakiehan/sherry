import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptions } from '@/shared/ui/deprecated/Select';
import { ArticleSortField } from '../../../entities/Article/model/types/article';
import { SortOrder } from '@/shared/types/sort';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Text } from '@/shared/ui/redesigned/Text';

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <div
            className={classNames(cls.articleSortSelectorRedesigned, {}, [
              className,
            ])}
          >
            <Text text={`${t('Сортировать по')}:`} />
            <ListBox
              value={sort}
              options={sortFieldOptions}
              onChange={onChangeSort}
            />
            <ListBox
              value={order}
              options={orderOptions}
              onChange={onChangeOrder}
            />
          </div>
        }
        off={
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
        }
      />
    );
  }
);

ArticleSortSelector.displayName = 'ArticleSortSelector';
