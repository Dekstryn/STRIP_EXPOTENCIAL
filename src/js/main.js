const buttonStart = document.querySelector('.button_box__button--js')

buttonStart.addEventListener('click', (e) =>{
  const numberValue = document.getElementById('number').value;
  localStorage.setItem("number", numberValue);
  const exponentiationValue = document.getElementById('expo').value;
  localStorage.setItem("exponentiation", exponentiationValue);
})



