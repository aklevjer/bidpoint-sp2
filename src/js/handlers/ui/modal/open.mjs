import { createModal } from "../../../templates/ui/index.mjs";
import { setupModal } from "./index.mjs";

export function openModal(modalType) {
  const { modalClone, modal } = createModal(modalType);

  setupModal(modal, modalType);

  document.body.append(modalClone);
  document.body.classList.add("overflow-hidden");

  modal.showModal();
}
