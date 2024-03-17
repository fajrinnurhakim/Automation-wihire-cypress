import job_seeker_application from "../../support/page_object/job_seeker/job_seeker_application";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display application page", () => {
        job_seeker_application.viewApplicationPage();
    });

    it("Display application by categories", () => {
        job_seeker_application.viewApplicationCategories();
    });

    it("Display application list", () => {
        job_seeker_application.viewApplicationList();
    });
});
