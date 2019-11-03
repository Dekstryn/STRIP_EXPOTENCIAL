"use strict"

const buttonStart = document.querySelector('.button_box__button--js')
const resultNumberText = document.querySelector('.result_number--js')
const resultExponentiationText = document.querySelector('.result_exponentiation--js')
const resultMultiplyText = document.querySelector('.result_multiplyText--js')
const resultMultiply = document.querySelector('.result_multiply--js')
const resultAddingText = document.querySelector('.result_AddingText--js')
const resultAdding = document.querySelector('.result_Adding--js')

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
    
    //print result
    resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
    resultExponentiationText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
    resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco:`;
    resultMultiply.textContent = `${multiplyResult}`;
    resultAddingText.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco:`;
    resultAdding.textContent = ` ${addingResult}`;
  }
  else if (exponentiationValue == 0){
    multiplyResult = 1;
    addingResult = 1;
    
    //print result
    resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
    resultExponentiationText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
    resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco:`;
    resultMultiply.textContent = `${multiplyResult}`;
    resultAddingText.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco:`;
    resultAdding.textContent = ` ${addingResult}`;
  }
  else if (exponentiationValue == 1){
    multiplyResult = numberValue;
    addingResult = numberValue;
     
    //print result
    resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
    resultExponentiationText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
    resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco:`;
    resultMultiply.textContent = `${multiplyResult}`;
    resultAddingText.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco:`;
    resultAdding.textContent = ` ${addingResult}`;
  }
  else if (numberValue == 1){
    multiplyResult = 1;
    addingResult = 1;
    
    //print result
    resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
    resultExponentiationText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
    resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco:`;
    resultMultiply.textContent = `${multiplyResult}`;
    resultAddingText.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco:`;
    resultAdding.textContent = ` ${addingResult}`;
  }
  else if (numberValue < 0){
    resultNumberText.textContent = `Liczba którą chcesz potęgować: "${numberValue}" jest mniejsza od zera.
    Program obsługuje liczby naturalne z zakresu 0 - 10.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }
  else if (numberValue > 0 && numberValue < 1){
    resultNumberText.textContent = `Liczba którą chcesz potęgować: "${numberValue}" jest ułamkiem.
    Program obsługuje liczby naturalne z zakresu 0 - 10.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }

  else if (numberValue > 10){
    resultNumberText.textContent = `Liczba którą chcesz potęgować: "${numberValue}" jest większa od 10.
    Program obsługuje liczby naturalne z zakresu 0 - 10.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }
  else if (exponentiationValue < 0){
    resultNumberText.textContent = `Potęga którą chcesz użyć: "${exponentiationValue}" jest mniejsza od zera.
    Program obsługuje potęgi będące liczbami naturalnymi z zakresu 0 - 5.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }
  else if (exponentiationValue > 0 && exponentiationValue < 1){
    resultNumberText.textContent = `Potęga którą chcesz użyć: "${exponentiationValue}" jest ułamkiem.
    Program obsługuje potęgi będące liczbami naturalnymi z zakresu 0 - 5.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }

  else if (exponentiationValue > 5){
    resultNumberText.textContent = `Potęga którą chcesz użyć: "${exponentiationValue}" jest większa od 5.
    Program obsługuje potęgi będące liczbami naturalnymi z zakresu 0 - 5.`;
    resultExponentiationText.textContent = ``;
    resultMultiplyText.textContent = ``;
    resultMultiply.textContent = ``;
    resultAddingText.textContent = ``;
    resultAdding.textContent = ``;
  }
  //calculations
  else {
    while (i < exponentiationValue){
      a = a + " * " + numberStr;
      i +=1;
    }
    i = 1;
    multiplyResult = a;
    while (i < numberValue){
      b = b + " + " + numberStr;
      i += 1;
    }
    i = 1;
    if (exponentiationValue > 2){
      c = b;
      k = numberValue ** (exponentiationValue - 2);
      while (i < k){
        c = c + " + " + b;
        i += 1;
      }
      addingResult = c;
    }
    else{
      addingResult = b;
    }
    
    //print result
    resultNumberText.textContent = `Liczba którą chcesz potęgować: ${numberValue}`;
    resultExponentiationText.textContent = `Potęga, jaką ustawiłeś: ${exponentiationValue}`;
    resultMultiplyText.textContent = `Potęgowanie zapisane w formie mnożenia, będzie wyglądało następująco:`;
    resultMultiply.textContent = `${multiplyResult}`;
    resultAddingText.textContent = `Potęgowanie zapisane w formie dodawania, będzie wyglądało następująco:`;
    resultAdding.textContent = ` ${addingResult}`;
  }
})




