// carousel  info-card
// carousel info-card

const carouselWrapper = document.querySelector(".wrapper");
const caroLeftBtn = document.querySelector(".left-btn");
const caroRightBtn = document.querySelector(".right-btn");
const infoCards = Array.from(carouselWrapper.children);

caroRightBtn.addEventListener("click", () => {
  const cardWidth = infoCards[0].offsetWidth;
  carouselWrapper.style.scrollBehavior = "smooth";

  const currentPosition = carouselWrapper.scrollLeft;
  const newPosition = currentPosition + cardWidth;

  carouselWrapper.scrollLeft = newPosition;
});

caroLeftBtn.addEventListener("click", () => {
  const cardWidth = infoCards[0].offsetWidth;

  const currentPosition = carouselWrapper.scrollLeft;
  const newPosition = currentPosition - cardWidth;
  carouselWrapper.scrollLeft = newPosition;
  carouselWrapper.style.scrollBehavior = "smooth";
});

if (window.innerWidth >= 768) {
  itemsPerPage = 5;
} else {
  itemsPerPage = 1;
}
