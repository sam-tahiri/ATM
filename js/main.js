// navigation bar effects on scrol
window.addEventListener("scroll", function(){
  const header_position = document.querySelector(".header-position");
  header_position.classList.toggle("sticky", window.scrollY > 0)
});

// display menu phone
let menuphone = document.querySelector(".menu-phone");
let navphone = document.querySelector(".nav-phone");

menuphone.addEventListener("click", () => {
    navphone.classList.toggle("active");
});

// configration slider of testimonainl
var swiper = new Swiper(".custem", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
});