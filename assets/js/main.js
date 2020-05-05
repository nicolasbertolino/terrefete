// Fullpagejs
new fullpage("#fullpage", {
  anchors: ["0", "1"],
  navigation: true,
  lockAnchors: true,
  scrollOverflow: true
});

function scrollFunction() {
  document.getElementById("scroll").click(fullpage_api.moveTo(1));
}

function topFunction() {
  document.getElementById("top").click(fullpage_api.moveTo(0));
}

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.clientY - 5) + "px; left: " + (e.clientX - 5) + "px;"
  );
});

// Intro GSAP
const element = document.querySelector("h1");
charming(element);

gsap.from("h1 span", {
  duration: 1,
  delay: 0.5,
  y: 30,
  opacity: 0,
  stagger: 0.05,
  ease: "power4"
});

gsap.from(".title h4", {
  duration: 1,
  delay: 1,
  y: 30,
  opacity: 0,
  ease: "power4"
});

gsap.from(".scroll", {
  duration: 1,
  delay: 1.3,
  opacity: 0,
  ease: "power4"
});