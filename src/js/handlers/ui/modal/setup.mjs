import * as storage from "../../../utils/storage/index.mjs";
import { formatDateTime } from "../../../utils/format/index.mjs";
import { handleLogin, handleRegister } from "../../auth/index.mjs";
import { handleUpdateProfile } from "../../profiles/index.mjs";
import { handleCreateListing, handleAddThumbnail } from "../../listings/index.mjs";
import { swapModal, closeModal, closeModalOutside, closeModalEscKey } from "./index.mjs";

/**
 * Configures the modal with event listeners based on its type.
 *
 * @param {HTMLElement} modal - The modal element to set up.
 * @param {string} modalType - The type of modal being set up (i.e. "login", "register").
 */
export function setupModal(modal, modalType) {
  const modalForm = modal.querySelector("form");
  const modalCloseBtn = modal.querySelector(".modal-close-btn");

  switch (modalType) {
    case "login": {
      const gotoRegisterBtn = modal.querySelector(".goto-register-btn");

      gotoRegisterBtn.addEventListener("click", () => swapModal("register"));
      modalForm.addEventListener("submit", handleLogin);
      break;
    }

    case "register": {
      const gotoLoginBtn = modal.querySelector(".goto-login-btn");

      gotoLoginBtn.addEventListener("click", () => swapModal("login"));
      modalForm.addEventListener("submit", handleRegister);
      break;
    }

    case "listing": {
      const endsAtInput = modal.querySelector(".ends-at");
      const addBtn = modal.querySelector(".add-btn");
      const cancelBtn = modal.querySelector(".cancel-btn");

      endsAtInput.min = formatDateTime();
      endsAtInput.max = formatDateTime(12);

      addBtn.addEventListener("click", handleAddThumbnail);
      cancelBtn.addEventListener("click", closeModal);
      modalForm.addEventListener("submit", handleCreateListing);
      break;
    }

    case "profile": {
      const avatarInput = modal.querySelector(".avatar-url");
      const cancelBtn = modal.querySelector(".cancel-btn");

      const { avatar } = storage.get("profile");

      avatarInput.value = avatar.url;
      cancelBtn.addEventListener("click", closeModal);
      modalForm.addEventListener("submit", handleUpdateProfile);
      break;
    }
  }

  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);
}
