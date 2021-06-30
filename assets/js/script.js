// Validar Formulario : Ejercicio 1

let submitButton = document.getElementById("botton");

function formValidation() {
  let inputName = document.getElementById("nombre").value;
  let inputAbout = document.getElementById("asunto").value;
  let inputMessage = document.getElementById("mensaje").value;
  let pattron = /[a-zA-Z]/gim;
  let testingOne = pattron.test(inputName);
  let testingTwo = pattron.test(inputAbout);
  let testingThree = pattron.test(inputMessage);
  console.log(inputName);
  if ((testingOne, testingTwo, testingThree === true)) {
    let resultado = document.getElementsByClassName("resultado");
    resultado[0].innerHTML = "Mensaje enviado con éxito";
    let nameError = document.getElementsByClassName("errorNombre");
    nameError[0].innerHTML = "";
    let aboutError = document.getElementsByClassName("errorAsunto");
    aboutError[0].innerHTML = "";
    let messageError = document.getElementsByClassName("errorMensaje");
    messageError[0].innerHTML = "";
  }
  if (testingOne === false) {
    let nameError = document.getElementsByClassName("errorNombre");
    nameError[0].innerHTML = "El nombre es requerido";
  }
  if (testingTwo === false) {
    let aboutError = document.getElementsByClassName("errorAsunto");
    aboutError[0].innerHTML = "El asunto es requerido";
  }
  if (testingThree === false) {
    let messageError = document.getElementsByClassName("errorMensaje");
    messageError[0].innerHTML = "El mensaje es requerido";
  }

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Selector de Colores : Ejercicio 2

// Esta función identifica el background-color asociado a cada id y luego aplica ese atributo al objeto "caja"

function changeColor (id) {
    let colorBtn = document.getElementById(id);
    
    let itemColorSelect = window.getComputedStyle(colorBtn).getPropertyValue("background-color");
    document.getElementById("caja").setAttribute ("style", `background-color:${itemColorSelect}; border:1px solid black;width: 100%;height: 100%`);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Calculadora que resta y suma : Ejercicio 3

//  Función que Suma

function funnyNumbersSumUp () {
    let valueOne = Number.parseInt(document.getElementById("valor1").value);
    let valueTwo = Number.parseInt(document.getElementById("valor2").value);

    let sumUp = document.getElementsByClassName("resultado");
    sumUp[0].innerHTML = valueOne + valueTwo;
}


// Función que resta 

function funnyNumbersSubtract () {
    let valueOne = Number.parseInt(document.getElementById("valor1").value);
    let valueTwo = Number.parseInt(document.getElementById("valor2").value);

    if (valueOne > valueTwo) {
    let subtract = document.getElementsByClassName("resultado");
    subtract[0].innerHTML = valueOne - valueTwo;
    } else {
        let subtract = document.getElementsByClassName("resultado");
        subtract[0].innerHTML = 0;
    }

}