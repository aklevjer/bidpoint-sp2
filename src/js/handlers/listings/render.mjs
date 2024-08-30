import { createListingCard } from "../../templates/listings/index.mjs";

export function renderListings(listingDatas, parentElement) {
  const listingClones = listingDatas.map((listingData) =>
    createListingCard(listingData),
  );
  parentElement.append(...listingClones);
}
