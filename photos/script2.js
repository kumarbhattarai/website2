
let container = document.getElementById("ab");
let back = document.getElementById("backbtn");
let next = document.getElementById("nextbtn");

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  back.style.display = "none";
  next.style.display = "none";

  const images = container.getElementsByTagName("img");

  container.style.width = "100%";
  container.style.overflowX = "scroll"; 
}


container.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  container.style.scrollBehavior = "auto";
  container.scrollLeft += evt.deltaY;
});


next.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft += 1000;
});


back.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft -= 1000;
});
