import { getListings } from "../../api/listings/index.mjs";

function handleSortListings(event, listingsHandler) {
  const sortOptions = event.target.value;
  listingsHandler.setCallback(getListings, sortOptions);
}

export function setSortListener(listingsHandler) {
  const sortSelect = document.querySelector("#sort");

  if (sortSelect) {
    sortSelect.addEventListener("change", (event) =>
      handleSortListings(event, listingsHandler),
    );
  }
}
