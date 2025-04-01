import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock;
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  ({ className, block }: ArticleTextBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleTextBlockComponent, {}, [className])}
      >
        {block?.title && (
          <ToggleFeatures
            name="isAppRedesigned"
            on={
              <Text
                title={block.title}
                className={cls.title}
              />
            }
            off={
              <TextDeprecated
                title={block.title}
                className={cls.title}
              />
            }
          />
        )}
        {block?.paragraphs?.map((paragraph, i) => (
          <ToggleFeatures
            key={i}
            name="isAppRedesigned"
            on={
              <Text
                text={paragraph}
                className={cls.paragraph}
              />
            }
            off={
              <TextDeprecated
                text={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  }
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
