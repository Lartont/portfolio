const words = ["images out of thin air", "video without a camera", "worlds from a single prompt", "visuals for brands of the future"];
const el = document.getElementById('typed');
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
  const current = words[wordIndex];

  if (!deleting) {
    charIndex++;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
  } else {
    charIndex--;
    el.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(tick, deleting ? 35 : 60);
}

tick();
