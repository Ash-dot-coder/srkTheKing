alert("Happiest 59th Birth'Day 😎")

const swiperRomance = new Swiper(".swiper-romance", {
  // Optional parameters
  direction: "vertical",
  speed: 600,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 2,
  spaceBetween: 10,
});

const swiperAction = new Swiper(".swiper-action", {
  // Optional parameters
  direction: "vertical",
  speed: 600,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  slidesPerView: 3,
  spaceBetween: 10,
});

const swiperDrama = new Swiper(".swiper-drama", {
  // Optional parameters
  direction: "vertical",
  speed: 600,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  slidesPerView: 2,
  spaceBetween: 10,
});

// toggle the banner left
function toggleBanner() {
  const banner = document.querySelector(".banner");
  const header = document.querySelector("header");
  const bannerMiddle = document.querySelector(".banner-middle");
  const bannerRight = document.querySelector(".banner-right");
  banner.classList.toggle("active");
  header.classList.toggle("active");
  bannerMiddle.classList.toggle("active");
  bannerRight.classList.toggle("active");
}

// toggle menu
function toggleMenu(){
    const navMobile = document.querySelector('.nav-mobile')
    const menu = document.querySelector('.menu');
    navMobile.classList.toggle('active');
    menu.classList.toggle('active');
}
