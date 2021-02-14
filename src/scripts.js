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
  //Implementar
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

  //Put the all words in loowerCase and transform in Arr
  const text = textAreaEl.value.toLowerCase();
  const textArr = text.split(' ');
  let newArray = [];

  textArr.forEach((word, index) => {

    const hasLineBreak = word[0] == '\n';
    const isFirstLetter = index === 0;

    if (hasLineBreak) {

      word = word[1].toUpperCase() + word.slice(2);
      newArray.push(word);
    
    } else if (isFirstLetter) {
    
      word = word[0].toUpperCase() + word.slice(1);
      newArray.push(word);

    } else {

      newArray.push(word);
    }

  });

  //Put the new array on textarea field
  textAreaEl.value = newArray.join(' ');

});

//Title Case Event
titleCaseBtn.addEventListener('click', () => {

  let word = '';
  let newArray = [];

  //Put the all words in loowerCase and transform in Arr
  const text = textAreaEl.value.toLowerCase();
  const textArr = text.split(' ');

  textArr.forEach(word => {

  const isSpace =  word === '';
  const hasLineBreak = word.split('').some(letter => letter == '\n');

    if(isSpace) {
      newArray.push(word);
      return;
    }

    if(hasLineBreak) {

      let foundFirstLetter = false;
      let wordSplitted = [];

      //It Transforms word in array of letters and loop throught it
      word.split('').forEach(letter => {

        const isLineBreak = letter == '\n';

        if(isLineBreak) {
          wordSplitted.push(letter);
          foundFirstLetter = false;
          return;
        }
        
        if(!isLineBreak && !foundFirstLetter) {
          wordSplitted.push(letter.toUpperCase());
          foundFirstLetter = true;
          return;
        }

        wordSplitted.push(letter)

      });

      //Transform Array of letter into word
      word = wordSplitted.join('');

      //Push word into New Array
      newArray.push(word);
      return;
    };

    //Put first Letter on Uppercase and the rest normal lowerCase
    word = word[0].toUpperCase() + word.slice(1);
    newArray.push(word);

  });

  //Put the value in TextArea
  textAreaEl.value = newArray.join(' ');

});

//UpperCase Event
uppercaseBtn.addEventListener('click', () => {
  textAreaEl.value = textAreaEl.value.toUpperCase();
});

//LowerCase Event
lowercaseBtn.addEventListener('click', () => {
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