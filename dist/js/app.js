let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('callToAction');
let header = document.querySelector('header');

// Parallax effect
window.addEventListener('scroll', function () {
  var value = window.scrollY;
  moon.style.top = -value * -1.05 + 'px';
  stars.style.left = value * 0.25 + 'px';
  mountains_behind.style.top = -value * -0.5 + 'px';
  header.style.top = -value * -0.5 + 'px';
  mountains_front.style.top = -value * 0 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  text.style.marginRight = (value + 120) * 3 + 'px';
});
