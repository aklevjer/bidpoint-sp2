import { getListingById } from "../api/listings/index.mjs";
import { renderSingleListing } from "../handlers/listings/index.mjs";
import { clearElement } from "../utils/html/index.mjs";
import { setPageTitle } from "../utils/misc/index.mjs";
import { ImageGallery, setGoBackListener, showAlert } from "../handlers/ui/index.mjs";
import { setLoginListener } from "../handlers/auth/index.mjs";
import { setBidFormListener, setShowAllListener } from "../handlers/bids/index.mjs";

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
  } catch (error) {
    clearElement(singleContainer);
    showAlert("error", "Oops! Failed to load listing. Please try again later.", singleContainer);
  }
}
