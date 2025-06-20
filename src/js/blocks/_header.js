document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.header__menu-btn');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1119) {
        menu.classList.toggle('menu--open');
        if (screenWidth >= 768 && screenWidth <= 1119) {
          overlay.classList.toggle('overlay--active');
        }
      }
    });
  }
});