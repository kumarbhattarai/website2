// Alert user to use desktop for a better experience
// alert("Use desktop for better experience");

// Get references to the container and buttons
let container = document.getElementById("ab");
let back = document.getElementById("backbtn");
let next = document.getElementById("nextbtn");

// Function to check if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

// Adjust styles and behavior for mobile devices
if (isMobileDevice()) {
  // Hide next and back buttons
  back.style.display = "none";
  next.style.display = "none";

  // Increase image width for better viewing on mobile
  const images = container.getElementsByTagName("img");
//   for (let img of images) {
//     // img.style.width = "100vw";
//     // img.style.height="40vh" // Make images full width
//   }

  // Optionally, adjust container style for mobile
  container.style.width = "100%";
  container.style.overflowX = "scroll"; // Ensure horizontal scrolling if needed
}

// Add wheel event listener to container
container.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  container.style.scrollBehavior = "auto";
  container.scrollLeft += evt.deltaY;
});

// Add click event listener to next button
next.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft += 1000;
});

// Add click event listener to back button
back.addEventListener("click", () => {
  container.style.scrollBehavior = "smooth";
  container.scrollLeft -= 1000;
});
