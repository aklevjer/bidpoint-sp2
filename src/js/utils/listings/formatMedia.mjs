export function formatMedia(listingTitle, thumbnailContainer) {
  const images = thumbnailContainer.querySelectorAll("img");

  const media = [...images].map((image, index) => ({
    url: image.src,
    alt: `${listingTitle} - Image ${index + 1}`,
  }));

  return media;
}
