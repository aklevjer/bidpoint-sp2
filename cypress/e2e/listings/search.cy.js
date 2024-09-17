describe("Search", () => {
  beforeEach(() => {
    cy.visitListings();
  });

  it("displays listings when search results are found", () => {
    cy.search("car");
    cy.checkforListings();
  });
});
