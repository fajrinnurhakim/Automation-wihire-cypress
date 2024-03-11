import login from "../login";
const createData = require("../../../fixtures/createdata.json");

class createJob {
    createJobRequire() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Create Job").click();
        cy.wait(1000);
        cy.get("button.btn.btn-primary").contains("Submit").click();
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Job title is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Province is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Address is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Categories is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Skills is required"
        );
    }
    createJobSuccess() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Create Job").click();
        cy.wait(1000);
        cy.get("#title").type(createData["title"]);
        cy.get(".select__input-container").eq(0).click();
        cy.contains(createData["province"]).click();
        cy.get(".select__input-container").eq(1).click();
        cy.contains(createData["address"]).click();
        cy.get(".select__input-container").eq(2).click();
        cy.contains(createData["place"]).click();
        cy.get(".select__input-container").eq(3).click();
        cy.contains(createData["type"]).click();
        cy.get("#minimalSalary").type(createData["minimalSalary"]);
        cy.get("#maximalSalary").type(createData["maximalSalary"]);
        cy.get(".select__input-container").eq(4).click();
        cy.contains(createData["categories"]).click();
        cy.get(".select__input-container").eq(5).click();
        cy.contains(createData["skills"]).click();
        cy.get(".ql-editor").eq(0).type(createData["jobdescription"]);
        cy.get(".ql-editor").eq(1).type(createData["minimumqualification"]);
        cy.get(".ql-editor").eq(2).type(createData["benefit"]);
        cy.get("button.btn.btn-primary").contains("Submit").click();
        cy.get(".Toastify__toast").should("be.visible");
    }
    createJobDraftSuccess() {
        login.loginAsJobCompany();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Create Job").click();
        cy.wait(1000);
        cy.get("#title").type(createData["title"]);
        cy.get(".select__input-container").eq(0).click();
        cy.contains(createData["province"]).click();
        cy.get(".select__input-container").eq(1).click();
        cy.contains(createData["address"]).click();
        cy.get(".select__input-container").eq(2).click();
        cy.contains(createData["place"]).click();
        cy.get(".select__input-container").eq(3).click();
        cy.contains(createData["type"]).click();
        cy.get("#minimalSalary").type(createData["minimalSalary"]);
        cy.get("#maximalSalary").type(createData["maximalSalary"]);
        cy.get(".select__input-container").eq(4).click();
        cy.contains(createData["categories"]).click();
        cy.get(".select__input-container").eq(5).click();
        cy.contains(createData["skills"]).click();
        cy.get(".ql-editor").eq(0).type(createData["jobdescription"]);
        cy.get(".ql-editor").eq(1).type(createData["minimumqualification"]);
        cy.get(".ql-editor").eq(2).type(createData["benefit"]);
        cy.get("input.checkbox").click();
        cy.get("button.btn.btn-primary").contains("Submit").click();
        cy.get(".Toastify__toast").should("be.visible");
    }
}

export default new createJob();
