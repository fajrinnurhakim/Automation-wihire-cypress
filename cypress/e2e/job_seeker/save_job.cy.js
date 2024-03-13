import job_seeker_save from "../../support/page_object/job_seeker/job_seeker_save";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display save page", () => {
        job_seeker_save.viewSavePage();
    });

    it("Display save job", () => {
        job_seeker_save.viewSaveList();
    });

    it("Unsave job", () => {
        job_seeker_save.unSaveList();
    });
});
