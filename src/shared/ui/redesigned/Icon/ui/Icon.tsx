import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  classNameBtn?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo(
  ({
    className,
    classNameBtn,
    Svg,
    width = 32,
    height = 32,
    onClick,
    clickable,
    ...otherProps
  }: IconProps) => {
    const icon = (
      <Svg
        className={classNames(cls.icon, {}, [className])}
        style={{ width: width, height: height }}
        onClick={undefined}
        {...otherProps}
      />
    );

    if (clickable) {
      return (
        <button
          type="button"
          className={classNames(cls.button, {}, [classNameBtn])}
          onClick={onClick}
          style={{ height, width }}
        >
          {icon}
        </button>
      );
    }

    return icon;
  }
);

Icon.displayName = 'Icon';
