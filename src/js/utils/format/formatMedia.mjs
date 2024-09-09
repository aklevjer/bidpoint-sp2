export function formatMedia(listingTitle, thumbnailContainer) {
  const images = thumbnailContainer.querySelectorAll("img");

  const media = [...images].map((image) => ({
    url: image.src,
    alt: listingTitle,
  }));

  return media;
}
