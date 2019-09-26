"use strict"
const buttonStart = document.querySelector('.button_box__button--js')
const resultMultiplyText = document.querySelector('.result_multiply--js')
const resultAddingText = document.querySelector('.result_adding--js')

buttonStart.addEventListener('click', (e) =>{
  const numberValue = document.getElementById('number').value;
  localStorage.setItem("number", numberValue);
  const exponentiationValue = document.getElementById('expo').value;
  localStorage.setItem("exponentiation", exponentiationValue);
  
  function expotential (number = localStorage.getItem("number"), exponentiation = localStorage.getItem("exponentiation")){
    //Variable definition
    const numberStr = number.toString();
    const i = 1;
    const a = numberStr;
    const b = numberStr;
    const pot = exponentiation;
    const lic = number;
    
  }

  resultMultiplyText.textContent = "Liczba którą chcesz potęgować: " + numberValue;
  resultAddingText.textContent = "Potęga, jaką ustawiłeś: " + exponentiationValue;

})




