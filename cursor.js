(function () {
  'use strict';

  // Master switch — flip to true to bring the custom cursor back.
  // Everything below (flag-follow on .why-norway, media-query gating) stays
  // intact so re-enabling is a one-line change, not a rebuild.
  var ENABLED = false;
  if (!ENABLED) return;

  var skip =
    window.matchMedia('(max-width: 600px)').matches ||
    !window.matchMedia('(pointer: fine)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (skip) return;

  var flag = document.createElement('div');
  flag.className = 'cursor-flag';
  flag.innerHTML =
    '<svg viewBox="0 0 220 160" width="20" height="14" aria-hidden="true">' +
    '<rect width="220" height="160" fill="#E42F28"/>' +
    '<rect x="60" width="40" height="160" fill="#fff"/>' +
    '<rect y="60" width="220" height="40" fill="#fff"/>' +
    '<rect x="70" width="20" height="160" fill="#205FAF"/>' +
    '<rect y="70" width="220" height="20" fill="#205FAF"/>' +
    '</svg>';
  document.body.appendChild(flag);

  window.addEventListener('mousemove', function (e) {
    flag.style.transform = 'translate(' + (e.clientX + 12) + 'px,' + (e.clientY + 4) + 'px)';
  });

  var flagTriggers = document.querySelectorAll('.why-norway');
  flagTriggers.forEach(function (el) {
    el.style.cursor = 'none';
    el.addEventListener('mouseenter', function () {
      document.documentElement.classList.add('cursor-flag-active');
    });
    el.addEventListener('mouseleave', function () {
      document.documentElement.classList.remove('cursor-flag-active');
    });
  });
})();
