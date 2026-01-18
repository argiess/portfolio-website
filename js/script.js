// BURGER MENU START
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".list__menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".list__link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// BURGER MENU END

// SCROLL EFFECT START
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 69){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});

document.addEventListener("keydown", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
});
// SCROLL EFFECT END


// HEADER AUTO-HIDE + SHOW ON SCROLL START
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  let lastScroll = window.pageYOffset;
  let hideTimeout;

  function hideHeader() {
    header.style.top = "-100px"; // adjust to your header height
  }

  function showHeader() {
    header.style.top = "0";
    clearTimeout(hideTimeout);

    // only run auto-hide if screen is wider than 600px
    if (window.innerWidth > 600) {
      hideTimeout = setTimeout(() => {
        hideHeader();
      }, 3000); // auto-hide after 3s
    }
  }

  // initial state
  showHeader();

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (window.innerWidth > 600) {
      if (currentScroll > lastScroll) {
        // scrolling down → hide
        hideHeader();
      } else {
        // scrolling up → show (with conditional timer)
        showHeader();
      }
    }

    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // prevent negative scroll
  });

  // re-check on resize (important if resizing window)
  window.addEventListener("resize", () => {
    clearTimeout(hideTimeout);
    showHeader(); // reset behavior after resize
  });
});
// HEADER AUTO-HIDE + SHOW ON SCROLL END

// CURR LINK ACTIVE COLOR START
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".list__link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`.list__link[href="#${id}"]`);

        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.remove("curr", "curr-cta");
          });

          if (link) {
            if (id === "contact") {
              link.classList.add("curr-cta");
            } else {
              link.classList.add("curr");
            }
          }
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
// CURR LINK ACTIVE COLOR END

// REVIEW SLIDER START
const swiper = new Swiper('.js-review-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: 'js-reviews-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});
// REVIEW SLIDER END