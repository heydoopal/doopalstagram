import { photoData } from './data.js';
import {
  handleFollow,
  handleStar,
  initializeButtonStates,
} from './buttonHandlers.js';
import { initializeSwiper } from './swiper.js';

const starButton = document.querySelector('.star-button i');
const followButton = document.querySelector('.follow-button');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const followersCount = document.querySelector('.followers-count');

photoData.forEach((photo) => {
  const swiperSlide = document.createElement('div');
  swiperSlide.classList.add('swiper-slide');

  const img = document.createElement('img');
  img.src = photo.src;
  img.alt = photo.alt;

  swiperSlide.appendChild(img);
  swiperWrapper.appendChild(swiperSlide);
});

initializeButtonStates(starButton, followButton, followersCount);

starButton.addEventListener('click', () => handleStar(starButton));
followButton.addEventListener('click', () =>
  handleFollow(followButton, followersCount)
);

initializeSwiper();
