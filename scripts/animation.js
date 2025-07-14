
const texts = document.querySelectorAll('.anim-text');
let index = 0;

function cycleText() {
  texts.forEach((t, i) => {
    t.style.opacity = '0.2';
    t.style.transform = 'scale(1)';
  });
  const current = texts[index];
  current.style.opacity = '1';
  current.style.transform = 'scale(1.08)';

  setTimeout(() => {
    current.style.opacity = '0.2';
    current.style.transform = 'scale(1)';
    index = (index + 1) % texts.length;
    setTimeout(cycleText, 2000);
  }, 4000);
}

window.onload = () => {
  setTimeout(cycleText, 1000);
};
