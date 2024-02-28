let menuphone = document.querySelector(".menu-phone");
let navphone = document.querySelector(".nav-phone");

menuphone.addEventListener("click", () => {
    navphone.classList.toggle("active");
});

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