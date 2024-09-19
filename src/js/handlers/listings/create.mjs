import { createListing } from "../../api/listings/index.mjs";
import { isFormValid } from "../../utils/validation/index.mjs";
import { formatMedia } from "../../utils/format/index.mjs";
import { isLoggedIn } from "../../utils/misc/index.mjs";
import { openModal } from "../ui/modal/index.mjs";
import { showAlert } from "../ui/index.mjs";

/**
 * Creates a new listing when the listing form is submitted.
 * Redirects to the created listing page on success.
 * Displays an error alert if the creation fails.
 *
 * @param {Event} event - The event object representing the listing form submission.
 */
export async function handleCreateListing(event) {
  event.preventDefault();

  const createListingForm = event.target;

  if (!isFormValid(createListingForm)) return;

  const submitBtn = event.submitter;
  submitBtn.disabled = true;

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
    submitBtn.disabled = false;
    showAlert("error", error.message, createListingForm);
  }
}

/**
 * Sets up an event listener for the "create listing" button to open the listing modal.
 */
export function setCreateListingListener() {
  const createListingBtn = document.querySelector(".create-listing-btn");

  if (createListingBtn) {
    createListingBtn.addEventListener("click", () => {
      openModal(isLoggedIn() ? "listing" : "login");
    });
  }
}
