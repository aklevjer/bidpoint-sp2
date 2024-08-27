import { isLoggedIn } from "../../../utils/misc/index.mjs";

export function updateHeader() {
  const loginBtn = document.querySelector("#login-btn");
  const logoutBtn = document.querySelector("#logout-btn");

  const isUserLoggedIn = isLoggedIn();

  if (loginBtn) {
    loginBtn.classList.toggle("hidden", isUserLoggedIn);
  }

  if (logoutBtn) {
    logoutBtn.classList.toggle("hidden", !isUserLoggedIn);
  }
}
