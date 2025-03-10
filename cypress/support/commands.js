// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators';

Cypress.Commands.add('command_login', () => {
    cy.get(loc.LOGIN.USER).type('rafaeltec_@live.com');
    cy.get(loc.LOGIN.PASSWORD).type('710092600');
    cy.get(loc.LOGIN.BTN_LOGIN).click();
});

Cypress.Commands.add('command_reset', () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.RESET).click();
});

Cypress.Commands.add('command_removeSession', () =>{
    localStorage.removeItem("@barriga/token");
    localStorage.removeItem("@barriga/user");
});