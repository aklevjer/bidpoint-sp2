import { renderListings } from "./index.mjs";
import { searchListings } from "../../api/listings/index.mjs";
import { hideElement, clearElement } from "../../utils/html/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Class representing a handler for loading and managing listings.
 *
 * @example
 * ```js
 * import { getListings } from "../api/listings/index.mjs";
 *
 * const listingsContainer = document.querySelector(".listings-container");
 * const listingsHandler = new ListingsHandler(listingsContainer);
 * listingsHandler.setCallback(getListings);
 * ```
 */
export class ListingsHandler {
  /**
   * Create a ListingsHandler instance.
   *
   * @param {HTMLElement} container - The container element where listings will be rendered.
   * @param {number} [limit=4] - The maximum number of listings to display (defaults to 4).
   */
  constructor(container, limit = 4) {
    this.limit = limit;
    this.currentPage = 1;
    this.fetchCallback = null;
    this.fetchParams = null;
    this.isSearching = false;
    this.container = container;

    this.loader = document.querySelector(".loader");
    this.resultsLabel = document.querySelector(".results-label");
    this.showMoreBtn = document.querySelector(".show-more-btn");

    if (this.showMoreBtn) {
      this.setupShowMore();
    }
  }

  /**
   * Loads listings using the provided fetch callback and params.
   */
  async loadListings() {
    hideElement(this.loader, false);

    try {
      const listings = await this.fetchCallback(this.currentPage, this.limit, ...this.fetchParams);

      if (!listings.data.length && !this.isSearching) {
        this.container.textContent = "No listings found.";
        return;
      }

      renderListings(listings.data, this.container);
      this.updateResults(listings.meta.totalCount, ...this.fetchParams);

      hideElement(this.showMoreBtn, listings.meta.isLastPage);
    } catch (error) {
      showAlert(
        "error",
        "Oops! Failed to load listings. Please try again later.",
        this.container,
        true,
      );
    } finally {
      hideElement(this.loader, true);
    }
  }

  /**
   * Updates the search result label with the number of results and query.
   *
   * @param {number} resultsCount - The number of search results.
   * @param {string} searchQuery - The search query.
   */
  updateResults(resultsCount, searchQuery) {
    if (!this.resultsLabel) return;

    if (this.isSearching) {
      const resultsText = `Found ${resultsCount} result${resultsCount !== 1 ? "s" : ""} for ‘${searchQuery}’`;
      this.resultsLabel.textContent = resultsText;
    }

    hideElement(this.resultsLabel, !this.isSearching);
  }

  /**
   * Sets up an event listener for the "show more" button to load the next page of listings.
   */
  setupShowMore() {
    this.showMoreBtn.addEventListener("click", () => this.loadNextPage());
  }

  /**
   * Loads the next page of listings.
   */
  loadNextPage() {
    this.currentPage++;
    this.loadListings();
  }

  /**
   * Resets the state of the listings handler, clearing and hiding elements.
   */
  reset() {
    this.currentPage = 1;
    clearElement(this.container);
    hideElement(this.resultsLabel);
    hideElement(this.showMoreBtn);
  }

  /**
   * Sets the fetch callback and parameters for loading listings.
   *
   * @param {function} callback - The callback function to fetch listings.
   * @param {...any} params - Additional parameters for the callback function.
   */
  setCallback(callback, ...params) {
    this.fetchCallback = callback;
    this.fetchParams = [...params];
    this.isSearching = callback === searchListings;
    this.reset();
    this.loadListings();
  }
}
