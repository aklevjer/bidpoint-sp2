# BidPoint

[![Automated Unit Testing](https://github.com/aklevjer/bidpoint-sp2/actions/workflows/unit-test.yml/badge.svg)](https://github.com/aklevjer/bidpoint-sp2/actions/workflows/unit-test.yml) [![Automated E2E Testing](https://github.com/aklevjer/bidpoint-sp2/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/aklevjer/bidpoint-sp2/actions/workflows/e2e-test.yml)

![Screen shot of the auction site](https://sinnsykt.net/screenshots/bidpoint-screen.png)

An auction site where users can buy and sell items through auctions.

## Description

This project was developed as my Semester Project 2 at Noroff. The task was to create an auction site using the knowledge gained over the past three semesters.

Some of the features include the ability for users with @stud.noroff.no emails to register profiles and log in. Users can also create listings, place bids, view bids on listings, and manage their profile by updating their avatar and viewing their total credit.

Unregistered users can browse and search through listings but must register to participate in auctions.

**The site contains the following pages:**

- Home
- Listings
- Listing Details
- Profile

## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Tailwind CSS](https://tailwindcss.com)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Started

### Installing

1. Clone the repository:

```bash
git clone git@github.com:aklevjer/bidpoint-sp2.git
```

2.  Install the dependencies:

```bash
npm install
```

### Setting Up Environment Variables

This project requires certain environment variables to run and test the application. Create a `.env` file in the root directory of the project and add the following variables:

```
VITE_API_KEY=
USER_EMAIL=
USER_PASSWORD=
```

**To obtain and configure an API key:**

1. Visit the [Noroff API documentation](https://docs.noroff.dev/docs/v2/auth/api-key) for detailed instructions on generating an API key.
2. Use the generated API key as the value for `VITE_API_KEY` in the `.env` file.

**For testing purposes:**

1. Run the application locally or visit the [deployed application](https://bidpoint.netlify.app).
2. Register a new user account if you don't have one already.
3. Use the registered email and password as the values for `USER_EMAIL` and `USER_PASSWORD` in the `.env` file.

### Running

To run the app in development mode, use the following command:

```bash
npm run dev
```

To build the app for production, use the following command:

```bash
npm run build
```

## Project Commands

### Running Tests

To run both unit and end-to-end tests:

```bash
npm run test
```

To run unit tests using Vitest:

```bash
npm run test-unit
```

To open Cypress for end-to-end testing in interactive mode:

```bash
npm run test-e2e
```

To run Cypress end-to-end tests in headless mode:

```bash
npm run test-e2e-cli
```

### Code Formatting and Linting

To format the code using Prettier:

```bash
npm run format
```

To lint the code using ESLint:

```bash
npm run lint
```

To fix linting issues using ESLint:

```bash
npm run lint-fix
```

## Contact

You can reach me on [LinkedIn](https://www.linkedin.com/in/aklevjer/).
