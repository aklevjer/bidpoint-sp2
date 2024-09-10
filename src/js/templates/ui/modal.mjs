import { getTemplateClone } from "../../utils/html/index.mjs";

/**
 * Creates and populates a modal template.
 *
 * @param {string} modalType - The type of modal to be created (i.e. "login", "register").
 * @returns {Object} An object containing the cloned modal template and the modal element.
 */
export function createModal(modalType) {
  const modalClone = getTemplateClone("modal");
  const modal = modalClone.querySelector(".modal");
  const modalContainer = modalClone.querySelector(".modal-container");

  let modalContent = null;
  let modalSize = "";

  switch (modalType) {
    case "login":
      modalContent = getTemplateClone("login-form");
      modalSize = "max-w-md";
      break;

    case "register":
      modalContent = getTemplateClone("register-form");
      modalSize = "max-w-lg";
      break;

    case "listing":
      modalContent = getTemplateClone("listing-form");
      modalSize = "max-w-2xl";
      break;

    case "profile":
      modalContent = getTemplateClone("profile-form");
      modalSize = "max-w-lg";
      break;
  }

  modalContainer.appendChild(modalContent);
  modal.classList.add(modalSize);

  return {
    modalClone,
    modal,
  };
}
