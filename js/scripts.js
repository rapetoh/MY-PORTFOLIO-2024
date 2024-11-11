const textElement = document.getElementById("typing-effect");
const text = "Your dynamic text here...";
let index = 0;

function typeText() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust speed here (e.g., 100ms per character)
  }
}

typeText();
