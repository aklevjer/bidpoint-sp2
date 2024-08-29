import { getTemplateClone } from "../../utils/html/index.mjs";

export function createModalTemplate(modalType) {
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
  }

  modalContainer.appendChild(modalContent);
  modal.classList.add(modalSize);

  return {
    modalClone,
    modal,
  };
}
