let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper(".services_prices__mobile-list", {
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiperInstance) {
    swiperInstance.destroy();
    swiperInstance = null;
  }
}

function handleResize() {
  initSwiper();
}

document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
});

window.addEventListener("resize", handleResize);