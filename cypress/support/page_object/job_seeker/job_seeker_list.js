import login from "../login";
import "cypress-file-upload";

class jobSeekerList {
    viewJob() {
        login.loginAsJobSeeker();
        cy.wait(3000);
        cy.get("div>div>div>div>a").eq(1).click();
    }

    listCategory() {
        login.loginAsJobSeeker();
        cy.wait(3000);
        cy.get("header>div>a>p").contains("All job").click();
        cy.url().should("include", "/jobs");
        cy.get("header>div>a>p").contains("Computer & IT").click();
        cy.url().should(
            "include",
            "/jobs?categories%5B%5D=computer%2B%26%2Bit"
        );
        cy.get("header>div>a>p").contains("Accounting & Finance").click();
        cy.url().should(
            "include",
            "/jobs?categories%5B%5D=accounting%2B%26%2Bfinance"
        );
        cy.get("header>div>a>p").contains("Art & Design").click();
        cy.url().should("include", "/jobs?categories%5B%5D=art%2B%26%2Bdesign");
        cy.get("header>div>a>p").contains("Cleaning & Facilities").click();
        cy.url().should(
            "include",
            "/jobs?categories%5B%5D=cleaning%2B%26%2Bfacilities"
        );
        cy.get("header>div>a>p").contains("Healthcare").click();
        cy.url().should("include", "/jobs?categories%5B%5D=healthcare");
        cy.get("header>div>a>p").contains("Healthcare").click();
        cy.url().should("include", "/jobs?categories%5B%5D=healthcare");
        cy.get("header>div>a>p")
            .contains("Community & Social Services")
            .click();
        cy.url().should(
            "include",
            "/jobs?categories%5B%5D=community%2B%26%2Bsocial%2Bservices"
        );
        cy.get("header>div>a>p").contains("Business Operations").click();
        cy.url().should(
            "include",
            "/jobs?categories%5B%5D=business%2Boperations"
        );
        cy.wait(1000);
    }

    listSearch() {
        login.loginAsJobSeeker();
        cy.wait(3000);
        cy.get('input[name="title"]').type("QA Engineer");
        cy.wait(1500);
        cy.get('input[name="address"]').type("Kabupaten Pelalawan");
        cy.wait(1500);
        cy.get('input[name="company"]').type("R Company");
        cy.wait(1500);
    }

    listDropdown() {
        login.loginAsJobSeeker();
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

    saveJob() {
        this.viewJob();
        cy.get("button.btn.btn-primary").contains("Save").click();
        cy.get("button.btn.btn-primary").contains("Unsave").should("exist");
    }

    applyJob() {
        this.viewJob();
        cy.get("button.btn.btn-primary").contains("Apply").click();
        cy.contains("Review your profile").should("be.visible");
        cy.get("button.btn.btn-primary").contains("Next").click();
        cy.contains("Resume").should("be.visible");
        cy.fixture("example.pdf").then((fileContent) => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: "example.pdf",
                mimeType: "application/pdf",
            });
        });
        cy.get("button.btn.btn-primary").contains("Apply").click();
        cy.get(".Toastify__toast").should("be.visible");
    }
}

export default new jobSeekerList();
