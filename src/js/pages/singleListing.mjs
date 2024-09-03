import { getListingById } from "../api/listings/index.mjs";
import { renderSingleListing } from "../handlers/listings/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { setLoginListener } from "../handlers/auth/index.mjs";
import { setShowAllListener } from "../handlers/bids/index.mjs";
import { setGoBackListener } from "../handlers/ui/index.mjs";

export async function singleListingPage({ id }) {
  if (!id) {
    location.href = "/listings/";
    return;
  }

  const singleContainer = document.querySelector(".single-listing");

  try {
    const singleListing = await getListingById(id);

    renderSingleListing(singleListing.data, singleContainer);
    setPageTitle(singleListing.data.title);

    setLoginListener();
    setShowAllListener();
    setGoBackListener();
  } catch (error) {
    console.error(error);
  }
}
