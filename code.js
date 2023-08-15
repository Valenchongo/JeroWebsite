
hamburgerButton = document.querySelector('.hamburger-button');


function toggleMenu() {

    hamburgerButton.classList.toggle('open');
  }

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerButton = document.querySelector('.hamburger-button');
  var navbar = document.querySelector('.navbar');
  
  hamburgerButton.addEventListener('click', function() {
    navbar.classList.toggle('open');
    });
  });
