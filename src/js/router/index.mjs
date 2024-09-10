import * as pages from "../pages/index.mjs";

/**
 * Handles routing logic based on the current URL path.
 */
export default function router() {
  const url = new URL(location.href);
  const path = url.pathname;
  const params = Object.fromEntries(url.searchParams.entries());

  switch (path) {
    case "/":
    case "/index.html":
      pages.homePage();
      break;

    case "/listings":
    case "/listings/":
    case "/listings/index.html":
      pages.listingsPage();
      break;

    case "/listings/listing":
    case "/listings/listing/":
    case "/listings/listing/index.html":
      pages.singleListingPage(params);
      break;

    case "/profile":
    case "/profile/":
    case "/profile/index.html":
      pages.profilePage(params);
      break;
  }
}
