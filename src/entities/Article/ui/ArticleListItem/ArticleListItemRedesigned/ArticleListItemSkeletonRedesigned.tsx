import { memo } from 'react';
import cls from './ArticleListItemRedesigned.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';

export const ArticleListItemSkeletonRedesigned = memo(
  ({ className, view }: ArticleListItemSkeletonProps) => {
    if (view === 'list') {
      return (
        <Card
          className={classNames(cls.articleListItem, {}, [
            className,
            cls[view],
          ])}
          padding="24"
        >
          <HStack gap="8">
            <Skeleton
              width={32}
              height={32}
              borderRadius="50%"
            />
            <Skeleton
              width={80}
              height={16}
            />
            <Skeleton
              width={80}
              height={16}
            />
          </HStack>
          <Skeleton
            width={320}
            height={40}
          />
          <VStack gap="16">
            <Skeleton
              width={400}
              height={24}
            />
            <Skeleton
              width="100%"
              height={420}
            />
            <Skeleton
              width="100%"
              height={74}
            />
            <HStack
              max
              justify="between"
            >
              <Skeleton
                width={120}
                height={36}
              />
              <Skeleton
                width={120}
                height={36}
              />
            </HStack>
          </VStack>
        </Card>
      );
    }

    return (
      <Card
        padding="0"
        className={classNames(cls.card, {}, [className, cls[view]])}
      >
        <Skeleton
          width="100%"
          height={141}
        />
        <VStack
          gap="4"
          className={cls.padding}
        >
          <Skeleton
            width="100%"
            height={96}
          />
          <HStack
            max
            justify="between"
          >
            <Skeleton
              width={80}
              height={32}
            />
            <Skeleton
              width={80}
              height={32}
            />
          </HStack>
          <HStack
            max
            gap="4"
          >
            <Skeleton
              width={32}
              height={32}
              borderRadius="50%"
            />
            <Skeleton
              width={80}
              height={24}
            />
          </HStack>
        </VStack>
      </Card>
    );
  }
);

ArticleListItemSkeletonRedesigned.displayName =
  'ArticleListItemSkeletonRedesigned';
