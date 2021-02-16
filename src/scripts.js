//Elements from DOM
const textAreaEl = document.querySelector('#textarea');
const messageEl = document.querySelector('.message');
let wordEl = document.querySelector('#words');
let letterEl = document.querySelector('#letter');

//buttons reference from DOM
const copyBtn = document.querySelector('#copy');
const downloadBtn = document.querySelector('#download');
const cleanBtn = document.querySelector('#clean');
const standardPhraseBtn = document.querySelector('#standard-phrase'); 
const titleCaseBtn = document.querySelector('#title-case'); 
const uppercaseBtn = document.querySelector('#uppercase');
const lowercaseBtn = document.querySelector('#lowercase');
const boldBtn = document.querySelector('#bold');
const italicBtn = document.querySelector('#italic');

//Show message function
function showMessage(message) {
  messageEl.style.display = 'inline-block';
  messageEl.textContent = message;

  setTimeout(() => {
    messageEl.style.display = 'none';
  }, 3000);
};

// EVENT LISTENERS
//Fill or remove total of character Event
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  //Word
  const textArr = textAreaEl.value.split(' ');
  if(textAreaEl.value == '') {
    wordEl.textContent = 0;
  } else {
    wordEl.textContent = textArr.length;
  }

  //Caracter/Letter
  if(textAreaEl.value == '') {
    letterEl.textContent = 0;
  } else {
    letterEl.textContent = e.target.value.length + 1;
  }

});

//Copy value Event
copyBtn.addEventListener('click', ()=> {
  const copyText = document.querySelector('#textarea');

  copyText.select()
  copyText.setSelectionRange(0, 99999) //For mobile

  document.execCommand('copy');
  showMessage('Texto copiado com sucesso!');
});

//Download value Event
downloadBtn.addEventListener('click', ()=> {
  //Implementar
  console.log(textAreaEl.value);
});

//Clean textArea Event
cleanBtn.addEventListener('click', () => {
  textAreaEl.value = '';
});

//Standard Phase Event
standardPhraseBtn.addEventListener('click', () => {

  //Implementar
});

//Title Case Event
titleCaseBtn.addEventListener('click', () => {

  textAreaEl.value = textAreaEl.value.toLowerCase();
  textAreaEl.style.textTransform = 'capitalize';
});

//UpperCase Event
uppercaseBtn.addEventListener('click', () => {

  textAreaEl.value = textAreaEl.value.toUpperCase();
});

//LowerCase Event
lowercaseBtn.addEventListener('click', () => {

  textAreaEl.style.textTransform = 'none';
  textAreaEl.value = textAreaEl.value.toLowerCase();
});

//Bold Event
boldBtn.addEventListener('click', () => {

  textAreaEl.classList.toggle('bold');
  let index;

  textAreaEl.classList.contains('bold') ? index = 1 : index = 0;

  //Changes the naming button
  const nameBtn = ['Negrito', 'Retirar Negrito']
  boldBtn.innerHTML = `<strong>${nameBtn[index]}</strong>`
});

//Italic Event
italicBtn.addEventListener('click', () => {

  textAreaEl.classList.toggle('italic');
  let index;

  textAreaEl.classList.contains('italic') ? index = 1 : index = 0;

  //Changes the naming button
  const nameBtn = ['Itálico', 'Retirar Itálico']
  italicBtn.innerHTML = `<i>${nameBtn[index]}</i>`
});