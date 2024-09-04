import { sortBidsByAmount } from "../../../utils/listings/index.mjs";
import { updateListingBid } from "./index.mjs";
import { hideElement } from "../../../utils/html/index.mjs";

export function updateListingBids(listingClone, listingData) {
  const bidsList = listingClone.querySelector(".bids-list");
  const bidItem = listingClone.querySelector(".bid-item");
  const noBidsLabel = listingClone.querySelector(".no-bids-label");
  const showAllBtn = listingClone.querySelector(".show-all-btn");

  const { bids } = listingData;

  if (!bids.length) {
    bidsList.remove();
    showAllBtn.remove();
    return;
  }

  noBidsLabel.remove();
  bidItem.remove();

  const sortedBids = sortBidsByAmount(bids);

  const updatedBids = sortedBids.map((bid, index) => {
    const bidClone = bidItem.cloneNode(true);
    const updatedBid = updateListingBid(bidClone, bid);
    hideElement(updatedBid, index >= 3);

    return updatedBid;
  });

  bidsList.append(...updatedBids);

  hideElement(showAllBtn, bids.length <= 3);
}
