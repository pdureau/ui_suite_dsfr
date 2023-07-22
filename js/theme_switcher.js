window.addEventListener("load", (event) => {
  if (document.documentElement.hasAttribute("data-fr-scheme")) {
    localStorage.setItem("scheme", null);
  }
});
