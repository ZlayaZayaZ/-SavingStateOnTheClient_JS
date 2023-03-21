const textarea = document.getElementById('editor')
const storedTextarea = localStorage.getItem('textarea')
const button = document.querySelector('.clear')

textarea.textContent = storedTextarea

textarea.addEventListener('keydown', () => {

    if (storedTextarea != textarea.value) {
        localStorage.setItem('textarea', textarea.value)
    }

});

button.addEventListener('click', () => {
    localStorage.removeItem('textarea')
    textarea.textContent = ''
})