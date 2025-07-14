const texts = document.querySelectorAll('.text-block');
let currentIndex = 0;

function animateText() {
  texts.forEach((text, i) => {
    text.style.opacity = '0.1';
    text.style.transform = 'scale(0.8)';
  });

  const activeText = texts[currentIndex];
  activeText.style.opacity = '1';
  activeText.style.transform = 'scale(1)';

  currentIndex = (currentIndex + 1) % texts.length;
}

animateText();
setInterval(animateText, 4000);