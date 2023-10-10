// describe("Login", () => {
//   it("Sign in", () => {
//     cy.visit("https://react-redux.realworld.io/#/login");
//     cy.fixture("loginDetails").then((user) => {
//       cy.get("input[type='email']").type(user.email);
//       cy.get("input[type='password']").type(user.password);
//     });
//     cy.get(".btn").contains("Sign in").should("exist").click();
//   });
// });

describe("Login", () => {
  let userDetails;
  beforeEach(() => {
    cy.fixture("loginDetails").then((user) => {
      userDetails = user;
    });
  });
  it("Sign in", () => {
    cy.visit("https://react-redux.realworld.io/#/login");
    cy.get("input[type='email']").type(userDetails.email);
    cy.get("input[type='password']").type(userDetails.password);
    cy.get(".btn").contains("Sign in").should("exist").click();
  });
});

//TODO: check it
// describe("Login", () => {
//   beforeEach(() => {
//     cy.fixture("loginDetails").as("user");
//   });
//   it("Sign in", () => {
//     cy.visit("https://react-redux.realworld.io/#/login");
//     cy.get("input[type='email']").type(this.user.email);
//     cy.get("input[type='password']").type(this.user.password);
//     cy.get(".btn").contains("Sign in").should("exist").click();
//   });
// });
