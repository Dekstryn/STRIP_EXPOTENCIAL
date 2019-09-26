"use strict"
const buttonStart = document.querySelector('.button_box__button--js')
const resultNumberText = document.querySelector('.result_number--js')
const resultAddingText = document.querySelector('.result_adding--js')
const resultMultiplyText = document.querySelector('.result_multiply--js')

buttonStart.addEventListener('click', (e) =>{
  //Variable definition
  const numberValue = document.getElementById('number').value;
  const exponentiationValue = document.getElementById('expo').value;
  const numberStr = numberValue.toString();
  const i = 1;
  const a = numberStr;
  const b = numberStr;
  let multiplyResult = 0;

  if (numberValue == 0){
    multiplyResult = 1;
  }
  else if (exponentiationValue == 0){
    multiplyResult = 1;
  }
  else if (exponentiationValue == 1){
    multiplyResult = numberValue;
  }
  
  //print result
  resultNumberText.textContent = "Liczba którą chcesz potęgować: " + numberValue;
  resultAddingText.textContent = "Potęga, jaką ustawiłeś: " + exponentiationValue;
  resultMultiplyText.textContent = "Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco: " + multiplyResult;
})




