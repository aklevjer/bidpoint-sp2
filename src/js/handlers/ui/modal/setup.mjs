import {
  swapModal,
  closeModal,
  closeModalOutside,
  closeModalEscKey,
} from "./index.mjs";

export function setupModal(modal, modalType) {
  const modalCloseBtn = modal.querySelector("#modal-close-btn");

  switch (modalType) {
    case "login": {
      const gotoRegisterBtn = modal.querySelector("#goto-register-btn");
      gotoRegisterBtn.addEventListener("click", () => swapModal("register"));
      break;
    }

    case "register": {
      const gotoLoginBtn = modal.querySelector("#goto-login-btn");
      gotoLoginBtn.addEventListener("click", () => swapModal("login"));
      break;
    }
  }

  modalCloseBtn.addEventListener("click", closeModal);
  document.addEventListener("click", closeModalOutside);
  document.addEventListener("keydown", closeModalEscKey);
}
