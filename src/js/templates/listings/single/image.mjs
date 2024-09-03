import { DEFAULT_LISTING_IMG } from "../../../constants/index.mjs";
import { hideElement } from "../../../utils/html/index.mjs";

export function updateListingImage(listingClone, listingData) {
  const listingImg = listingClone.querySelector(".listing-image");
  const prevBtn = listingClone.querySelector(".prev-btn");
  const nextBtn = listingClone.querySelector(".next-btn");
  const currentImgLabel = listingClone.querySelector(".current-img-label");

  const { title, media } = listingData;

  // Image
  listingImg.src = media[0]?.url || DEFAULT_LISTING_IMG;
  listingImg.alt = media[0]?.alt || title;
  listingImg.setAttribute(
    "onerror",
    `this.onerror=null;this.src="${DEFAULT_LISTING_IMG}";`,
  );

  if (media.length <= 1) {
    hideElement(prevBtn);
    hideElement(nextBtn);
    hideElement(currentImgLabel);
  } else {
    currentImgLabel.textContent = `1/${media.length}`;
  }
}
