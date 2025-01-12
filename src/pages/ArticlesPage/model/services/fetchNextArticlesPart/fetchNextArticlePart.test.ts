import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk';
import { fetchNextArticlesPart } from './fetchNextArticlesPart';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPart.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlePage: {
        ids: [],
        entities: {},
        limit: 5,
        page: 2,
        hasMore: true,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    // dispatch вызвался 4 раза
    expect(thunk.dispatch).toBeCalledTimes(4);
    // функция fetchArticlesList была вызвана с нужным аргументом
    expect(fetchArticlesList).toHaveBeenCalledWith({});
  });

  test('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPart, {
      articlePage: {
        ids: [],
        entities: {},
        limit: 5,
        page: 2,
        hasMore: false, // больше нет данных для подгрузки
        isLoading: false,
      },
    });

    await thunk.callThunk();

    // dispatch вызвался 2 раза
    expect(thunk.dispatch).toBeCalledTimes(2);
    // функция fetchArticlesList не был вызван
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
