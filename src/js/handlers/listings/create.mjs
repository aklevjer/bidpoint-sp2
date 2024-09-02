import { createListing } from "../../api/listings/index.mjs";
import { isFormValid } from "../../utils/validation/index.mjs";
import { formatMedia } from "../../utils/listings/index.mjs";
import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";

export async function handleCreateListing(event) {
  event.preventDefault();

  const createListingForm = event.target;

  if (!isFormValid(createListingForm)) return;

  const formData = new FormData(createListingForm);

  const title = formData.get("title");
  const endsAt = formData.get("endsAt");
  const description = formData.get("description");

  const thumbnailContainer = document.querySelector(".thumbnail-container");
  const media = formatMedia(title, thumbnailContainer);

  const newListing = {
    title,
    description,
    media,
    endsAt,
  };

  try {
    const createdListing = await createListing(newListing);
    const { id } = createdListing.data;
    location.href = `/listings/listing/?id=${id}`;
  } catch (error) {
    console.error(error);
  }
}

export function setCreateListingListener() {
  const createListingBtn = document.querySelector(".create-listing-btn");

  if (createListingBtn) {
    createListingBtn.addEventListener("click", () => {
      openModal(isLoggedIn() ? "listing" : "login");
    });
  }
}
