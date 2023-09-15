const testimonialCarousel = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: true,
    pagination: false,
    drag: true,
    breakpoints: {
      360: {
          perPage: 1,
          perMove: 1,
          },
      480: {
        perPage: 2,
        perMove: 1,
        },   
      640: {
        perPage: 2,
        perMove: 1,
      },
      720: {
        perPage: 2,
        perMove: 1,
      },
      1024: {
        perPage: 3,
        perMove: 1,
      },
    }
}


const galleryCarousel = {
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoplay: true,
  interval: 3000,
  pauseOnHover: false,
  pauseOnFocus: false,
  arrows: true,
  pagination: true,
  drag: true,
  breakpoints: {
    360: {
        perPage: 1,
        perMove: 1,
        },
    480: {
      perPage: 2,
      perMove: 1,
      },   
    640: {
      perPage: 2,
      perMove: 1,
    },
    720: {
      perPage: 2,
      perMove: 1,
    },
    1024: {
      perPage: 3,
      perMove: 1,
    },
  }
}


export { testimonialCarousel, galleryCarousel }