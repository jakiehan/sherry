export const setRate = (rate: number, feedback = 'feedback') => {
  cy.getByTestId(`starRating${rate}`).click();
  cy.getByTestId('ratingCard.Input').type(feedback);
  cy.getByTestId('ratingCard.Send').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      setRate(rate: number, feedback: string): Chainable<void>;
    }
  }
}
