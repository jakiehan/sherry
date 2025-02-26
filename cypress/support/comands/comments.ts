export const addComment = (comment: string) => {
  cy.getByTestId('addCommentForm.Input').type(comment);
  cy.getByTestId('addCommentForm.Button').click();
};

declare global {
  namespace Cypress {
    interface Chainable {
      addComment(comment: string): Chainable<void>;
    }
  }
}
