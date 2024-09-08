import { createSingleListing } from "../../templates/listings/single/index.mjs";
import { createListingCard } from "../../templates/listings/index.mjs";

export function renderSingleListing(listingData, parentElement) {
  const listingClone = createSingleListing(listingData);
  parentElement.appendChild(listingClone);
}

export function renderListings(listingDatas, parentElement) {
  const listingClones = listingDatas.map((listingData) => createListingCard(listingData));
  parentElement.append(...listingClones);
}
