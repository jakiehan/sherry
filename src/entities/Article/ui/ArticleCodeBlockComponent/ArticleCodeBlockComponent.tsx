import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';
import { Code } from '@/shared/ui/redesigned/Code';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }: ArticleCodeBlockComponentProps) => {
    return (
      <div className={classNames('', {}, [className])}>
        <ToggleFeatures
          name="isAppRedesigned"
          on={<Code text={block.code} />}
          off={<CodeDeprecated text={block.code} />}
        />
      </div>
    );
  }
);

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
