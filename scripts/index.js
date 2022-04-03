const swiperTeamConfig = (width) => {
    if (width < 768) {
        return {
            slidesPerView: 2,
            spaceBetween: 8,
            slidesPerGroup: 2,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".team__slide",
                clickable: true,
            },
        }
    }
    if (width >= 768 && width < 1440) {
        return {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".team__slide",
                clickable: true,
            },
        }
    }
    if (width >= 1440) {
        return {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: ".team__slide",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        }
    }
}
let swiperTeam = new Swiper(".team__cards", swiperTeamConfig(document.documentElement.clientWidth));

  // const swiper = new Swiper(".swiper", {
  //   slidesPerView: 2,
  //   spaceBetween: 8,
  //   slidesPerGroup: 2,
  //   loop: true,
  //   loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  // });

