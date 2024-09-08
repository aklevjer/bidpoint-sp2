import * as storage from "../../utils/storage/index.mjs";
import { updateProfile } from "../../api/profiles/index.mjs";
import { isImgUrlValid } from "../../utils/validation/index.mjs";
import { toggleInputError } from "../ui/index.mjs";
import { openModal, closeModal } from "../ui/modal/index.mjs";
import { updateHeader } from "../ui/header/index.mjs";
import { showAlert } from "../ui/index.mjs";

export async function handleUpdateProfile(event) {
  event.preventDefault();

  const profileForm = event.target;
  const { avatarUrl } = profileForm;
  const profileAvatar = document.querySelector(".profile-avatar");

  const isUrlValid = await isImgUrlValid(avatarUrl.value);
  toggleInputError(avatarUrl, "URL must be a valid image URL", !isUrlValid);

  if (!isUrlValid) return;

  const { name } = storage.get("profile");

  const updatedProfile = {
    avatar: {
      url: avatarUrl.value,
      alt: `Avatar for ${name}`,
    },
  };

  try {
    await updateProfile(name, updatedProfile);

    closeModal();
    updateHeader();

    profileAvatar.src = updatedProfile.avatar.url;
    profileAvatar.alt = updatedProfile.avatar.alt;
  } catch (error) {
    showAlert("error", error.message, profileForm);
  }
}

export function setUpdateProfileListener() {
  const editProfileBtn = document.querySelector(".profile-edit-btn");

  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => openModal("profile"));
  }
}
