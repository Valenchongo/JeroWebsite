button_question1 = document.querySelector(".button_question1");
button_question2 = document.querySelector(".button_question2");
button_question3 = document.querySelector(".button_question3");
answer1 = document.querySelector(".answer1"); 
answer2 = document.querySelector(".answer2"); 
answer3 = document.querySelector(".answer3"); 
hamburgerButton = document.querySelector('.hamburger-button');

button_question1.addEventListener("click",()=> {
    answer1.classList.toggle("answer_deploy")
})

button_question2.addEventListener("click",()=> {
    answer2.classList.toggle("answer_deploy")
})

button_question3.addEventListener("click",()=> {
    answer3.classList.toggle("answer_deploy")
})

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

