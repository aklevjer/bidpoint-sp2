import { createSingleListing } from "../../templates/listings/single/index.mjs";
import { createListingCard } from "../../templates/listings/index.mjs";

/**
 * Renders a single listing to the DOM.
 *
 * @param {Object} listingData - The data of the listing.
 * @param {HTMLElement} parentElement - The element to append the listing to.
 */
export function renderSingleListing(listingData, parentElement) {
  const listingClone = createSingleListing(listingData);
  parentElement.appendChild(listingClone);
}

/**
 * Renders an array of listings to the DOM.
 *
 * @param {Object[]} listingDatas - An array of data for the listings.
 * @param {HTMLElement} parentElement - The element to append the listings to.
 */
export function renderListings(listingDatas, parentElement) {
  const listingClones = listingDatas.map((listingData) => createListingCard(listingData));
  parentElement.append(...listingClones);
}
