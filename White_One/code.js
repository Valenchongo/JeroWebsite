hamburgerButton = document.querySelector('.hamburger-button');
var imagenes = ['img/AFTER.PNG', 'img/BEFORE.PNG'];
var indice = 1;
var indice1 = 1;
var indice2 = 1;

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

function cambiarImagen() {
    var imagen = document.getElementById("imagen_change");
    indice++;
    if (indice >= 2) {
      indice = 0;
    }
    imagen.src = imagenes[indice];
  }

  function cambiarImagen1() {
    var imagen = document.getElementById("imagen_change1");
    indice1++;
    if (indice1 >= imagenes.length) {
      indice1 = 0;
    }
    imagen.src = imagenes[indice1];
  }

  function cambiarImagen2() {
    var imagen = document.getElementById("imagen_change2");
    indice2++;
    if (indice2 >= imagenes.length) {
      indice2 = 0;
    }
    imagen.src = imagenes[indice2];
  }

  function changeShape() {
    var shape = document.getElementById("shape");
    var question = document.querySelector(".question")
    var question_square = document.querySelector(".question_square")
    var h5_square = document.querySelector(".h5_square")
    var sub = document.querySelector(".sub_qs")
    
    if (shape.classList.contains("square")) {
      shape.classList.remove("square");
      shape.style.borderRadius = "50%";
      shape.style.width = "200px";
      question.style.display = "block"
      question_square.style.display = "none"
      h5_square.style.display = "none"
      sub.style.display = "none"
    } else {
      shape.classList.add("square");
      shape.style.borderRadius = "0";
      shape.style.width = "300px";
      question.style.display = "none"
      question_square.style.display = "block"
      h5_square.style.display = "block"
      sub.style.display = "block"
    }
  }

  function changeShape1() {
    var shape = document.getElementById("shape1");
    var question = document.querySelector(".question1")
    var question_square = document.querySelector(".question_square1")
    var h5_square = document.querySelector(".h5_square1")
    var sub = document.querySelector(".sub_qs1")
    
    if (shape.classList.contains("square")) {
      shape.classList.remove("square");
      shape.style.borderRadius = "50%";
      shape.style.width = "200px";
      question.style.display = "block"
      question_square.style.display = "none"
      h5_square.style.display = "none"
      sub.style.display = "none"
    } else {
      shape.classList.add("square");
      shape.style.borderRadius = "0";
      shape.style.width = "300px";
      question.style.display = "none"
      question_square.style.display = "block"
      h5_square.style.display = "block"
      sub.style.display = "block"
    }
  }

  function changeShape2() {
    var shape = document.getElementById("shape2");
    var question = document.querySelector(".question2")
    var question_square = document.querySelector(".question_square2")
    var h5_square = document.querySelector(".h5_square2")
    var sub = document.querySelector(".sub_qs2")
    
    if (shape.classList.contains("square")) {
      shape.classList.remove("square");
      shape.style.borderRadius = "50%";
      shape.style.width = "200px";
      question.style.display = "block"
      question_square.style.display = "none"
      h5_square.style.display = "none"
      sub.style.display = "none"
    } else {
      shape.classList.add("square");
      shape.style.borderRadius = "0";
      shape.style.width = "300px";
      question.style.display = "none"
      question_square.style.display = "block"
      h5_square.style.display = "block"
      sub.style.display = "block"
    }
  }
  
  
  
  
  
  
  