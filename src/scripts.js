const textAreaEl = document.querySelector('#textarea');
const messageEl = document.querySelector('.message');
let wordEl = document.querySelector('#words');

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

  showMessage('Mensagem de teste');
})

textAreaEl.addEventListener('keydown', (e) => {
  /* Colocar aqui */
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


