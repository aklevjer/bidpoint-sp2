import { toggleInputError } from "../index.mjs";
import { isImgUrlValid } from "../../utils/validation/index.mjs";
import { createThumbnail } from "../../templates/listings/index.mjs";

/**
 * Handles adding a thumbnail image to the create listing form.
 * Validates the image URL, inserts the thumbnail if valid, and clears the input.
 */
export async function handleAddThumbnail() {
  const thumbnailContainer = document.querySelector(".thumbnail-container");
  const imgUrlInput = document.querySelector(".image-url");
  const imgCount = thumbnailContainer.querySelectorAll("img").length;
  const maxCount = 8;

  if (imgCount >= maxCount) return;

  const isUrlValid = await isImgUrlValid(imgUrlInput.value);
  toggleInputError(imgUrlInput, "URL must be a valid image URL", !isUrlValid);

  if (!isUrlValid) return;

  insertThumbnail(thumbnailContainer, imgUrlInput.value, imgCount + 1);
  imgUrlInput.value = "";
}

/**
 * Creates and inserts an image thumbnail into the given container.
 *
 * @param {HTMLElement} imgContainer - The container element where the thumbnail will be appended.
 * @param {string} imgUrl - The URL of the image to be used as the thumbnail.
 * @param {number} imgIndex - The index of the thumbnail.
 */
function insertThumbnail(imgContainer, imgUrl, imgIndex) {
  const { thumbnailClone, thumbnailRemBtn } = createThumbnail(
    imgUrl,
    `Listing image thumbnail ${imgIndex}`,
  );

  imgContainer.appendChild(thumbnailClone);
  thumbnailRemBtn.addEventListener("click", () => thumbnailRemBtn.parentElement.remove());
}
