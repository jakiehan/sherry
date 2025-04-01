import { memo } from 'react';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-up.svg';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo(
  ({ className }: ScrollToTopButtonProps) => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Icon
        className={className}
        Svg={ArrowIcon}
        clickable
        onClick={handleClick}
      />
    );
  }
);

ScrollToTopButton.displayName = 'ScrollToTopButton';
