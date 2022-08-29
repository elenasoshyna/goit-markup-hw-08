(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-open"),
    closeMenuBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".menu-close"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
