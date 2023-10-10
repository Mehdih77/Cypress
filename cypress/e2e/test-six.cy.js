//NOTE: it doesnt work cuz api request has error
describe("Test Api Request", () => {
  Cypress.config("baseUrl", "http://dummy.restapiexample.com/api/v1");
  it("GET", () => {
    // cy.request("GET", "/employees");
    cy.request({
      method: "GET",
      url: "/employees",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response).have.property("status", 200);
      expect(response.body).not.be.null;
      expect(response.body.data).have.length(24);
    });
  });
  it("POST", () => {
    const item = { name: "test", salary: "123", age: "23" };
    cy.request({
      method: "POST",
      url: "/create",
      bodt: item,
      failOnStatusCode: false,
    })
      .its("body")
      .its("data")
      .should("include", { name: "test" });
  });
  it("PUT", () => {
    const item = { name: "test1" };
    cy.request({
      method: "PUT",
      url: "/update/1",
      bodt: item,
      failOnStatusCode: false,
    })
      .its("status")
      .should("eq", 401);
  });
});
