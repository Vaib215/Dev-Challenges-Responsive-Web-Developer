const menu = document.querySelector('#ham')
const nav = document.querySelector('#phoneNav')
const body = document.querySelector('body')
const cross = document.querySelector('.cross')
// Functions
const toggleMenuOn = () => {
    nav.classList.replace('hidden','visible')
    body.classList.add('oh')
    
}

const toggleMenuOff = () => {
    nav.classList.replace('visible','hidden')
    body.classList.remove('oh')
}

// Event Listeners
menu.addEventListener('click',toggleMenuOn)
cross.addEventListener('click', toggleMenuOff)