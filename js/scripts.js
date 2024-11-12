const textElement = document.getElementById("typing-effect");
const text = "I Make your business more profitable with code...";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust speed here (e.g., 100ms per character)
  }
}

typeText();


// script.js

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to reveal elements when they come into view
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((reveal) => {
      console.log("Checking element:", reveal); // Debugging statement
      if (isInViewport(reveal)) {
          reveal.classList.add('active');
          console.log("Element revealed:", reveal); // Debugging statement
      }
  });
}

// Listen for scroll events
window.addEventListener('scroll', revealOnScroll);

// Initial check in case elements are in view from the start
revealOnScroll();

