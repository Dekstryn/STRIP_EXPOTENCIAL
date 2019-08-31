const buttonStart = document.querySelector('.button_box__button--js')
const resultMultiplyText = document.querySelector('.result_multiply--js')
const resultAddingText = document.querySelector('.result_adding--js')

buttonStart.addEventListener('click', (e) =>{
  const numberValue = document.getElementById('number').value;
  localStorage.setItem("number", numberValue);
  const exponentiationValue = document.getElementById('expo').value;
  localStorage.setItem("exponentiation", exponentiationValue);
  resultMultiplyText.textContent = "Liczba którą chcesz potęgować: " + numberValue;
  resultAddingText.textContent = "Potęga, jaką ustawiłeś: " + exponentiationValue;
})



