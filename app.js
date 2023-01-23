const quoteIdEl = document.querySelector('.advice-container [data-advice-number]')
const quoteTextEl = document.querySelector('.advice-container [data-advice-text]')
const quoteBtn = document.querySelector('.advice-container [data-advice-button]')

function generateAdvice() {
  return fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
      quoteIdEl.textContent = data.slip.id
      quoteTextEl.textContent = data.slip.advice
    }).catch(error=>console.error(error))
}

document.addEventListener('DOMContentLoaded', () => {
  quoteBtn.addEventListener('click', generateAdvice)
})
