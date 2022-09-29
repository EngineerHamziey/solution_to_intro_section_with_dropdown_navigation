const allPath = document.querySelectorAll(".nav__path"),
  pathsParent = document.querySelector(".nav__svg"),
  navMenu = document.querySelector(".nav"),
  navBtn = document.querySelector(".nav__btn--menu"),
  // featuresMenu = document.querySelector(".nav__miniMenu--features"),
  // companyMenu = document.querySelector(".nav__miniMenu--company"),
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


// svg animation.....for "snap"
let animDelay = 0;
let animDuration = 4;
// svg anime 
allPath.forEach(function (eachPath, itsIndex) {
  const eachPathLength = Math.floor(eachPath.getTotalLength()).toString();;
  // eachPathLength = eachPathLength

  eachPath.style.strokeDasharray = `${eachPathLength}px`;
  eachPath.style.strokeDashoffset = `${eachPathLength}px`;
  eachPath.style.animationDuration = `${animDuration}s`;
  eachPath.style.animationDelay = `${animDelay}s`;
  animDelay += 0.15;
  animDuration -= 0.2;// this is to make the animation speed up towards the end
});
//the animDelay here will be the final value from the forEach loop
pathsParent.style.animationDelay = `${animDelay}s`;

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
  const currentMenu = currentBtn.parentElement;
  // if (!currentMenu.classList.contains("nav-links__li--miniMenu--open")) {
  //   // add display block to current miniMenu
  //   currentMiniMenu = currentMenu.lastElementChild;//the <ul> is the last child
  //   // currentMiniMenu.style.display = "block";
  //   console.log(currentMiniMenu);
  //   // currentMenu.style.display = "none" ;
  // }
  // setTimeout(() => {
    currentMenu.classList.toggle("nav-links__li--miniMenu--open");
  // },5);
  // console.log("open added to class list");
  
  currentBtn.classList.toggle("open");
  updateAriaExpanded();
}