import { getListingById } from "../api/listings/index.mjs";
import { renderSingleListing } from "../handlers/listings/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";

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
  } catch (error) {
    console.error(error);
  }
}
