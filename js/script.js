const 
  customCursor = document.querySelector(".nav__cursor"),
  allPath = document.querySelectorAll(".nav__path"),
  pathsParent = document.querySelector(".nav__svg"),
  navMenu = document.querySelector(".nav"),
  navBtn = document.querySelector(".nav__btn--menu"),
  featuresBtn = document.querySelector(".nav-links__li__btn--features-btn"),
  companyBtn = document.querySelector(".nav-links__li__btn--company-btn"),
  allExpandables = document.querySelectorAll(".btn--expandables"),
  miniMenuParentLis = document.querySelectorAll(".nav-links__li--miniMenu"),
  navLinkLi = document.querySelectorAll(".nav-links li"),
  avatar = document.querySelector(".mouse-over-avatar-wrap");


navBtn.addEventListener("click", toggleHamburgerMenu);
companyBtn.addEventListener("click", toggleMiniMenu);
featuresBtn.addEventListener("click", toggleMiniMenu);
window.addEventListener("mousemove", myCursor);
document.addEventListener("click", handleClickOutsideMenu);

updateAriaExpanded();
mouseOvercomponents();

// svg animation.....for "snap"
let animDelay = 0;
let animDuration = 4;

allPath.forEach(function (eachPath, itsIndex) {
  const eachPathLength = Math.floor(eachPath.getTotalLength());
  // eachPathLength = eachPathLength

  eachPath.style.strokeDasharray = `${eachPathLength}px`;
  eachPath.style.strokeDashoffset = `${eachPathLength}px`;
  eachPath.style.animationDuration = `${animDuration}s`;
  eachPath.style.animationDelay = `${animDelay}s`;
  animDelay += 0.15;
  animDuration -= 0.2;// this is to make the animation speed up towards the end
});
//the animDelay here will be the final value from the forEach loop
pathsParent.style.animationDelay = `${animDelay + 1}s`;


// my functions
function myCursor(event) {
  //pageX and pageYgive the exact position of our mouse
  customCursor.style.top = event.pageY + "px";
  customCursor.style.left = event.pageX + "px";
}

//to change the custom cursor styling once the mouse is over it
function mouseOvercomponents() {
  navLinkLi.forEach(eachLink => {
    eachLink.addEventListener("mouseover", () => {
      customCursor.classList.add("nav__cursor--over-nav-links");
    });
  });
    
  //remove the class when mouse leaves
  navLinkLi.forEach(eachLink => {
    eachLink.addEventListener("mouseleave", () => {
      customCursor.classList.remove("nav__cursor--over-nav-links");
    });
  }); 

  //when mouse goes over image
  avatar.addEventListener("mouseover", ()  => {
    customCursor.classList.add("nav__cursor--over-avatar");
  });
  avatar.addEventListener("mouseleave", ()  => {
    customCursor.classList.remove("nav__cursor--over-avatar");
  });
}

function updateAriaExpanded() {
  allExpandables.forEach(expandable => {
  if(expandable.classList.contains("open")) {
    expandable.setAttribute("aria-expanded", "true");
  }else {
    expandable.setAttribute("aria-expanded", "false");
  }
  
  });
}

function toggleHamburgerMenu() {
  navMenu.classList.toggle("nav--open");
  navBtn.classList.toggle("open");
  
  // close mini menus when nav closes
  if(!(navBtn.classList.contains("open"))) {
    closeMiniMenu();
  }

  updateAriaExpanded();
}

function toggleMiniMenu(event) {
  // to determine which of the two btn is pressed
  const currentBtn = event.target;
  const currentMenu = currentBtn.parentElement;
  currentMenu.classList.toggle("nav-links__li--miniMenu--open");
  
  currentBtn.classList.toggle("open");
  updateAriaExpanded();
}

function handleClickOutsideMenu(e) {
  clickedComponent = e.target;
  // if on mobile, do not close nav menu when other nav btns are clicked 
  if ((window.innerWidth < 1125)) {
    // the "not" i.e "!" means ignore the click if....
      if(!(
        (clickedComponent.classList.contains("btn--expandables") ||
        clickedComponent.classList.contains("nav__miniMenu") || 
        clickedComponent.classList.contains("nav__miniMenu__li") || 
        clickedComponent.parentElement.classList.contains("nav__miniMenu")|| 
        clickedComponent.parentElement.classList.contains("nav__miniMenu__li"))
      )){ 
        closeMiniMenu();
      }
      if (
        !((clickedComponent.classList.contains("btn--expandables") || 
        clickedComponent.classList.contains("nav-links__li") || 
        clickedComponent.parentElement.classList.contains("nav__miniMenu") || 
        clickedComponent.parentElement.classList.contains("nav__miniMenu__li")))
      ){
        if (!clickedComponent.classList.contains("nav-links__li__btn") && !clickedComponent.classList.contains("nav-links")) {
          // the "not" i.e "!" means ignore the click if...
          if (!(clickedComponent.classList.contains("nav__miniMenu") || 
        clickedComponent.classList.contains("nav__miniMenu__li"))){
            navMenu.classList.remove("nav--open");
            navBtn.classList.remove("open");
          }
        }
      }
  } else if(
      !(clickedComponent.classList.contains("btn--expandables") || 
      clickedComponent.classList.contains("nav-links__li") || 
      clickedComponent.classList.contains("nav__miniMenu") || 
      clickedComponent.classList.contains("nav__miniMenu__li") || 
      clickedComponent.parentElement.classList.contains("nav__miniMenu") || 
      clickedComponent.parentElement.classList.contains("nav__miniMenu__li")
    )){

    //else close all menus
      navMenu.classList.remove("nav--open");
      navBtn.classList.remove("open");
      closeMiniMenu();
  } 
}

function closeMiniMenu() {
  miniMenuParentLis.forEach(eachLi => {
    eachLi.classList.remove("nav-links__li--miniMenu--open");
    featuresBtn.classList.remove("open");
    companyBtn.classList.remove("open");
  });

  updateAriaExpanded();
}