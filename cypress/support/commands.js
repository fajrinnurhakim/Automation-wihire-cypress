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
Cypress.Commands.add("loginSuccess", (email, password) => {
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get(".btn.btn-primary").contains("Login").click();
    cy.url().should("include", "/jobs");
});

Cypress.Commands.add(
    "registerJobCompany1",
    (name, email, password, confirm) => {
        cy.get("#name").type(name);
        cy.get("#email").type(email);
        cy.get("#password").type(password);
        cy.get("#confirmPassword").type(confirm);
        cy.get("button.btn.btn-primary").contains("Continue").click();
    }
);

Cypress.Commands.add(
    "registerJobCompany2",
    (province, address, company, total) => {
        cy.get("#province").click();
        cy.contains(".select__menu", province).click();
        cy.get("#address").click();
        cy.contains(".select__menu", address).click();
        cy.get("#companyScope").click();
        cy.contains(".select__menu", company).click();
        cy.get("#totalEmployee").click();
        cy.contains(".select__menu", total).click();
        cy.get("button.btn.btn-primary")
            .contains("Create Company Account")
            .click();
    }
);

Cypress.Commands.add(
    "registerJobSeeker1",
    (name, email, password, confirm, gender) => {
        cy.get("#name").type(name);
        cy.get("#email").type(email);
        cy.get("#password").type(password);
        cy.get("#confirmPassword").type(confirm);
        cy.get("#gender").click();
        cy.contains(".select__menu", gender).click();
        cy.get("button.btn.btn-primary").contains("Continue").click();
    }
);

Cypress.Commands.add(
    "registerJobSeeker2",
    (province, address, birth, phone) => {
        cy.get("#province").click();
        cy.contains(".select__menu", province).click();
        cy.get("#address").click();
        cy.contains(".select__menu", address).click();
        cy.get("#birthDate").type(birth);
        cy.get("#phoneNumber").type(phone);
        cy.get("button.btn.btn-primary").contains("Create Account").click();
    }
);
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
