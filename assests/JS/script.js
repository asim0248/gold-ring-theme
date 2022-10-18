var swiper = new Swiper(".testimonials", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    991: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

var swiper = new Swiper(".wed-ring-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

var swiper = new Swiper(".women-ring-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

var swiper = new Swiper(".men-ring-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

var swiper = new Swiper(".other-jewel-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    }
  },
});

let navbar = document.querySelector('.menu');

document.querySelector('.fa-bars').onclick = () =>{
    navbar.classList.toggle('mobile-active');
}

//value Tabs JS
let tredn_tab_1 = document.querySelector('#wed-tab');
let tredn_tab_2 = document.querySelector('#women-tab');
let tredn_tab_3= document.querySelector('#men-tab');
let tredn_tab_4 = document.querySelector('#oth-tab');

document.querySelector('.tr-tab-1').onclick = () =>{
    tredn_tab_1.classList.toggle('active-1');
    tredn_tab_2.classList.remove('active-1');
    tredn_tab_3.classList.remove('active-1');
    tredn_tab_4.classList.remove('active-1');

}
document.querySelector('.tr-tab-2').onclick = () =>{
  tredn_tab_2.classList.toggle('active-1');
  tredn_tab_1.classList.remove('active-1');
  tredn_tab_3.classList.remove('active-1');
  tredn_tab_4.classList.remove('active-1');
}
document.querySelector('.tr-tab-3').onclick = () =>{
  tredn_tab_3.classList.toggle('active-1');
  tredn_tab_2.classList.remove('active-1');
  tredn_tab_1.classList.remove('active-1');
  tredn_tab_4.classList.remove('active-1');
}
document.querySelector('.tr-tab-4').onclick = () =>{
  tredn_tab_4.classList.toggle('active-1');
  tredn_tab_2.classList.remove('active-1');
  tredn_tab_1.classList.remove('active-1');
  tredn_tab_3.classList.remove('active-1');
}

//value Tabs JS
let value1 = document.querySelector('.value-1');
let value2 = document.querySelector('.value-2');
let value3 = document.querySelector('.value-3');
let value4 = document.querySelector('.value-4');

document.querySelector('.first-1').onclick = () =>{
    value1.classList.toggle('active');
    value2.classList.remove('active');
    value3.classList.remove('active');
    value4.classList.remove('active');

}
document.querySelector('.first-2').onclick = () =>{
  value2.classList.toggle('active');
  value1.classList.remove('active');
  value3.classList.remove('active');
  value4.classList.remove('active');
}
document.querySelector('.first-3').onclick = () =>{
  value3.classList.toggle('active');
  value2.classList.remove('active');
  value1.classList.remove('active');
  value4.classList.remove('active');
}
document.querySelector('.first-4').onclick = () =>{
  value4.classList.toggle('active');
  value2.classList.remove('active');
  value3.classList.remove('active');
  value1.classList.remove('active');
}

