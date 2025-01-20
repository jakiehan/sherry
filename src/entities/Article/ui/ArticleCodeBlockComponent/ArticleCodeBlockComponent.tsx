import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames('', {}, [className])}>
        <Code text={block.code} />
      </div>
    );
  }
);

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
