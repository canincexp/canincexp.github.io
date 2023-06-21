
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

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

