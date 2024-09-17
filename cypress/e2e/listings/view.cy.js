describe("View Listings", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/auction/listings*").as("getListings");
    cy.visitListings();
  });

  it("displays initial listings on page load", () => {
    cy.waitForListings();
    cy.checkforListings();
  });

  it("loads more listings when 'Show More' button is clicked", () => {
    cy.waitForListings();
    cy.checkforListings();
    cy.showMoreListings();
    cy.checkforListings(12);
  });

  it("shows the details of a single listing upon clicking", () => {
    cy.viewSingleListing();
    cy.checkforSingleListing();
  });
});
