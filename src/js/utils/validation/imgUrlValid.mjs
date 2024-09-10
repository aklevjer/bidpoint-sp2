/**
 * Asynchronously validates an image URL by attempting to load the image.
 *
 * @param {string} imgUrl - The URL of the image to be validated.
 * @returns {boolean} A promise that resolves to `true` if the URL points to a valid image, or `false` if the image cannot be loaded.
 */
export function isImgUrlValid(imgUrl) {
  return new Promise((resolve) => {
    const img = new Image();

    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);

    img.src = imgUrl;
  });
}
