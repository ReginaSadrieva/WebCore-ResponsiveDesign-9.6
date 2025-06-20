let swiperInstance = null;

function initSwiper() {
  if (window.innerWidth < 768 && !swiperInstance) {
    swiperInstance = new Swiper(".services_brands__list", {
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

function updateToggleButtonDisplay() {
  const toggleBtn = document.querySelector(".services_brands__toggle");
  if (!toggleBtn) return;

  if (window.innerWidth < 768) {
    toggleBtn.style.display = "none";
  } else {
    toggleBtn.style.display = "flex";
  }
}

function setupToggleButton() {
  const toggleBtn = document.querySelector(".services_brands__toggle");
  const itemsList = document.querySelector(".services_brands__items");
  const toggleText = toggleBtn?.querySelector(".services_brands__toggle-text");
  const iconExpand = toggleBtn?.querySelector(".services_brands__icon--expand");
  const iconCollapse = toggleBtn?.querySelector(".services_brands__icon--collapse");

  if (!toggleBtn || !itemsList || !toggleText) return;

  toggleBtn.addEventListener("click", () => {
    const expanded = itemsList.classList.toggle("services_brands__items--expanded");
    toggleText.textContent = expanded ? "Скрыть" : "Показать все";
    toggleBtn.classList.toggle("services_brands__toggle--expanded", expanded);

    if (iconExpand && iconCollapse) {
      iconExpand.style.display = expanded ? "none" : "inline";
      iconCollapse.style.display = expanded ? "inline" : "none";
    }
  });
}

function handleResize() {
  initSwiper();
  updateToggleButtonDisplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initSwiper();
  updateToggleButtonDisplay();
  setupToggleButton();
});

window.addEventListener("resize", handleResize);