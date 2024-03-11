import list_job from "../../support/page_object/job_company/list_job";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Display list category", () => {
        list_job.listCategory();
    });

    it("Display list search", () => {
        list_job.listSearch();
    });

    it("Display list dropdown", () => {
        list_job.listDropdown();
    });

    it("view Job", () => {
        list_job.viewJob();
    });
});
