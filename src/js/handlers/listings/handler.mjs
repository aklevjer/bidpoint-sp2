import { renderListings } from "./index.mjs";
import { hideElement, clearElement } from "../../utils/html/index.mjs";

export class ListingsHandler {
  constructor(container, limit = 4, showMore = false) {
    this.limit = limit;
    this.currentPage = 1;
    this.fetchCallback = null;
    this.fetchParams = null;
    this.showMore = showMore;
    this.showMoreBtn = null;
    this.container = container;

    if (this.showMore) {
      this.setupShowMore();
    }
  }

  async loadListings() {
    try {
      const listings = await this.fetchCallback(
        this.currentPage,
        this.limit,
        ...this.fetchParams,
      );

      renderListings(listings.data, this.container);

      if (this.showMoreBtn) {
        hideElement(this.showMoreBtn, listings.meta.isLastPage);
      }
    } catch (error) {
      console.error(error);
    }
  }

  setupShowMore() {
    this.showMoreBtn = document.querySelector(".show-more-btn");
    if (this.showMoreBtn) {
      this.showMoreBtn.addEventListener("click", () => this.loadNextPage());
    }
  }

  loadNextPage() {
    this.currentPage++;
    this.loadListings();
  }

  reset() {
    this.currentPage = 1;
    clearElement(this.container);
    if (this.showMoreBtn) {
      hideElement(this.showMoreBtn);
    }
  }

  setCallback(callback, ...params) {
    this.fetchCallback = callback;
    this.fetchParams = [...params];
    this.reset();
    this.loadListings();
  }
}
