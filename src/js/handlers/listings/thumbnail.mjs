import { toggleInputError } from "../index.mjs";
import { isImgUrlValid } from "../../utils/validation/index.mjs";
import { createThumbnail } from "../../templates/listings/index.mjs";

export async function handleAddThumbnail() {
  const thumbnailContainer = document.querySelector(".thumbnail-container");
  const imgUrlInput = document.querySelector(".image-url");
  const imgCount = thumbnailContainer.querySelectorAll("img").length;
  const maxCount = 8;

  if (imgCount >= maxCount) return;

  const isValid = await isImgUrlValid(imgUrlInput.value);
  toggleInputError(imgUrlInput, "URL must be a valid image URL", !isValid);

  if (!isValid) return;

  insertThumbnail(thumbnailContainer, imgUrlInput.value, imgCount + 1);
  imgUrlInput.value = "";
}

function insertThumbnail(imgContainer, imgUrl, imgIndex) {
  const { thumbnailClone, thumbnailRemBtn } = createThumbnail(
    imgUrl,
    `Listing image thumbnail ${imgIndex}`,
  );

  imgContainer.appendChild(thumbnailClone);
  thumbnailRemBtn.addEventListener("click", () =>
    thumbnailRemBtn.parentElement.remove(),
  );
}
