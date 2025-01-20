import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import { Text } from '@/shared/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    const { t } = useTranslation();

    return (
      <div className={classNames(cls.articleImageBlock, {}, [className])}>
        <img
          className={cls.img}
          src={block.src}
          alt={block.title ?? 'Изображение'}
        />
        {block.title && <Text text={block.title} />}
      </div>
    );
  }
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
