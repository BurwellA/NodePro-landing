
const texts = document.querySelectorAll('.text');
let index = 0;

function animateNext() {
  texts.forEach((el, i) => {
    el.style.opacity = '0.2';
    el.style.transform = 'scale(0.8)';
  });

  const active = texts[index];
  active.style.opacity = '1';
  active.style.transform = 'scale(1)';

  index = (index + 1) % texts.length;
}

animateNext();
setInterval(animateNext, 5000);
