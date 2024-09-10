import { getListingById } from "../api/listings/index.mjs";
import { renderSingleListing } from "../handlers/listings/index.mjs";
import { clearElement } from "../utils/html/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { setLoginListener, setInterceptListeners } from "../handlers/auth/index.mjs";
import { setBidFormListener, setShowAllListener } from "../handlers/bids/index.mjs";
import { ImageGallery, setGoBackListener, showAlert } from "../handlers/ui/index.mjs";

/**
 * Handles the logic for the single listing page.
 *
 * - Displays the listing with the provided ID.
 * - Sets the page title with the listing title.
 * - Sets up the image gallery if the listing contains multiple images.
 * - Adds necessary event listeners for interactions.
 *
 * @param {Object} params - Parameters from the URL, including the listing ID.
 * @param {string} params.id - The ID of the listing.
 */
export async function singleListingPage({ id }) {
  if (!id) {
    location.href = "/listings/";
    return;
  }

  const singleContainer = document.querySelector(".single-listing");

  try {
    const { data } = await getListingById(id);
    const { title, media } = data;

    clearElement(singleContainer);
    renderSingleListing(data, singleContainer);
    setPageTitle(title);

    if (media.length > 1) {
      const gallery = new ImageGallery(media);
      gallery.setup();
    }

    setLoginListener();
    setBidFormListener(id);
    setShowAllListener();
    setGoBackListener();
    setInterceptListeners();
  } catch (error) {
    clearElement(singleContainer);
    showAlert("error", "Oops! Failed to load listing. Please try again later.", singleContainer);
  }
}
