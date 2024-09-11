import { formatAltText } from "./index.mjs";

/**
 * Formats a media array from a thumbnail container.
 *
 * @param {string} listingTitle - The title of the listing to use for the alt text of the images.
 * @param {HTMLElement} thumbnailContainer - The container element that holds the images.
 *
 * @returns {Object[]} An array of media objects, each containing a URL and alt text.
 */
export function formatMedia(listingTitle, thumbnailContainer) {
  const images = thumbnailContainer.querySelectorAll("img");

  const media = [...images].map((image) => ({
    url: image.src,
    alt: formatAltText(listingTitle),
  }));

  return media;
}
