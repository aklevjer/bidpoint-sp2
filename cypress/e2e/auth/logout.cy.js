describe("Logout", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("logs the user out with the log out button", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
    cy.logout();
    cy.isLoggedOut();
  });
});
