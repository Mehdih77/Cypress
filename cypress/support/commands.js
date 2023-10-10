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

import "cypress-file-upload"

Cypress.Commands.add("SignIn", () => {
  cy.visit("/#/login");
  cy.title().should("eq", "Conduit");
  cy.location("protocol").should("eq", "https:");
  cy.get("input[type='email']").type("test-cypress@test.com");
  cy.get("input[type='password']").type("test123");
  cy.get(".btn").contains("Sign in").should("exist").click();
  cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
