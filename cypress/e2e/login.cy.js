import login from "../support/page_object/login";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display Login Page", () => {
        login.loginPage();
    });

    it("Login Required", () => {
        login.loginRequired();
    });
    
    it("Login as job company success", () => {
        login.loginAsJobCompany();
    });
    
    it("Login as job seeker success", () => {
        login.loginAsJobSeeker();
    });
});
