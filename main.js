const searchBar = document.getElementsByClassName('searchBar')
const button = document.getElementsByClassName('button')
const userInput = document.getElementsByClassName('userInput')

button.addEventListener('click', () => {
    searchBar.classList.toggle('active')
    userInput.focus()
})