import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test one param', () => {
    const params = getQueryParams({
      test: 'value',
    });

    expect(params).toBe('?test=value');
  });

  test('test multiple params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: 'value2',
    });

    expect(params).toBe('?test=value&test2=value2');
  });

  test('test undefined params', () => {
    const params = getQueryParams({
      test: 'value',
      test2: undefined,
    });

    expect(params).toBe('?test=value');
  });
});
