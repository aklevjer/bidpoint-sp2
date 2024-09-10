import * as listingComp from "./index.mjs";
import { getTemplateClone } from "../../../utils/html/index.mjs";

/**
 * Creates and populates a single listing template.
 *
 * @param {Object} listingData - The data of the listing used to populate the template.
 * @returns {DocumentFragment} The populated single listing template.
 */
export function createSingleListing(listingData) {
  const listingClone = getTemplateClone("single-listing");

  listingComp.updateListingImage(listingClone, listingData);
  listingComp.updateListingMeta(listingClone, listingData);
  listingComp.updateListingSeller(listingClone, listingData);
  listingComp.updateListingBidForm(listingClone, listingData);
  listingComp.updateListingBids(listingClone, listingData);

  return listingClone;
}
