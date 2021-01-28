const textAreaEl = document.querySelector('#textarea');
const messageEl = document.querySelector('.message');
let wordEl = document.querySelector('#words');
let letterEl = document.querySelector('#letter');

const copyBtn = document.querySelector('#copy');
const cleanBtn = document.querySelector('#clean');
const uppercaseBtn = document.querySelector('#uppercase');
const lowercaseBtn = document.querySelector('#lowercase');

function showMessage(message) {
  messageEl.style.display = 'block';

  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 3000);
};

// Event Listeners
//Copy value
copyBtn.addEventListener('click', ()=> {
  console.log(textAreaEl.value);
  showMessage('Texto copiado com sucesso!');
})

//Fill or remove total of character
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  if(textAreaEl.value == '') {
    letterEl.textContent = 0;
  } else {
    letterEl.textContent = e.target.value.length + 1;
  }
})

//Fill or remove total of words on the textArea
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  const textArr = textAreaEl.value.split(" ");

  if(textAreaEl.value == '') {
    wordEl.textContent = 0;
  } else {
    wordEl.textContent = textArr.length;
  }
})

//Clean textArea
cleanBtn.addEventListener('click', () => {
  textAreaEl.value = '';
})

//UpperCase 
uppercaseBtn.addEventListener('click', () => {
  textAreaEl.value = textAreaEl.value.toUpperCase();
})

//LowerCase 
lowercaseBtn.addEventListener('click', () => {
  textAreaEl.value = textAreaEl.value.toLowerCase();
})


