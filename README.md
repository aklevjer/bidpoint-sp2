# BidPoint

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

This project requires an API key to run the application. Create a `.env` file in the root directory of the project and add the following variable:

```
VITE_API_KEY=
```

**To obtain and configure an API key:**

1. Visit the [Noroff API documentation](https://docs.noroff.dev/docs/v2/auth/api-key) for detailed instructions on generating an API key.
2. Use the generated API key as the value for `VITE_API_KEY` in the `.env` file.

### Running

To run the app in development mode, use the following command:

```bash
npm run dev
```

To build the app for production, use the following command:

```bash
npm run build
```

## Live Site

The site is deployed on [Netlify](https://www.netlify.com), and can be seen live [here](https://bidpoint.netlify.app).
