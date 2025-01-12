import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from 'shared/Text';

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
          <Text
            title={block.title}
            className={cls.title}
          />
        )}
        {block?.paragraphs?.map((paragraph, i) => (
          <Text
            key={i}
            text={paragraph}
            className={cls.paragraph}
          />
        ))}
      </div>
    );
  }
);

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
