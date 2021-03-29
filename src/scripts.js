//Elements from DOM
const textAreaEl = document.querySelector('#textarea');
const messageEl = document.querySelector('.message');
let wordEl = document.querySelector('#words');
let letterEl = document.querySelector('#letter');
const year = document.querySelector('#year');

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

//Show year 
(function showYearOnBrowser() {
  const currentDate = new Date();
  year.textContent = currentDate.getFullYear();
})();

//Show message function
function showMessage(message) {
  messageEl.classList.add('show');
  messageEl.textContent = message;

  setTimeout(() => {
    messageEl.classList.remove('show');
  }, 3000);
};

//download function
function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

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
downloadBtn.addEventListener('click', () => {
  download('Texto Coverto Tudo',textAreaEl.value);
});

//Clean textArea Event
cleanBtn.addEventListener('click', () => {
  textAreaEl.value = '';
  letterEl.textContent = 0;
  wordEl.textContent = 0;
});

//Standard Phase Event
standardPhraseBtn.addEventListener('click', () => {

  const words = textAreaEl.value.split('');
  const textToShow = [];
  let putLowerByFoundBreakLine = false;
  let putLowerByPointAndSpace = false;
  let nextIsSpace = false;

  words.forEach((element, index) => {

    const isFirstLetter = index === 0;
    const foundBreakLine = element == '\n';
    const foundPoint = element == '.';
    const isSpace = element == ' ';

    if(isSpace && nextIsSpace) {
      textToShow.push(element);
      putLowerByPointAndSpace = true;
      nextIsSpace = false;
      return;
    }

    if (foundBreakLine || foundPoint ) {
      textToShow.push(element);
      nextIsSpace = true;
      putLowerByFoundBreakLine = true;
      return;
    }

    if (putLowerByFoundBreakLine || isFirstLetter || putLowerByPointAndSpace) {
      textToShow.push(element.toUpperCase());
      putLowerByFoundBreakLine = false;
      putLowerByPointAndSpace = false;
      return;
    }

    textToShow.push(element.toLowerCase());
  });

  textAreaEl.style.textTransform = 'none';
  textAreaEl.value = textToShow.join('');

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