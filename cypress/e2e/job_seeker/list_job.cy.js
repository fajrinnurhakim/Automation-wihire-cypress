import job_seeker_list from "../../support/page_object/job_seeker/job_seeker_list";

describe("Wihire Website", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("BASE_URL"));
    });

    it("Job Seeker Display list category", () => {
        job_seeker_list.listCategory();
    });

    it("Job Seeker Display list search", () => {
        job_seeker_list.listSearch();
    });

    it("Job Seeker Display list dropdown", () => {
        job_seeker_list.listDropdown();
    });

    it("Job Seeker view Job", () => {
        job_seeker_list.viewJob();
    });

    it("Job Seeker save Job", () => {
        job_seeker_list.saveJob();
    });

    it("Job Seeker apply Job", () => {
        job_seeker_list.applyJob();
    });
});
