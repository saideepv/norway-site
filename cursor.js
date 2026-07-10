(function () {
  'use strict';

  var skip =
    window.matchMedia('(max-width: 600px)').matches ||
    !window.matchMedia('(pointer: fine)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (skip) return;

  var FLAGS = {
    '.why-norway':
      '<svg viewBox="0 0 220 160" width="20" height="14" aria-hidden="true">' +
      '<rect width="220" height="160" fill="#E42F28"/>' +
      '<rect x="60" width="40" height="160" fill="#fff"/>' +
      '<rect y="60" width="220" height="40" fill="#fff"/>' +
      '<rect x="70" width="20" height="160" fill="#205FAF"/>' +
      '<rect y="70" width="220" height="20" fill="#205FAF"/>' +
      '</svg>',
    '.why-Germany':
      '<svg viewBox="0 0 3 2" width="21" height="14" aria-hidden="true">' +
      '<rect width="3" height="0.667" fill="#1a1a1a"/>' +
      '<rect y="0.667" width="3" height="0.667" fill="#CC0000"/>' +
      '<rect y="1.333" width="3" height="0.667" fill="#FFCC00"/>' +
      '</svg>'
  };

  var flag = document.createElement('div');
  flag.className = 'cursor-flag';
  document.body.appendChild(flag);

  window.addEventListener('mousemove', function (e) {
    flag.style.transform = 'translate(' + (e.clientX + 12) + 'px,' + (e.clientY + 4) + 'px)';
  });

  Object.keys(FLAGS).forEach(function (selector) {
    var triggers = document.querySelectorAll(selector);
    if (!triggers.length) return;
    flag.innerHTML = FLAGS[selector];
    triggers.forEach(function (el) {
      if (selector === '.why-norway') el.style.cursor = 'none';
      el.addEventListener('mouseenter', function () {
        document.documentElement.classList.add('cursor-flag-active');
      });
      el.addEventListener('mouseleave', function () {
        document.documentElement.classList.remove('cursor-flag-active');
      });
    });
  });
})();
