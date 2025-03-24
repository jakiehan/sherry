import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleListItemRedesigned.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ArticleBlockType,
  ArticleTextBlock,
} from '../../../model/types/article';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye-v2.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticleDetails } from '@/app/providers/Router/constants/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleListItemProps } from '../ArticleListItem';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Flex';

export const ArticleListItemRedesigned = memo(
  ({ className, article, view, target }: ArticleListItemProps) => {
    const { t } = useTranslation('article');

    const views = (
      <HStack gap="8">
        <Icon Svg={EyeIcon} />
        <Text text={String(article.views)} />
      </HStack>
    );

    if (view === 'list') {
      const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT
      ) as ArticleTextBlock;

      return (
        <Card
          className={classNames('', {}, [className, cls[view]])}
          padding="24"
        >
          <HStack gap="8">
            <Avatar
              size={32}
              src={article.user.avatar}
            />
            <Text text={article.user.username} />
            <Text
              text={article.createdAt}
              align="right"
            />
          </HStack>
          <Text
            title={article.title}
            bold
            size="sizeL"
          />
          <VStack gap="16">
            <Text
              title={article.subtitle}
              bold
            />
            <AppImage
              className={cls.img}
              src={article.img}
              alt={article.title}
              fallback={
                <Skeleton
                  width="100%"
                  height={420}
                />
              }
            />
            {textBlock?.paragraphs && (
              <Text
                text={textBlock?.paragraphs.slice(0, 2).join('')}
                className={cls.textBlock}
              />
            )}
            <HStack
              max
              justify="between"
            >
              <AppLink
                to={getRouteArticleDetails(article.id)}
                target={target}
              >
                <Button variant="outline">{`${t('Читать далее')}...`}</Button>
              </AppLink>
              {views}
            </HStack>
          </VStack>
        </Card>
      );
    }

    return (
      <AppLink
        className={classNames('', {}, [className, cls[view]])}
        to={getRouteArticleDetails(article.id)}
        target={target}
      >
        <Card
          padding="0"
          className={cls.card}
        >
          <AppImage
            className={cls.img}
            src={article.img}
            alt={article.title}
            fallback={
              <Skeleton
                width="100%"
                height={141}
              />
            }
          />
          <VStack
            gap="4"
            className={cls.padding}
          >
            <Text
              className={cls.title}
              text={article.title}
            />
            <HStack
              max
              justify="between"
            >
              <Text
                text={article.createdAt}
                align="left"
              />
              {views}
            </HStack>
            <HStack
              max
              gap="4"
            >
              <Avatar
                size={32}
                src={article.user.avatar}
              />
              <Text
                text={article.user.username}
                bold
              />
            </HStack>
          </VStack>
        </Card>
      </AppLink>
    );
  }
);

ArticleListItemRedesigned.displayName = 'ArticleListItem';
