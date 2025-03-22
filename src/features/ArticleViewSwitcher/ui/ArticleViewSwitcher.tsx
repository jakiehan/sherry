import React, { memo } from 'react';
import cls from './ArticleViewSwitcher.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { View } from '@/entities/Article';
import PlaceIcon from '@/shared/assets/icons/place.svg';
import ListIcon from '@/shared/assets/icons/list.svg';
import PlaceIconRedesigned from '@/shared/assets/icons/burger.svg';
import ListIconRedesigned from '@/shared/assets/icons/tile.svg';
import { Button } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/components/ToggleFeatures';
import { toggleFeatures } from '@/shared/lib/featureFlags';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Flex';

interface ArticleViewSwitcherProps {
  className?: string;
  views: View;
  onClick?: (view: View) => void;
}

type ViewTypes = {
  view: View;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
};

const viewTypes: ViewTypes[] = [
  {
    view: 'place',
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => PlaceIconRedesigned,
      off: () => PlaceIcon,
    }),
  },
  {
    view: 'list',
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIconRedesigned,
      off: () => ListIcon,
    }),
  },
];

export const ArticleViewSwitcher = memo(
  ({ className, views, onClick }: ArticleViewSwitcherProps) => {
    const toggleView = (newView: View) => () => {
      onClick?.(newView);
    };

    return (
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <Card
            className={classNames(cls.articleViewSwitcherRedesigned, {}, [
              className,
            ])}
          >
            <HStack gap="8">
              {viewTypes.map((view) => (
                <Icon
                  key={view.view}
                  className={classNames('', {
                    [cls.notSelected]: views !== view.view,
                  })}
                  Svg={view.icon}
                  clickable
                  onClick={toggleView(view.view)}
                />
              ))}
            </HStack>
          </Card>
        }
        off={
          <div className={classNames(cls.articleViewSwitcher, {}, [className])}>
            {viewTypes.map((view) => (
              <Button
                key={view.view}
                className={classNames(cls.btn, {
                  [cls.selected]: views === view.view,
                })}
                variant="clear"
                onClick={toggleView(view.view)}
              >
                <view.icon className={cls.icon} />
              </Button>
            ))}
          </div>
        }
      />
    );
  }
);

ArticleViewSwitcher.displayName = 'ArticleViewSwitcher';
