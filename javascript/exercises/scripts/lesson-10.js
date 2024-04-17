function toggleButton(selector){
  const button = document.querySelector(selector)
  if (!button.classList.contains('is-toggled')){
    turnOffPreviousButton();
    button.classList.add('is-toggled');
  }
  else {
    button.classList.remove('is-toggled')
  }
}

function turnOffPreviousButton(){
  const lastButton = document.querySelector('.is-toggled')
  if (lastButton){
    lastButton.classList.remove('is-toggled')
  }
}