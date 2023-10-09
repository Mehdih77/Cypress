describe("Login", () => {
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get("input[type='email']").type("test-cypress@test.com");
    cy.get("input[type='password']").type("test123");
    cy.get(".btn").contains("Sign in").should("exist").click();
  });
});
//email: test-cypress@test.com
//username: test-cypress@test
//pass: test123
