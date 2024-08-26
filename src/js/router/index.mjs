import * as pages from "../pages/index.mjs";

export default function router() {
  const url = new URL(location.href);
  const path = url.pathname;
  const params = Object.fromEntries(url.searchParams.entries());

  switch (path) {
    case "/":
    case "/index.html":
      pages.homePage();
      break;

    case "/auctions":
    case "/auctions/":
    case "/auctions/index.html":
      pages.auctionsPage();
      break;

    case "/auctions/listing":
    case "/auctions/listing/":
    case "/auctions/listing/index.html":
      pages.listingPage(params);
      break;

    case "/profile":
    case "/profile/":
    case "/profile/index.html":
      pages.profilePage(params);
      break;
  }
}
