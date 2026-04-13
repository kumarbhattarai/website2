document.addEventListener("contextmenu", (e) => e.preventDefault());

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");

  if (sidebar.style.width === "0px" || !sidebar.style.width) {
    sidebar.style.display = "flex";
    sidebar.style.transition = "width 0.3s ease";
    sidebar.style.width = "130px";
    document.body.addEventListener("click", handleClickOutside, true);
  }
}

function closeBar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.width = "0px";
  setTimeout(() => {
    sidebar.style.display = "none";
  }, 300);
  document.body.removeEventListener("click", handleClickOutside, true);
}

function handleClickOutside(event) {
  const sidebar = document.querySelector(".sidebar");
  const openButton = document.querySelector(".hideOnPc");

  if (!sidebar.contains(event.target) && !openButton.contains(event.target)) {
    closeBar();
  }
}

function scrollDown() {
  window.scrollBy({
    top: 820,
    left: 0,
    behavior: "smooth",
  });
}

var typed = new Typed(".info", {
  strings: ["Student", "Backend Developer", "Coder"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.body.classList.remove("loading");
  }, 1200);
});

const liscence = document.getElementById("lisc");
date = new Date().getFullYear();
liscence.innerText = date;

// Optimized scroll handler with throttling to reduce main-thread work
let scrollTimeout;
let lastScrollY = 0;
const scrollThresholdDown = isMobileDevice() ? 100 : 200;
const scrollThresholdLeft = isMobileDevice() ? 80 : 200;
const scrollThresholdRight = isMobileDevice() ? 150 : 200;

// Use Intersection Observer instead of scroll events for better performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === "down") {
        entry.target.classList.add(
          "animate__animated",
          "animate__slideInDown",
          "text-left",
        );
        entry.target.style.visibility = "visible";
      } else if (entry.target.id === "left") {
        entry.target.classList.add(
          "animate__animated",
          "animate__zoomIn",
          "text-center",
        );
        entry.target.style.visibility = "visible";
      } else if (entry.target.classList.contains("right")) {
        entry.target.classList.add(
          "animate__animated",
          "animate__pulse",
          "text-left",
        );
        entry.target.style.visibility = "visible";
      }
    }
  });
}, observerOptions);

// Observe animation elements
document.addEventListener("DOMContentLoaded", () => {
  const downEl = document.getElementById("down");
  const leftEl = document.getElementById("left");
  const rightEls = document.querySelectorAll(".right");

  if (downEl) observer.observe(downEl);
  if (leftEl) observer.observe(leftEl);
  rightEls.forEach((el) => observer.observe(el));
});
