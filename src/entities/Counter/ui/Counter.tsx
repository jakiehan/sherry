import { FC } from 'react';
import { Button } from '@/shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h2 data-testid="value-title">{value}</h2>
      <Button
        onClick={increment}
        data-testid="increment-btn"
      >
        {t('increment')}
      </Button>
      <Button
        onClick={decrement}
        data-testid="decrement-btn"
      >
        {t('decrement')}
      </Button>
    </div>
  );
};
