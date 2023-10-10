describe("Use `then` & `aliases` command", () => {
  Cypress.config("pageLoadTimeout", 10000);
  beforeEach(() => {
    cy.SignIn();
  });
  it("Create a post", () => {
    cy.get("ul.navbar-nav").children().as("menu");
    cy.get("@menu").contains("New Post").click();
    cy.hash().should("include", "#/editor");
    cy.get("form").within(($form) => {
      cy.get("input").first().type("Test 2");
      cy.get("input").eq(1).type("Test 2");
      cy.get("textarea").last().type("Test 2");
      cy.contains("Publish Article").click();
    });
    cy.url().should("include", "article");
  });
  it("Mark-unmark as favorite", () => {
    cy.get("ul.navbar-nav").children().contains("test-cypress@test").click();
    cy.contains("My Articles").should("be.visible");
    cy.get(".ion-heart").first().click();
    cy.contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
    // cy.get(".btn-primary")
    //   .first()
    //   .then(($fav) => {
    //     const favCount = $fav.text();
    //     expect(parseInt(favCount)).to.eq(1);
    //   })
    //   .click();
    cy.get(".btn-primary")
      .first()
      .then(($fav) => {
        return $fav.text();
      })
      .as("favCount");
    cy.get("@favCount").then(($cnt) => {
      expect(parseInt(favCount)).to.eq(1);
    });
    cy.get(".btn-primary").first().click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.go("back");
  });
});
