import Login from "./pageObjects/login";

describe("Login", () => {
  const login = new Login();
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    login.email().type("test-cypress@test.com");
    login.password().type("test123");
    login.signInBtn().should("exist").click();
  });
});
