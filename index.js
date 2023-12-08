const menuOpen = document.querySelector(".open-menu-btn");
const menuClose = document.querySelector(".close-menu-btn");
const sideMenu = document.querySelector(".side-menu");

menuOpen.addEventListener("click", (e) => {
  console.log("here");
  return sideMenu.classList.toggle("hide");
});

menuClose.addEventListener("click", (e) => {
  return sideMenu.classList.toggle("hide");
});
