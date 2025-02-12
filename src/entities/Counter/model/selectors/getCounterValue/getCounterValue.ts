import { buildSelectors } from '@/shared/lib/store';

//пример как работает реселект
/*export const getCounterValue = createSelector(
  getCounter,
  (counter) => counter.value
);*/

export const [useCounterValue, getCounterValue] = buildSelectors(
  (state) => state.counter.value
);
