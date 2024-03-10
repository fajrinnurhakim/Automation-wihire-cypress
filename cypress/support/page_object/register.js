class register {
    registerPage() {
        cy.get("button.btn.btn-primary")
            .contains("Begin Your Future Here")
            .click();
        cy.url().should("include", "/register");
    }

    registerJobCompanySuccess() {
        this.registerPage();
        cy.get("button.btn.btn-primary")
            .contains("REGISTER AS JOB COMPANY")
            .click();
        cy.registerJobCompany1(
            Cypress.env("name_register"),
            Cypress.env("email_register"),
            Cypress.env("password_register"),
            Cypress.env("password_confirm_register")
        );
        cy.registerJobCompany2(
            Cypress.env("province_register"),
            Cypress.env("address_register"),
            Cypress.env("company_scope_register"),
            Cypress.env("total_employee_register")
        );
    }

    registerJobCompanyRequired() {
        this.registerPage();
        cy.get("button.btn.btn-primary")
            .contains("REGISTER AS JOB COMPANY")
            .click();
        cy.get("button.btn.btn-primary").contains("Continue").click();
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Company name is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Company email is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Password is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Confirm password is required"
        );
    }

    registerJobSeekerSuccess() {
        this.registerPage();
        cy.get("button.btn.btn-primary.btn-outline")
            .contains("REGISTER AS JOB SEEKER")
            .click();
        cy.registerJobSeeker1(
            Cypress.env("name_register"),
            Cypress.env("email_register"),
            Cypress.env("password_register"),
            Cypress.env("password_confirm_register"),
            Cypress.env("gender_register")
        );
        cy.registerJobSeeker2(
            Cypress.env("province_register"),
            Cypress.env("address_register"),
            Cypress.env("date_register"),
            Cypress.env("phone_register")
        );
    }

    registerJobSeekerRequired() {
        this.registerPage();
        cy.get("button.btn.btn-primary.btn-outline")
            .contains("REGISTER AS JOB SEEKER")
            .click();
        cy.get("button.btn.btn-primary").contains("Continue").click();
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Name is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Email is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Password is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Confirm password is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Gender is required"
        );
    }
}

export default new register();
