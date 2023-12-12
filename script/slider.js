//  slider
//   slider
const track = document.querySelector(".slider-track");
const slides = Array.from(track.children);

const nextButton = document.querySelector(".slider-rightBtn");
const prevButton = document.querySelector(".slider-leftBtn");

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

// this code is used to move each slides to the left * their index
const setSidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSidePosition);

// when you click left , move slides to the left
prevButton.addEventListener("click", (e) => {
  const currentPosition = track.scrollLeft;
  const newPosition = currentPosition - slideWidth;
  if (newPosition < 0) {
    let loopPosition = track.scrollWidth;
    newPosition === loopPosition;

    track.style.scrollBehavior = "smooth";
    track.scrollLeft = loopPosition;
  } else {
    track.style.scrollBehavior = "smooth";
    track.scrollLeft = newPosition;
  }
});

// when you click right, move slides to the right

nextButton.addEventListener("click", (e) => {
  const currentPosition = track.scrollLeft;

  const newPosition = currentPosition + slideWidth;
  const maxScrollPosition = track.scrollWidth;

  if (newPosition >= maxScrollPosition) {
    const loopPosition = 0;
    track.scrollTo({
      behavior: "smooth",
      left: loopPosition,
    });
  } else {
    track.scrollTo({
      behavior: "smooth",
      left: newPosition,
    });
  }
});
