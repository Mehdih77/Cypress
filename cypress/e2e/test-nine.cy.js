describe("Read-Write file", () => {
  it("write file", () => {
    cy.writeFile("sample.txt", "Hello world\n");
    cy.writeFile("sample.txt", "Bye world", { flag: "a+" });
  });
  it("read file", () => {
    cy.readFile("sample.txt").should("contain", "Hello world");
  });
});
