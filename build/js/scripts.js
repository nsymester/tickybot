backToTopButton = document.getElementById('js-back-to-top-btn');

backToTopButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// fade out

function fadeOut(el) {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = 'none';
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || 'block';

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

fadeOut(backToTopButton);
window.addEventListener('scroll', function() {
  if (window.scrollY > 400) {
    fadeIn(backToTopButton); //.fadeIn(200);
  } else {
    fadeOut(backToTopButton); // fadeOut(200);
  }
});
