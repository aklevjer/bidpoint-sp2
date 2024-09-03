import * as listingComp from "./index.mjs";
import { getTemplateClone } from "../../../utils/html/index.mjs";

export function createSingleListing(listingData) {
  const listingClone = getTemplateClone("single-listing");

  listingComp.updateListingImage(listingClone, listingData);
  listingComp.updateListingMeta(listingClone, listingData);
  listingComp.updateListingSeller(listingClone, listingData);
  listingComp.updateListingBidForm(listingClone, listingData);
  listingComp.updateListingBids(listingClone, listingData);

  return listingClone;
}
