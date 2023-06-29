
(function () {
    'use strict';
     
     // WAIT FOR ALL TO BE LOADED
     window.onload = function() {
         
         // add loaded class to html
         var root = document.documentElement;
         root.className += ' loaded';
 
         // TYPING EFFECT
         Typed.new('#typed', {
             stringsElement: document.getElementById('typed-strings'),
             loop: true,
             typeSpeed: 100,
             backSpeed: 2,
             startDelay: 1000,
             backDelay: 1200
         });
     }; // all loaded
     
       
 }());

 

 let slideIndex = 1; // Start at the first slide
showSlides(slideIndex); // Show the first slide

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  if (n > slides.length) {slideIndex = 1} // If showing slide after the last slide, wrap around to the start
  if (n < 1) {slideIndex = slides.length} // If showing slide before the first slide, wrap around to the end
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  slides[slideIndex-1].style.display = "block"; // Show the current slide
}

// Autonomous slide feature
setInterval(function() {
  plusSlides(1); // Move to the next slide every 10 seconds
}, 15000);