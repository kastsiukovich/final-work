const getSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,

    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    speed: 800,

    effect: "flip",

    keyboard: {
      enabled: true,
      onlyInViewport: true,

    },
    mousewheel: {
      sensitivity: 1,

    },

    slidesPerView: 1,
    initialSlide: 1,



    breakpoints: {
      320: {
        autoplay: false,
      },

    }
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 0,

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      650: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 0,
      }
    },
  });

  var swiper = new Swiper(".mySwiper3", {

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: "coverflow",
    coverflowEffect: {

      stratch: 50,
      slideShadow: true,
    },
    loop: true,


  });

  var swiper = new Swiper(".mySwiper4", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: 'cube',

  });
}
getSwiper()