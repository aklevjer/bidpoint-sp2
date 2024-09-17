describe("Login", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("allows the user to log in with valid credentials", () => {
    cy.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
    cy.isLoggedIn();
  });

  it("shows an error message when attempting to log in with invalid credentials", () => {
    cy.login("invalid@stud.noroff.no", "invalidpassword123");
    cy.checkInvalidLoginError();
  });
});
