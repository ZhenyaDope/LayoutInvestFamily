// SWIPER SLIDER SETTING

var swiper = new Swiper('.swiper-container', {
    
    spaceBetween: 30,
    freeMode: true,
    centerMode:true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767:{
        slidesPerView:1,
        freeMode: false,
    centerMode:false,
      },
      1300:{
        slidesPerView:3,
      },
      // 1400:{
      //   slidesPerView:2,
      // },
      1540: {
        slidesPerView:2,
      },
      1600:{
        slidesPerView: 2.5,
      },
    },

});

