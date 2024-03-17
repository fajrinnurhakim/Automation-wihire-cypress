import login from "../login";

class jobSeekerApplication {
    viewApplicationPage() {
        login.loginAsJobSeeker();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Applications").click();
    }

    viewApplicationCategories() {
        this.viewApplicationPage();
        cy.get(".btn.btn-primary.snap-start").eq(0).click();
        cy.url().should("include", "/applications");
        cy.get(".btn.btn-primary.snap-start").eq(1).click();
        cy.url().should("include", "/applications?status=ONPROGRESS");
        cy.get(".btn.btn-primary.snap-start").eq(2).click();
        cy.url().should("include", "/applications?status=ONREVIEW");
        cy.get(".btn.btn-primary.snap-start").eq(3).click();
        cy.url().should("include", "/applications?status=APPROVED");
        cy.get(".btn.btn-primary.snap-start").eq(4).click();
        cy.url().should("include", "/applications?status=DECLINE");
    }
    viewApplicationList() {
        this.viewApplicationPage();
        cy.get("div>div>div>div>a").eq(1).click();
        cy.contains("You already applied to this job");
    }
}

export default new jobSeekerApplication();
