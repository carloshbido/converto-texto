//Elements from DOM
const textAreaEl = document.querySelector('#textarea')
const messageEl = document.querySelector('.message')
let wordEl = document.querySelector('#words')
let letterEl = document.querySelector('#letter')
const year = document.querySelector('#year')

//buttons from DOM
const copyBtn = document.querySelector('#copy')
const downloadBtn = document.querySelector('#download')
const cleanBtn = document.querySelector('#clean')
const standardPhraseBtn = document.querySelector('#standard-phrase') 
const titleCaseBtn = document.querySelector('#title-case') 
const uppercaseBtn = document.querySelector('#uppercase')
const lowercaseBtn = document.querySelector('#lowercase')
const boldBtn = document.querySelector('#bold')
const italicBtn = document.querySelector('#italic')

//Show year automatic
window.addEventListener('DOMContentLoaded', () => {
  year.textContent = new Date().getFullYear()
})

//Show message function
function showMessage(message) {
  messageEl.textContent = message
  messageEl.classList.add('show')

  setTimeout(() => {
    messageEl.classList.remove('show')
  }, 3000)
}

//download function
function download(filename, text) {
  let element = document.createElement('a')
  element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text))
  element.setAttribute('download', filename)

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

// EVENT LISTENERS
//Fill or remove total of character Event
textAreaEl.addEventListener(('keydown', 'keyup'), (e) => {

  //Change Word
  const textArr = textAreaEl.value.split(' ')
  if(textAreaEl.value == '') {
    wordEl.textContent = 0
  } else {
    wordEl.textContent = textArr.length
  }

  //Change Caracter/Letter
  if(textAreaEl.value == '') {
    letterEl.textContent = 0
  } else {
    letterEl.textContent = e.target.value.length++
  }

})

//Copy value Event
copyBtn.addEventListener('click', ()=> {
  const copyText = document.querySelector('#textarea')

  copyText.select()
  copyText.setSelectionRange(0, 99999) //For mobile

  document.execCommand('copy')
  showMessage('Texto copiado com sucesso!')
})

//Download value Event
downloadBtn.addEventListener('click', () => {
  download('Texto Coverto Tudo',textAreaEl.value)
})

//Clean textArea Event
cleanBtn.addEventListener('click', () => {
  textAreaEl.value = ''
  letterEl.textContent = 0
  wordEl.textContent = 0
})

//Standard Phase Event
standardPhraseBtn.addEventListener('click', () => {

  const words = textAreaEl.value.split('')
  const textToShow = []
  let putLowerByFoundBreakLine = false
  let putLowerByPointAndSpace = false
  let nextIsSpace = false

  words.forEach((element, index) => {

    const isFirstLetter = index === 0
    const foundBreakLine = element == '\n'
    const foundPoint = element == '.'
    const isSpace = element == ' '

    if(isSpace && nextIsSpace) {
      textToShow.push(element)
      putLowerByPointAndSpace = true
      nextIsSpace = false
      return
    }

    if (foundBreakLine || foundPoint ) {
      textToShow.push(element)
      nextIsSpace = true
      putLowerByFoundBreakLine = true
      return
    }

    if (putLowerByFoundBreakLine || isFirstLetter || putLowerByPointAndSpace) {
      textToShow.push(element.toUpperCase())
      putLowerByFoundBreakLine = false
      putLowerByPointAndSpace = false
      return
    }

    textToShow.push(element.toLowerCase())
  })

  cleanTextTransform()
  textAreaEl.value = textToShow.join('')

})

//Title Case Event
titleCaseBtn.addEventListener('click', () => {

  textAreaEl.value = textAreaEl.value.toLowerCase()
  textAreaEl.style.textTransform = 'capitalize'
})

//UpperCase Event
uppercaseBtn.addEventListener('click', () => {

  textAreaEl.value = textAreaEl.value.toUpperCase()
})

//LowerCase Event
lowercaseBtn.addEventListener('click', () => {

  cleanTextTransform();
  textAreaEl.value = textAreaEl.value.toLowerCase()
})


//Bold Event
let isBold = false
let indexBold = 0

boldBtn.addEventListener('click', () => {

  if (isBold) {

    textAreaEl.style.fontWeight = 'normal'
    isBold = false
    indexBold = 0

  } else {
    
    textAreaEl.style.fontWeight = 'bold'
    isBold = true
    indexBold = 1
  }

  //Changes the button´s description
  const nameBtn = ['Negrito', 'Retirar Negrito']
  boldBtn.innerHTML = `<strong>${nameBtn[indexBold]}</strong>`

})


//Italic Event
let isItalic = false
let indexItalic = 0

italicBtn.addEventListener('click', () => {

  if (isItalic) {

    textAreaEl.style.fontStyle = 'normal'
    isItalic = false
    indexItalic = 0

  } else {
    
    textAreaEl.style.fontStyle = 'italic'
    isItalic = true
    indexItalic = 1
  }

  //Changes the naming button
  const nameBtn = ['Itálico', 'Retirar Itálico']
  italicBtn.innerHTML = `<i>${nameBtn[indexItalic]}</i>`
})

//clean textArea 
function cleanTextTransform() {
  textAreaEl.style.textTransform = 'none';
}