document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.menu__icon--close');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');

  if (closeBtn && menu) {
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      if (overlay) {
        overlay.classList.remove('overlay--active');
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      menu.classList.remove('menu--open');
      overlay.classList.remove('overlay--active');
    });
  }
});