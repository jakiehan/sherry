import { memo, useState } from 'react';
import Star from '@/app/styles/assets/icons/star.svg';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface StarRatingProps {
  className?: string;
  onSelect?: (star: number) => void;
  selectedStars?: number;
  size?: number;
}

const STARS = [1, 2, 3, 4, 5];

export const StarRating = memo(
  ({ className, selectedStars = 0, size = 30, onSelect }: StarRatingProps) => {
    const [currentStarCount, setCurrentStarCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const handleHover = (starCount: number) => () => {
      if (!isSelected) {
        setCurrentStarCount(starCount);
      }
    };

    const handleLeave = () => {
      if (!isSelected) {
        setCurrentStarCount(0);
      }
    };

    const handleClick = (starCount: number) => () => {
      if (!isSelected) {
        onSelect?.(starCount);
        setCurrentStarCount(starCount);
        setIsSelected(true);
      }
    };

    return (
      <div className={classNames(cls.starRating, {}, [className])}>
        {STARS.map((star) => (
          <Star
            className={classNames(cls.starIcon, {
              [cls.hovered]: currentStarCount >= star,
              [cls.selected]: isSelected,
            })}
            width={size}
            height={size}
            key={star}
            onMouseEnter={handleHover(star)}
            onMouseLeave={handleLeave}
            onClick={handleClick(star)}
          />
        ))}
      </div>
    );
  }
);

StarRating.displayName = 'StarRating';
