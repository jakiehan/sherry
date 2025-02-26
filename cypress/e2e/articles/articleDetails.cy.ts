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

  it('Загрузилась страница со статьей', () => {
    cy.getByTestId('articleDetails').should('exist');
  });

  it('загрузился список рекомендаций', () => {
    cy.getByTestId('articleRecommendationsList').should('exist');
  });

  it('Отправляем комментарий', () => {
    const comment = 'Тестовый комментарий';

    cy.getByTestId('articleDetails');
    cy.getByTestId('addCommentForm').scrollIntoView();
    cy.addComment(comment);
    cy.getByTestId('commentCard').should('have.length', 1);
  });

  it('Ставим оценку', () => {
    const rate = 3;

    cy.getByTestId('articleDetails');
    cy.getByTestId('ratingCard').scrollIntoView();
    cy.setRate(rate, 'feedback');
    cy.get('[data-selected=true]').should('have.length', rate);
  });
});
