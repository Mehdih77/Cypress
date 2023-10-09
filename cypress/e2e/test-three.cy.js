describe("New format of test-two", () => {
  beforeEach(() => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.title().should("eq", "Conduit");
    cy.location("protocol").should("eq", "https:");
    cy.get("form").within(($form) => {
      cy.get("input[type='email']").type("test-cypress@test.com");
      cy.get("input[type='password']").type("test123");
      cy.root().submit(); // use it when button has type="submit"
      // cy.get(".btn").contains("Sign in").should("exist").click();
    });
  });
  it("Signin", () => {
    cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
  });
  it.skip("Create a post", () => {
    cy.get("ul.navbar-nav").children().contains("New Post").click();
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
    cy.get(".ion-heart").first().click();
    cy.reload();
    cy.contains("No articles are here... yet.").should("be.visible");
    cy.go("back");
  });
});
