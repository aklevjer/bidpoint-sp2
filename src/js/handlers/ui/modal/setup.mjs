import { handleLogin, handleRegister } from "../../auth/index.mjs";
import {
  handleCreateListing,
  handleAddThumbnail,
} from "../../listings/index.mjs";
import {
  swapModal,
  closeModal,
  closeModalOutside,
  closeModalEscKey,
} from "./index.mjs";

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
      const addBtn = modal.querySelector(".add-btn");
      const cancelBtn = modal.querySelector(".cancel-btn");

      addBtn.addEventListener("click", handleAddThumbnail);
      cancelBtn.addEventListener("click", closeModal);
      modalForm.addEventListener("submit", handleCreateListing);
      break;
    }
  }

  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);
}
