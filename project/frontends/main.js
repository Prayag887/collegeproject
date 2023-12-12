// window.addEventListener('scroll', throttle(parallax, 14));

// function throttle(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// };

// function parallax() {
//   var scrolled = window.pageYOffset;
//   var parallax = document.querySelector(".moon");
//   var coords = (scrolled * 0.75) + 'px'
//   var rev = (scrolled * -0.4) + 'px'
//   parallax.style.transform = 'translate(' + rev + ', ' + coords + ')';
// };



// //parallax for mountains
// window.addEventListener('scroll', throttles(parallax_2, 14));

// function throttles(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// };


// function parallax_2() {
//     var scrolled = window.pageYOffset;
//     var parallax = document.querySelector(".mountains_behind");
//     // You can adjust the 0.4 to change the speed
//       var coords = (scrolled * 0.4) + 'px'
//     parallax.style.transform = 'translateY(' + coords + ')';
//   };


// //parallax for stars
// window.addEventListener('scroll', throttles(parallax_3, 14));

// function throttles(fn, wait) {
//   var time = Date.now();
//   return function() {
//     if ((time + wait - Date.now()) < 0) {
//       fn();
//       time = Date.now();
//     }
//   }
// };


// function parallax_3() {
//     var scrolled = window.pageYOffset;
//     var parallax = document.querySelector(".stars");
//     // scrolled * speed in pixel
//       var coords = (scrolled * 0.9) + 'px'
//     parallax.style.transform = 'translateX(' + coords + ')';
//   };  



// Throttle function
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

// Parallax for moon
window.addEventListener('scroll', throttle(parallaxMoon, 14));

function parallaxMoon() {
  var scrolled = window.pageYOffset;
  var moon = document.querySelector(".moon");
  var rev = (scrolled * -0.4) + 'px';
  var coords = (scrolled * 0.75) + 'px';
  moon.style.transform = 'translate(' + rev + ', ' + coords + ')';
}

// Parallax for mountains
window.addEventListener('scroll', throttle(parallaxMountains, 14));

function parallaxMountains() {
  var scrolled = window.pageYOffset;
  var mountains = document.querySelector(".mountains_behind");
  var coords = (scrolled * 0.2) + 'px';
  mountains.style.transform = 'translateY(' + coords + ')';
}

// Parallax for stars
window.addEventListener('scroll', throttle(parallaxStars, 14));

function parallaxStars() {
  var scrolled = window.pageYOffset;
  var stars = document.querySelector(".stars");
  var coords = (scrolled * 0.9) + 'px';
  stars.style.transform = 'translateX(' + coords + ')';
}
