export function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
