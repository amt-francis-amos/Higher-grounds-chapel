let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
  slideIndex++;
  showSlides(slideIndex);
}, 5000); 

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide, i) => {
    slide.style.display = i + 1 === slideIndex ? "block" : "none";
    dots[i].classList.toggle("active", i + 1 === slideIndex);

 
    const bg = slide.getAttribute('data-background');
    if (bg) {
      slide.style.backgroundImage = `url(${bg})`;
    }
  });
}






// ---- MENU -----

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon i');

  navLinks.classList.toggle('show');


  if (navLinks.classList.contains('show')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}


const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;



var swiper = new Swiper('.ministry-swiper', {
  slidesPerView: 1, /* Default: 1 slide at a time */
  spaceBetween: 20,
  loop: true, /* Infinite loop */
  autoplay: {
    delay: 3000, /* Auto slide every 3 seconds */
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2, /* 2 slides at medium screens */
    },
    1024: {
      slidesPerView: 3, /* 3 slides at large screens */
    },
  },
});