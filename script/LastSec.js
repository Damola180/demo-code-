// last section code

const trackLastSec = document.querySelector(".lastSec-track");
const slidesOfLastSec = Array.from(trackLastSec.children);
const nextButtonLastSec = document.querySelector(".last-rightBtn");
const prevButtonLastSec = document.querySelector(".last-leftBtn");
const txtContainer = document.querySelector(".slider-txt");
const eachTxt = Array.from(txtContainer.children);

//  get the length of the slide[0]
const slideSizeLastSec = slidesOfLastSec[0].getBoundingClientRect();
const slideWidthLastSec = slideSizeLastSec.width;

// this code is used to move each slides to the left * their index
const setSidePositionLastSec = (slide, index) => {
  slide.style.left = slideWidthLastSec * index + "px";
};
slidesOfLastSec.forEach(setSidePositionLastSec);

// FOR THE TEXT
let currentTxt = 0;
const showTxt = () => {
  eachTxt.forEach((eachTxt) => eachTxt.classList.add("viewtxt"));

  eachTxt[currentTxt].classList.remove("viewtxt");
};

// when you click left , move slides to the left
prevButtonLastSec.addEventListener("click", (e) => {
  const currentPosition = trackLastSec.scrollLeft;
  const newPosition = currentPosition - slideWidthLastSec;
  if (newPosition < 0) {
    let loopPosition = trackLastSec.scrollWidth;
    newPosition === loopPosition;

    trackLastSec.style.scrollBehavior = "smooth";
    trackLastSec.scrollLeft = loopPosition;
  } else {
    trackLastSec.style.scrollBehavior = "smooth";
    trackLastSec.scrollLeft = newPosition;
  }

  // for text on the prev btn
  currentTxt = (currentTxt - 1 + eachTxt.length) % eachTxt.length;

  showTxt();
});

// when you click right, move slides to the right

nextButtonLastSec.addEventListener("click", (e) => {
  const currentPosition = trackLastSec.scrollLeft;

  const newPosition = currentPosition + slideWidthLastSec;

  const maxScrollPosition = trackLastSec.scrollWidth;

  if (newPosition >= maxScrollPosition) {
    const loopPosition = 0;
    trackLastSec.scrollTo({
      behavior: "smooth",
      left: loopPosition,
    });
  } else {
    trackLastSec.scrollTo({
      behavior: "smooth",
      left: newPosition,
    });
  }

  // for text on the nextbtn
  currentTxt = (currentTxt + 1) % eachTxt.length;

  showTxt();
});

showTxt();
