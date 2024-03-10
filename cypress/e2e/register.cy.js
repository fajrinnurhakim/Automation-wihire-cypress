import register from "../support/page_object/register";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display Register Page", () => {
        register.registerPage();
    });

    it("Register As a Job Company Required", () => {
        register.registerJobCompanyRequired();
    });

    it("Register As a Job Seeker Required", () => {
        register.registerJobSeekerRequired();
    });

    it("Register As a Job Company Success", () => {
        register.registerJobCompanySuccess();
    });

    it("Register As a Job Seeker Success", () => {
        register.registerJobSeekerSuccess();
    });
});
