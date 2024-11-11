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
