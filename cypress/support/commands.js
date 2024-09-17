// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitHome", () => {
  cy.visit("/");
});

Cypress.Commands.add("visitListings", () => {
  cy.visit("/listings/");
});

Cypress.Commands.add("login", (email, password) => {
  cy.intercept("POST", "**/auth/login").as("login");

  cy.get(".login-btn").click();

  cy.get("input[type='email']").type(email);
  cy.get("input[type='password']").type(password);
  cy.get("button[type='submit']").click();

  cy.wait("@login");
  cy.wait(500);
});

Cypress.Commands.add("logout", () => {
  cy.get(".user-menu-btn").click();
  cy.get(".logout-btn").click();
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("accessToken");
    expect(token).to.be.a("string");
  });
});

Cypress.Commands.add("isLoggedOut", () => {
  cy.window().then((win) => {
    const token = win.localStorage.getItem("accessToken");
    expect(token).to.be.null;
  });
});

Cypress.Commands.add("checkInvalidLoginError", () => {
  cy.get(".alert-message").should("contain.text", "Invalid email or password");
});

Cypress.Commands.add("search", (searchQuery) => {
  cy.intercept("GET", "**/auction/listings/search*").as("search");
  cy.get("input[type='search']").type(searchQuery);
  cy.wait("@search");
});

Cypress.Commands.add("showMoreListings", () => {
  cy.intercept("GET", "**/auction/listings*").as("loadMoreListings");
  cy.get(".show-more-btn").click();
  cy.wait("@loadMoreListings");
});

Cypress.Commands.add("waitForListings", () => {
  cy.wait("@getListings");
});

Cypress.Commands.add("checkforListings", (minCount = 1) => {
  cy.get(".listings-container").children().should("have.length.greaterThan", minCount);
});

Cypress.Commands.add("checkforSingleListing", () => {
  cy.get(".listing-title").should("exist");
});

Cypress.Commands.add("viewSingleListing", () => {
  cy.intercept("GET", "**/auction/listings/*").as("singleListing");
  cy.get(".listings-container").children().first().click();
  cy.wait("@singleListing");
});
