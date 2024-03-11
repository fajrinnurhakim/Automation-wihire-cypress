import login from "../login";

class listJob {
    viewJob() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("div>div>a").eq(0).click();
    }

    listCategory() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("button.btn.btn-primary").contains("Posted").click();
        cy.url().should("include", "/jobs?status=POSTED");
        cy.get("button.btn.btn-primary").contains("Closed").click();
        cy.url().should("include", "/jobs?status=CLOSED");
        cy.wait(1000);
    }

    listSearch() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get('input[name="title"]').type("QA Engineer");
        cy.wait(1500);
        cy.get('input[name="address"]').type("Kabupaten Pelalawan");
        cy.wait(1500);
    }

    listDropdown() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get(".form-control").eq(0).click();
        cy.get(".dropdown-content").eq(2).click();
        cy.get(".form-control").eq(1).click();
        cy.get(".dropdown-content").eq(2).click();
        cy.get(".form-control").eq(2).click();
        cy.get(".dropdown-content").eq(2).click();
        cy.get(".form-control").eq(3).type("3000000");
        cy.wait(1500);
    }
}

export default new listJob();
