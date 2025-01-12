import { memo, ReactNode } from 'react';
import cls from './ArticleViewSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { View } from 'entities/Article';
import PlaceIcon from 'app/styles/assets/icons/place.svg';
import ListIcon from 'app/styles/assets/icons/list.svg';
import { Button } from 'shared/Button';

interface ArticleViewSwitcherProps {
  className?: string;
  views: View;
  onClick?: (view: View) => void;
}

type ViewTypes = {
  view: View;
  icon: ReactNode;
};

const viewTypes: ViewTypes[] = [
  {
    view: 'place',
    icon: <PlaceIcon className={cls.icon} />,
  },
  {
    view: 'list',
    icon: <ListIcon className={cls.icon} />,
  },
];

export const ArticleViewSwitcher = memo(
  ({ className, views, onClick }: ArticleViewSwitcherProps) => {
    return (
      <div className={classNames(cls.articleViewSwitcher, {}, [className])}>
        {viewTypes.map((view) => (
          <Button
            key={view.view}
            className={classNames(cls.btn, {
              [cls.selected]: views === view.view,
            })}
            variant="clear"
            onClick={() => onClick?.(view.view)}
          >
            {view.icon}
          </Button>
        ))}
      </div>
    );
  }
);

ArticleViewSwitcher.displayName = 'ArticleViewSwitcher';
