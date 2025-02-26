import { Article } from '@/entities/Article';

const defaultArticle = {
  title: 'Тестовая статья',
  subtitle: 'Эта статья создается для тестирования e2e',
  img: 'https://rg.ru/uploads/images/210/44/69/iStock-1197288130_(1).jpg',
  views: 9999,
  createdAt: '16.11.2024',
  userId: '4',
  type: ['ECONOMICS'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'asas' },
      body: article ?? defaultArticle,
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: 'asas' },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
