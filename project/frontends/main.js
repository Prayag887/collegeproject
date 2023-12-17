// // Throttle function
// function throttle(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if (time + wait - Date.now() < 0) {
//       fn();
//       time = Date.now();
//     }
//   };
// }

// // Parallax for moon
// window.addEventListener('scroll', throttle(parallaxMoon, 14));

// function parallaxMoon() {
//   var scrolled = window.pageYOffset;
//   var moon = document.querySelector(".moon");
//   var rev = (scrolled * - 0.4) + 'px';
//   var coords = (scrolled * 0.75) + 'px';
//   moon.style.transform = 'translate(' + rev + ', ' + coords + ')';
// }

// // Parallax for mountains
// window.addEventListener('scroll', throttle(parallaxMountains, 14));

// function parallaxMountains() {
//   var scrolled = window.pageYOffset;
//   var mountains = document.querySelector(".mountains_behind");
//   var coords = (scrolled * 0.2) + 'px';
//   mountains.style.transform = 'translateY(' + coords + ')';
// }

// // Parallax for stars
// window.addEventListener('scroll', throttle(parallaxStars, 14));

// function parallaxStars() {
//   var scrolled = window.pageYOffset;
//   var stars = document.querySelector(".stars");
//   var coords = (scrolled * 0.9) + 'px';
//   stars.style.transform = 'translateX(' + coords + ')';
// }










