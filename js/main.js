// Seleccionar los imagen y el card
const image = document.querySelector('.card__image img')
const card = document.querySelector('.card')

// Aniadimos el evento para hacer el click
image.addEventListener('click', () => {
    console.log('hola mundo')
    // Alternaremos entre light-mode y dark-mode al realizar el click
    card.classList.toggle('light-mode')
    // card.classList.toggle('dark-mode')
})
