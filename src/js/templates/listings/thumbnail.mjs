import { getTemplateClone } from "../../utils/html/index.mjs";

export function createThumbnail(imgSrc, imgAlt) {
  const thumbnailClone = getTemplateClone("thumbnail");
  const thumbnailImg = thumbnailClone.querySelector(".thumbnail-img");
  const thumbnailRemBtn = thumbnailClone.querySelector(".thumbnail-remove-btn");

  thumbnailImg.src = imgSrc;
  thumbnailImg.alt = imgAlt;

  return { thumbnailClone, thumbnailRemBtn };
}
