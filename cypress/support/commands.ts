/// <reference types="cypress" />

import { login } from './comands/login';

// -- This is a parent command --
Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>;
    }
  }
}

export {};
