class login {
    loginPage() {
        cy.get("button.btn.btn-primary.btn-outline")
            .contains("Login To Your Existing Account")
            .click();
        cy.url().should("include", "/login");
    }

    loginAsJobSeeker() {
        this.loginPage();
        cy.loginSuccess(
            Cypress.env("email_login"),
            Cypress.env("password_login")
        );
    }

    loginAsJobCompany() {
        this.loginPage();
        cy.loginSuccess(
            Cypress.env("email_login2"),
            Cypress.env("password_login2")
        );
    }

    loginRequired() {
        this.loginPage();
        cy.get("button.btn.btn-primary").contains("Login").click();
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Email is required"
        );
        cy.get("span.label-text-alt.text-error").should(
            "contain.text",
            "Password is required"
        );
    }

    loginJobSeekerSuccess() {
        this.loginPage();
        cy.get("button.btn.btn-primary.btn-outline")
            .contains("login AS JOB SEEKER")
            .click();
        cy.loginJobSeeker1(
            Cypress.env("name_login"),
            Cypress.env("email_login"),
            Cypress.env("password_login"),
            Cypress.env("password_confirm_login"),
            Cypress.env("gender_login")
        );
        cy.loginJobSeeker2(
            Cypress.env("province_login"),
            Cypress.env("address_login"),
            Cypress.env("date_login"),
            Cypress.env("phone_login")
        );
    }

    loginJobSeekerRequired() {
        this.loginPage();
        cy.get("button.btn.btn-primary.btn-outline")
            .contains("login AS JOB SEEKER")
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

export default new login();
