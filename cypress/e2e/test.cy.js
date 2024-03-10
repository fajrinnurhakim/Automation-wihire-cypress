const { default: register } = require("../support/page_object/register");

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display Wihire Website", () => {});
});
