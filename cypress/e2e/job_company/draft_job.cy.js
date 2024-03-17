import draft_job from "../../support/page_object/job_company/draft_job";
import list_job from "../../support/page_object/job_company/list_job";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("View draft", () => {
        draft_job.viewDraft();
    });

    it("Edit draft", () => {
        draft_job.editDraft();
    });

    it("Delete draft", () => {
        draft_job.deleteDraft();
    });
});
