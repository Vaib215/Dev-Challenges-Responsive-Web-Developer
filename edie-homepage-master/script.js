const menu = document.querySelector("#ham-icon");
const menuItems = document.querySelector("nav>ul");
const body = document.querySelector("body");
// Functions

const toggleOff = e => {
  if (
    !(
      e.target.tagName === "UL" ||
      e.target.tagName === "LI" ||
      e.target.id === "ham-icon"
    )
  ) {
    menuItems.classList.remove("flex");
    menu.innerHTML = "☰";
  }
};
const toggleMenuOn = () => {
  menuItems.classList.toggle("flex");
  if (menu.innerHTML === "☰") {
    menu.innerHTML = "✕";
  } else {
    menu.innerHTML = "☰"
  }
  body.addEventListener("click", toggleOff);
};

// Event Listeners
menu.addEventListener("click", toggleMenuOn);
