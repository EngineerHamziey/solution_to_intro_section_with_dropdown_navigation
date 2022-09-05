const allPath = document.querySelectorAll(".logo-path");
const pathsParent = document.querySelector(".snap-svg");
const navMenu = document.querySelector("nav.nav");
const navBtn = document.querySelector(".nav-btn");
const eachLink = document.querySelectorAll(".each-link")

navBtn.addEventListener("click", bringMyNav);


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

function bringMyNav() {
  navMenu.classList.toggle("open-menu");
}

//the animDelay here will be the finam value from the forEach loop
pathsParent.style.animationDelay = `${animDelay}s`;
// SVG anime ends
