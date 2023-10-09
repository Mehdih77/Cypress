describe("Create and mark-unmark as favorite", () => {
  beforeEach(() => {
    cy.SignIn();
  });
  // it("Signin", () => {
  //   cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
  // });
  it("Create a post", () => {
    cy.contains("New Post").click();
    cy.hash().should("include", "#/editor");
    // cy.location("hash").should("include", "#/editor")
    cy.get("input[placeholder='Article Title']").type("Test 1");
    cy.get('input[placeholder="What\'s this article about?"]').type("Test 2");
    cy.get("textarea[placeholder='Write your article (in markdown)']").type(
      "Test 2"
    );
    cy.contains("Publish Article").click();
    cy.url().should("include", "article");
  });
  it("Mark-unmark as favorite", () => {
    cy.get(".nav-link").contains("test-cypress@test").click(); // test-cypress@test is Username
    cy.contains("My Articles").should("be.visible");
    cy.get(".ion-heart").click();
    cy.contains("Favorited Articles").click();
    cy.url().should("include", "favorites");
    cy.get(".ion-heart").click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.go("back"); // cy.go(-1)
  });
});
