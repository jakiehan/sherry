let articleId: string;

describe('Тестирование детальной страницы статьи', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      articleId = article.id;
      cy.visit(`articles/${articleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(articleId);
  });

  // Ниже проверяется загрузка данных о статье, поэтому работа на реальном API
  describe('Тестирование на реальном API', () => {
    it('Загрузилась страница со статьей', () => {
      cy.getByTestId('articleDetails').should('exist');
    });

    it('Отправляем комментарий', () => {
      const comment = 'Тестовый комментарий';

      cy.getByTestId('articleDetails');
      cy.getByTestId('addCommentForm').scrollIntoView();
      cy.addComment(comment);
      cy.getByTestId('commentCard').should('have.length', 1);
    });
  });

  // Фикстуры нужны, ждя того чтобы не гонять реальные запросы на бэк
  // В ниже идущих тестах проверяется загрузка рекомендаций и оценка
  // И для этого будет достаточно фикструр (стабов)
  describe('Тестирование на фикстурах', () => {
    beforeEach(() => {
      cy.intercept('GET', '**/articles/*', { fixture: 'articleDetails.json' });
    });

    it('загрузился список рекомендаций', () => {
      cy.getByTestId('articleRecommendationsList').should('exist');
    });

    it('Ставим оценку', () => {
      const rate = 3;
      cy.getByTestId('articleDetails');
      cy.getByTestId('ratingCard').scrollIntoView();
      cy.setRate(rate, 'feedback');
      cy.get('[data-selected=true]').should('have.length', rate);
    });
  });
});
