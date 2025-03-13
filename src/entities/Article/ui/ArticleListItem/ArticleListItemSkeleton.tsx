import { memo } from 'react';
import cls from './ArticleListItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { View } from '../../model/types/article';
import { Card } from '@/shared/ui/deprecated/Card';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';

interface ArticleListItemSkeletonProps {
  view: View;
  className?: string;
}

export const ArticleListItemSkeleton = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === 'list') {
      return (
        <div
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Skeleton
                width={30}
                height={30}
                borderRadius="50%"
              />
              <Skeleton
                width={120}
                height={16}
              />
              <Skeleton
                width={90}
                height={16}
                className={cls.dateSkeleton}
              />
            </div>
            <Skeleton
              width={280}
              height={24}
              className={cls.title}
            />
            <Skeleton
              width="100%"
              height={180}
              className={cls.img}
            />
            <Skeleton
              width={280}
              height={24}
              className={cls.title}
            />
            <Skeleton
              width="100%"
              height={180}
              className={cls.img}
            />
            <div className={cls.footer}>
              <Skeleton
                width={160}
                height={30}
              />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.articleListItem, {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <Skeleton
              width={200}
              height={200}
            />
          </div>
          <div className={cls.infoWrapper}>
            <Skeleton
              width={100}
              height={16}
            />
          </div>
          <Skeleton
            width={150}
            height={16}
            className={cls.title}
          />
        </Card>
      </div>
    );
  }
);

ArticleListItemSkeleton.displayName = 'ArticleListItem';
