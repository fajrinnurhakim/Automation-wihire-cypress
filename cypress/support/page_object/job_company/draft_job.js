import login from "../login";

class draftJob {
    viewDraft() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Draft Job").click();
    }
    editDraft() {
        this.viewDraft();
        cy.wait(3000);
        cy.get("div>div>a").eq(0).click();
        cy.get(".btn.btn-primary.btn-warning").contains("EDIT").click();
        cy.get(".select__input-container").eq(6).click();
        cy.contains("Posted").click();
        cy.get(".btn.btn-primary").contains("Save").click();
        cy.get(".Toastify__toast").should("be.visible");
    }
    deleteDraft() {
        this.viewDraft();
        cy.wait(3000);
        cy.get("div>div>a").eq(0).click();
        cy.get(".btn.btn-primary.btn-error").contains("DELETE").click();
        cy.get(".btn.btn-primary.btn-error").contains("Delete").click();
    }
}

export default new draftJob();
