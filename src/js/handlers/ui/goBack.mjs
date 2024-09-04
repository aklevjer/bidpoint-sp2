function handleGoBack() {
  history.back();
}

export function setGoBackListener() {
  const goBackBtn = document.querySelector(".go-back-btn");

  if (goBackBtn) {
    goBackBtn.addEventListener("click", handleGoBack);
  }
}
