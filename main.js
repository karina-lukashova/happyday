const swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  speed: 500,
});