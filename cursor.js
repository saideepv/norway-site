(function () {
  'use strict';

  var skip =
    window.matchMedia('(max-width: 600px)').matches ||
    !window.matchMedia('(pointer: fine)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (skip) return;

  document.documentElement.classList.add('custom-cursor-active');

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';

  var ring = document.createElement('div');
  ring.className = 'cursor-ring';

  var flag = document.createElement('div');
  flag.className = 'cursor-flag';
  flag.innerHTML =
    '<svg viewBox="0 0 220 160" width="32" height="23" aria-hidden="true">' +
    '<rect width="220" height="160" fill="#E42F28"/>' +
    '<rect x="60" width="40" height="160" fill="#fff"/>' +
    '<rect y="60" width="220" height="40" fill="#fff"/>' +
    '<rect x="70" width="20" height="160" fill="#205FAF"/>' +
    '<rect y="70" width="220" height="20" fill="#205FAF"/>' +
    '</svg>';

  document.body.appendChild(dot);
  document.body.appendChild(ring);
  document.body.appendChild(flag);

  var mouseX = 0, mouseY = 0;
  var ringX = 0, ringY = 0;
  var hasMoved = false;

  window.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!hasMoved) {
      ringX = mouseX;
      ringY = mouseY;
      hasMoved = true;
      document.documentElement.classList.add('cursor-visible');
    }

    dot.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px)';
    flag.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px)';
  });

  document.addEventListener('mouseleave', function () {
    document.documentElement.classList.remove('cursor-visible');
  });

  document.addEventListener('mouseenter', function () {
    if (hasMoved) document.documentElement.classList.add('cursor-visible');
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px)';
    requestAnimationFrame(animateRing);
  }
  requestAnimationFrame(animateRing);

  var flagTriggers = document.querySelectorAll('.why-norway');
  flagTriggers.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      document.documentElement.classList.add('cursor-flag-active');
    });
    el.addEventListener('mouseleave', function () {
      document.documentElement.classList.remove('cursor-flag-active');
    });
  });
})();
