const textAreaEl = document.querySelector('#textarea');
const messageEl = document.querySelector('.message');
let wordEl = document.querySelector('#words');
let letterEl = document.querySelector('#letter');

const copyBtn = document.querySelector('#copy');
const downloadBtn = document.querySelector('#download');
const cleanBtn = document.querySelector('#clean');
const standardPhraseBtn = document.querySelector('#standard-phrase'); 
const uppercaseBtn = document.querySelector('#uppercase');
const lowercaseBtn = document.querySelector('#lowercase');
const boldBtn = document.querySelector('#bold');
const italicBtn = document.querySelector('#italic');

function showMessage(message) {
  messageEl.style.display = 'inline-block';
  messageEl.textContent = message;

  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 3000);
};

// Event Listeners
//Fill or remove total of character
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  if(textAreaEl.value == '') {
    letterEl.textContent = 0;
  } else {
    letterEl.textContent = e.target.value.length + 1;
  }
});

//Fill or remove total of words on the textArea
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  const textArr = textAreaEl.value.split(" ");

  if(textAreaEl.value == '') {
    wordEl.textContent = 0;
  } else {
    wordEl.textContent = textArr.length;
  }
});

//Copy value
copyBtn.addEventListener('click', ()=> {
  //Implementar
  showMessage('Texto copiado com sucesso!');
});

//Download value
downloadBtn.addEventListener('click', ()=> {
  //Implementar
  console.log(textAreaEl.value);
});

//Clean textArea
cleanBtn.addEventListener('click', () => {
  textAreaEl.value = '';
});

//Standard text
standardPhraseBtn.addEventListener('click', () => {
  // const firstLetter = textAreaEl.value[0].toUpperCase();
  // const textWithoutFirstLetter = textAreaEl.value.split(" ").splice(0,1);

  // console.log(firstLetter, textWithoutFirstLetter);
});

//UpperCase 
uppercaseBtn.addEventListener('click', () => {
  textAreaEl.value = textAreaEl.value.toUpperCase();
});

//LowerCase 
lowercaseBtn.addEventListener('click', () => {
  textAreaEl.value = textAreaEl.value.toLowerCase();
});

//Bold 
boldBtn.addEventListener('click', () => {
  textAreaEl.classList.toggle('bold');
  let index;

  textAreaEl.classList.contains('bold') ? index = 1 : index = 0;

  const nameBtn = ['Negrito', 'Retirar Negrito']
  boldBtn.innerHTML = `<strong>${nameBtn[index]}</strong>`
});

//Italic 
italicBtn.addEventListener('click', () => {
  textAreaEl.classList.toggle('italic');
  let index;

  textAreaEl.classList.contains('italic') ? index = 1 : index = 0;

  const nameBtn = ['Itálico', 'Retirar Itálico']
  italicBtn.innerHTML = `<i>${nameBtn[index]}</i>`
});


