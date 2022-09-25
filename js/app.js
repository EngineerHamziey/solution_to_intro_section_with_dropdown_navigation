const allPath = document.querySelectorAll(".logo-path");
const pathsParent = document.querySelector(".snap-svg");
const navMenu = document.querySelector("nav.nav");
const navBtn = document.querySelector(".nav-btn");
const featuresMenu = document.querySelector(".features-menu");
const companyMenu = document.querySelector(".company-menu");
const featuresBtn = document.querySelector(".features-btn");
const companyBtn = document.querySelector(".company-btn");
const allExpandables = document.querySelectorAll(".expandables");
const arrowDown = document.querySelectorAll(".arrow-down");


navBtn.addEventListener("click", bringMyNav);
companyBtn.addEventListener("click", toggleMiniMenu);
// companyBtn.addEventListener("mouseover", openCompanyMenu);
featuresBtn.addEventListener("click", toggleMiniMenu);
// featuresBtn.addEventListener("mouseover", openFeaturesMenu);

// updateAriaExpanded();


// function updateAriaExpanded() {
//   allExpandables.forEach(expandable => {
//   if(expandable.classList.contains("open")) {
//     expandable.setAttribute("aria-expanded", "true");
//   }else {
//     expandable.setAttribute("aria-expanded", "false");
//   }
  
//   });
// }

// // svg animation.....for "snap"
// let animDelay = 0;
// let animDuration = 4;
// // svg anime 
// allPath.forEach(function (eachPath, itsIndex) {
//   const eachPathLength = Math.floor(eachPath.getTotalLength()).toString();;
//   // eachPathLength = eachPathLength

//   eachPath.style.strokeDasharray = `${eachPathLength}px`;
//   eachPath.style.strokeDashoffset = `${eachPathLength}px`;
//   eachPath.style.animationDuration = `${animDuration}s`;
//   eachPath.style.animationDelay = `${animDelay}s`;
//   animDelay += 0.15;
//   animDuration -= 0.2;// this is to make the animation speed up towards the end
// });
// //the animDelay here will be the final value from the forEach loop
// pathsParent.style.animationDelay = `${animDelay}s`;
// SVG anime ends

// console.log(arrowDown);
// function bringMyNav() {
//   console.log("Here is your nav bro :\)");
//   navMenu.classList.toggle("open-menu");
//   navBtn.classList.toggle("open");
//   // close mini menus when nav closes
//   if(!(navBtn.classList.contains("open"))) {
//     // console.log(true);
//     arrowDown.forEach(eachArrow => {
//       featuresMenu.classList.remove("open");
//       featuresBtn.classList.remove("open");
//       companyMenu.classList.remove("open");
//       companyBtn.classList.remove("open");
//       eachArrow.classList.remove("chang-to-up");
//     });
//   }
//   // now set aria-expanded for all necessary
//   updateAriaExpanded();
// }

// function toggleMiniMenu(event) {
//   //to determine which of the two btn is pressed
//   const currentBtn = event.target;
//   currentBtn.parentElement.classList.toggle("open");
//   console.log("open added to class list");
  
//   currentBtn.classList.toggle("open");
//   updateAriaExpanded();
// }