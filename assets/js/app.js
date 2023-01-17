const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const topScroll = document.getElementById("topScroll");

// menu toggle
let result = false;
menuBtn.onclick = () => {
  if (!result) {
    menu.classList.remove("hidden");
    result = true;
  } else {
    menu.classList.add("hidden");
    result = false;
  }
};

// hide on scroll
let beforeScroll = 0;
window.onscroll = () => {
  let newScroll = window.scrollY;
  if (newScroll < beforeScroll) {
    topScroll.classList.add("hidden");
    beforeScroll = newScroll;
  } else {
    topScroll.classList.remove("hidden");

    beforeScroll = newScroll;
  }
};

// bottom to stop by click button

topScroll.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    duration: "10s",
  });
  window.scrollY = 0;
  console.log(window.scrollY);
});
