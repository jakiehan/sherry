import { memo } from 'react';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import { Text as TetxDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentProps) => {
    return (
      <div className={classNames(cls.articleImageBlock, {}, [className])}>
        <AppImage
          className={cls.img}
          src={block.src}
          alt={block.title ?? 'Изображение'}
        />
        {block.title && (
          <ToggleFeatures
            name="isAppRedesigned"
            on={<Text text={block.title} />}
            off={<TetxDeprecated text={block.title} />}
          />
        )}
      </div>
    );
  }
);

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
