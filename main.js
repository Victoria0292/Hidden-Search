const searchBar = document.querySelector('.searchBar')
const btn = document.querySelector('.btn')
const userInput = document.querySelector('.userInput')

btn.addEventListener('click', () => {
    searchBar.classList.toggle('active')
    userInput.focus()
})