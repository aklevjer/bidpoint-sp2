import { closeModal, openModal } from "./index.mjs";

export function swapModal(newModalType) {
  closeModal();
  openModal(newModalType);
}
