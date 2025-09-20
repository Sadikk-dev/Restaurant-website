let navbarButton = document.getElementById('sidebar-btn');
let navbar = document.querySelector('.header .navbar');
let header = document.querySelector('.header');

navbarButton.onclick = () => {
    navbar.classList.toggle('show-navbar');
    navbarButton.classList.toggle('fa-times');
}

window.onscroll = () => {
  if(window.screenY > 20) header.classList.add('active');
  navbar.classList.remove('show-navbar');
  navbarButton.classList.remove('fa-times');
}

var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween:20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
