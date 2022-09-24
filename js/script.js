const allPath = document.querySelectorAll(".nav__path"),
  pathsParent = document.querySelector(".nav__svg"),
  navMenu = document.querySelector(".nav"),
  navBtn = document.querySelector(".nav__btn--menu"),
  featuresMenu = document.querySelector(".nav__miniMenu--features"),
  companyMenu = document.querySelector(".nav__miniMenu--company"),
  featuresBtn = document.querySelector(".nav-links__li__btn--features-btn"),
  companyBtn = document.querySelector(".nav-links__li__btn--company-btn"),
  allExpandables = document.querySelectorAll(".btn--expandables"),
  miniMenuParentLis = document.querySelectorAll(".nav-links__li--miniMenu");


navBtn.addEventListener("click", openHamburgerMenu);
companyBtn.addEventListener("click", toggleMiniMenu);
featuresBtn.addEventListener("click", toggleMiniMenu);

updateAriaExpanded();


function updateAriaExpanded() {
  allExpandables.forEach(expandable => {
  if(expandable.classList.contains("open")) {
    expandable.setAttribute("aria-expanded", "true");
  }else {
    expandable.setAttribute("aria-expanded", "false");
  }
  
  });
}
function openHamburgerMenu() {
  // console.log("Here is your nav bro :)");
  navMenu.classList.toggle("nav--open");
  navBtn.classList.toggle("open");
  
  // close mini menus when nav closes
  if(!(navBtn.classList.contains("open"))) {
    // console.log(true);
    miniMenuParentLis.forEach(eachLi => {
      eachLi.classList.remove("nav-links__li--miniMenu--open");
      featuresBtn.classList.remove("open");
      companyBtn.classList.remove("open");
    });
  }

  updateAriaExpanded();
}

function toggleMiniMenu(event) {
  //to determine which of the two btn is pressed
  const currentBtn = event.target;
  currentBtn.parentElement.classList.toggle("nav-links__li--miniMenu--open");
  // console.log("open added to class list");
  
  currentBtn.classList.toggle("open");
  updateAriaExpanded();
}