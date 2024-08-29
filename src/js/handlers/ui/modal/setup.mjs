import { handleLogin, handleRegister } from "../../auth/index.mjs";
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
      modalForm.addEventListener("submit", handleLogin);

      const gotoRegisterBtn = modal.querySelector(".goto-register-btn");
      gotoRegisterBtn.addEventListener("click", () => swapModal("register"));
      break;
    }

    case "register": {
      modalForm.addEventListener("submit", handleRegister);

      const gotoLoginBtn = modal.querySelector(".goto-login-btn");
      gotoLoginBtn.addEventListener("click", () => swapModal("login"));
      break;
    }
  }

  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);
}
