import { getListings, searchListings } from "../../api/listings/index.mjs";
import { debounce } from "../../utils/misc/index.mjs";

function handleSearchListings(event, listingsHandler) {
  const searchQuery = event.target.value.trim();

  if (searchQuery) {
    listingsHandler.setCallback(searchListings, searchQuery);
  } else {
    listingsHandler.setCallback(getListings);
  }
}

export function setSearchListener(listingsHandler) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    const processInput = debounce((event) =>
      handleSearchListings(event, listingsHandler),
    );
    searchInput.addEventListener("input", (event) => processInput(event));
  }
}
