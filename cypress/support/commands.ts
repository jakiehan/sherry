/// <reference types="cypress" />

import { login } from './comands/login';
import { addComment } from './comands/comments';
import { setRate } from './comands/rating';
import { getByTestId } from './comands/common';
import * as profileCommands from './comands/profile';
import * as articleCommands from './comands/article';

// -- This is a parent command --
Cypress.Commands.add('login', login);
Cypress.Commands.add('addComment', addComment);
Cypress.Commands.add('setRate', setRate);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);

export {};
