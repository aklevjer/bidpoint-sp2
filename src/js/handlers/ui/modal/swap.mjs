import { closeModal, openModal } from "./index.mjs";

/**
 * Handles changing the current modal to a new type.
 *
 * @param {string} newModalType - The type of modal to switch to (i.e. "login", "register").
 */
export function swapModal(newModalType) {
  closeModal();
  openModal(newModalType);
}
