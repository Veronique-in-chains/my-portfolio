
// responsive mobile menu

let hamburger = document.querySelector(".hamburger");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menu = document.querySelector(".nav__list");
let menuItem = document.querySelectorAll(".nav__link");

hamburger.addEventListener("click", responsiveMenu);

function responsiveMenu() {
  hamburger.classList.toggle("change");
  menu.classList.toggle("active");
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
}

menuItem.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("change");
  menu.classList.remove("active");
  bar1.classList.remove("change");
  bar2.classList.remove("change");
  bar3.classList.remove("change");
}

// onscroll fixed menu background

let navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}



// onscroll animation

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for(let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 30;
    
    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("reveal--active");
    } else {
      reveals[i].classList.remove("reveal--active");
    }
  }
}