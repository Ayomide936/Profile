const slides = document.querySelectorAll(".airtel-slide");
let intervalId = null;
let setIndex = 0;
const navSlider = document.getElementById("nav-slider1");
const Body = document.getElementById("body");
const navSlider2 = document.getElementById("nav-slider2");
const navSlider3 = document.getElementById("nav-slider3");
const navSlider4 = document.getElementById("nav-slider4");
const Slider1 = document.querySelector(".slider1");
const Slider2 = document.getElementById("slider2");
const Slider3 = document.getElementById("slider3");
const Slider4 = document.getElementById("slider4");

document.addEventListener("DOMContentLoaded",intialSlide)

function intialSlide() {
   
        slides[setIndex].classList.add("display");
    
       
        setInterval(nextSlider,6000);
}
   
function showSlide(index) {
        if(index >= slides.length) {
          setIndex = 0;
        }
        else if(index < 0) {
             setIndex = slides.length - 1;
        }
      slides.forEach(slide => {
        slide.classList.remove("display")
      });
      slides[setIndex].classList.add("display");

    }

function prevSlider() {
  clearInterval(intervalId)
    setIndex--;
    showSlide(setIndex)
}
function nextSlider() {
      setIndex++;
      showSlide(setIndex);
}
function show() {

}

function displayBtn(param) {
  const display = document.querySelectorAll(param);
  console.log(display)
  display.forEach( dis => dis.classList.add("btn-display"))
   Body.classList.add(".hidden-scroll")
}

function noDisplay(param) {
 const display = document.querySelectorAll(param);
 console.log(display)
 display.forEach( dis => dis.classList.remove("btn-display"))
 Body.classList.remove(".hidden-scroll")
}
show()
/* 
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
}); */

const flage = document.getElementById("flage");
const items = Array.from(document.querySelectorAll(".flag_item"));
const itemWidth = items[0].offsetWidth + 20; // Include margin
let currentIndex = 0;

function moveSlide(direction) {
    currentIndex += direction;

    // If we go past the last item, reset to the beginning
    if (currentIndex >= items.length) {
        currentIndex = 0;
    } 
    // If we go past the first item in reverse, go to the last
    else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    flage.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}