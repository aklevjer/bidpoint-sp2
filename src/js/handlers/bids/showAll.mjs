import { hideElement } from "../../utils/html/index.mjs";

function showAllBids(event) {
  const showAllBtn = event.currentTarget;
  const bidsList = document.querySelector(".bids-list");

  if (bidsList) {
    const bidItems = bidsList.querySelectorAll(".bid-item");
    bidItems.forEach((bidItem) => hideElement(bidItem, false));

    hideElement(showAllBtn);
  }
}

export function setShowAllListener() {
  const showAllBtn = document.querySelector(".show-all-btn");

  if (showAllBtn) {
    showAllBtn.addEventListener("click", showAllBids);
  }
}
