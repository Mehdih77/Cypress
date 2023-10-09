describe("Create and mark-unmark as favorite", () => {
  before(() => {
    cy.login();
  });

  it("Signin", () => {
    // cy.visit("https://react-redux.realworld.io/#/login");
    // cy.title().should("eq", "Conduit");
    // cy.location("protocol").should("eq", "https:");
    // cy.get("input[type='email']").type("test-cypress@test.com");
    // cy.get("input[type='password']").type("test123");
    // cy.get(".btn").contains("Sign in").should("exist").click();
    cy.contains("Your Feed", { timeout: 10000 }).should("be.visible");
  });
  it("Create a post", () => {
    cy.login();
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
});
