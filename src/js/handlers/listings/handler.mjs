import { renderListings } from "./index.mjs";
import { searchListings } from "../../api/listings/index.mjs";
import { hideElement, clearElement } from "../../utils/html/index.mjs";

export class ListingsHandler {
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

  async loadListings() {
    hideElement(this.loader, false);

    try {
      const listings = await this.fetchCallback(this.currentPage, this.limit, ...this.fetchParams);

      renderListings(listings.data, this.container);
      this.updateResults(listings.meta.totalCount, ...this.fetchParams);

      hideElement(this.showMoreBtn, listings.meta.isLastPage);
    } catch (error) {
      console.error(error);
    } finally {
      hideElement(this.loader, true);
    }
  }

  updateResults(resultsCount, searchQuery) {
    if (!this.resultsLabel) return;

    if (this.isSearching) {
      const resultsText = `Found ${resultsCount} result${resultsCount !== 1 ? "s" : ""} for ‘${searchQuery}’`;
      this.resultsLabel.textContent = resultsText;
    }

    hideElement(this.resultsLabel, !this.isSearching);
  }

  setupShowMore() {
    this.showMoreBtn.addEventListener("click", () => this.loadNextPage());
  }

  loadNextPage() {
    this.currentPage++;
    this.loadListings();
  }

  reset() {
    this.currentPage = 1;
    clearElement(this.container);
    hideElement(this.resultsLabel);
    hideElement(this.showMoreBtn);
  }

  setCallback(callback, ...params) {
    this.fetchCallback = callback;
    this.fetchParams = [...params];
    this.isSearching = callback === searchListings;
    this.reset();
    this.loadListings();
  }
}
