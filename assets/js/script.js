// navbar sidebar js
const sidebar = document.getElementById("mobileSidebar");
const overlay = document.getElementById("sidebarOverlay");
const toggleBtn = document.getElementById("openSidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.style.display = "none";
});
// menu slider js
let menuSwiper;

function initMenuSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 1024 && !menuSwiper) {
    menuSwiper = new Swiper(".menu-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  } else if (screenWidth > 1024 && menuSwiper) {
    menuSwiper.destroy(true, true);
    menuSwiper = undefined;
  }
}

// Init on load
window.addEventListener("load", initMenuSwiper);
// Re-init on resize
window.addEventListener("resize", initMenuSwiper);

// owl carousel slider
$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // ✅ Arrow controls
  $(".custom-next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(".custom-prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});
// icrease decrease counter
let count = 2;
function updateDisplay() {
  document.getElementById("count").textContent = count
    .toString()
    .padStart(2, "0");
}
function increase() {
  count++;
  updateDisplay();
}
function decrease() {
  if (count > 0) {
    count--;
    updateDisplay();
  }
}
// Initial update
updateDisplay();
// sidebar menu js
$(document).foundation();

$("#example-vert-tabs").on("change.zf.tabs", function () {
  $(".title-bar").foundation("toggleMenu");
});
