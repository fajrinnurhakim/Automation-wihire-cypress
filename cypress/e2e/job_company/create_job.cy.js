import create_job from "../../support/page_object/job_company/create_job";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Create job Require", () => {
        create_job.createJobRequire();
    });

    it("Create Job", () => {
        create_job.createJobSuccess();
    });

    it("Create Draft Job", () => {
        create_job.createJobDraftSuccess();
    });
});
