"use strict"
const buttonStart = document.querySelector('.button_box__button--js')
const resultNumberText = document.querySelector('.result_number--js')
const resultAddingText = document.querySelector('.result_adding--js')
const resultMultiplyText = document.querySelector('.result_multiply--js')
const resultFinalAdding = document.querySelector('.result_finalAdding--js')

buttonStart.addEventListener('click', (e) =>{
  //Variable definition
  const numberValue = document.getElementById('number').value;
  const exponentiationValue = document.getElementById('expo').value;
  const numberStr = numberValue.toString();
  let i = 1;
  let a = numberStr;
  let b = numberStr;
  let c = 1;
  let k = 0;
  let multiplyResult = 0;
  let addingResult = 0;
  //exceptions
  if (numberValue == 0){
    multiplyResult = 0;
    addingResult = 0;
  }
  else if (exponentiationValue == 0){
    multiplyResult = 1;
    addingResult = 1;
  }
  else if (exponentiationValue == 1){
    multiplyResult = numberValue;
    addingResult = numberValue;
  }
  else if (numberValue == 1){
    multiplyResult = 1;
    addingResult = 1;
  }
  //calculations
  else {
    while (i < exponentiationValue){
      a = a + "*" + numberStr;
      i +=1;
    }
    i = 1;
    multiplyResult = a;
    while (i < numberValue){
      b = b + "+" + numberStr;
      i += 1;
    }
    i = 1;
    if (exponentiationValue > 2){
      c = b;
      k = numberValue ** (exponentiationValue - 2);
      while (i < k){
        c = c + "+" + b;
        i += 1;
      }
      addingResult = c;
    }
    else{
      addingResult = b;
    }
  }
  //print result
  resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
  resultAddingText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
  resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco: ${multiplyResult}`;
  resultFinalAdding.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco: ${addingResult}`;
})




