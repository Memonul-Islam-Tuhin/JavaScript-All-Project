/*
 * Title: swiper-slider
 * Description: This is the main project simple of this project
 * Author: Memonul Islam ( Learn in Memonul )
 * Date: 1-11-2026
 *
 */

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: "1",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },

  on: {
    reachEnd: function () {
      setTimeout(() => {
        window.location.href = "./index.html";
      }, 5000);

      clearTimeout(this.reachEnd);
    },
  },
});
