import { createModal } from "../../../templates/ui/index.mjs";
import { setupModal } from "./index.mjs";

/**
 * Handles opening a modal.
 *
 * @param {string} modalType - The type of modal to be opened (i.e. "login", "register").
 */
export function openModal(modalType) {
  const { modalClone, modal } = createModal(modalType);

  setupModal(modal, modalType);

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
