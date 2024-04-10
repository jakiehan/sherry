import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

//пример как работает реселект
export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value
);
