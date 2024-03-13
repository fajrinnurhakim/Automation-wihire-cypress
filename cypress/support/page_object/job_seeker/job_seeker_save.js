import login from "../login";

class jobSeekerSave {
    viewSavePage() {
        login.loginAsJobSeeker();
        cy.wait(3000);
        cy.get("div>aside>nav>ul>li>a").contains("Saved Jobs").click();
    }

    viewSaveList() {
        this.viewSavePage();
        cy.get("div>div>div>div>a").eq(1).click();
        cy.contains("You already applied to this job");
    }

    unSaveList() {
        this.viewSavePage();
        cy.get('[title="Unsave this job"]').eq(0).click();
    }
}

export default new jobSeekerSave();
