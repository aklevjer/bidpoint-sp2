import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates an image thumbnail template.
 *
 * @param {string} imgSrc - The URL of the image to be used for the thumbnail.
 * @param {string} imgAlt - The alternative text for the thumbnail image.
 *
 * @returns {Object} An object containing the cloned thumbnail template and the remove button for the thumbnail.
 */
export function createThumbnail(imgSrc, imgAlt) {
  const thumbnailClone = getTemplateClone("thumbnail");
  const thumbnailImg = thumbnailClone.querySelector(".thumbnail-img");
  const thumbnailRemBtn = thumbnailClone.querySelector(".thumbnail-remove-btn");

  thumbnailImg.src = imgSrc;
  thumbnailImg.alt = imgAlt;

  return { thumbnailClone, thumbnailRemBtn };
}
