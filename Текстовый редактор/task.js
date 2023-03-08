const textarea = document.getElementById('editor')
const storedTextarea = window.localStorage.getItem('textarea')
const button = document.querySelector('.clear')

if (storedTextarea) {
    textarea.textContent = storedTextarea
}

textarea.addEventListener('keydown', (e) => {

    if (e.key == "Enter" || e.key == "Tab" || e.key == "Shift") {
        window.localStorage.setItem('textarea', textarea.value)
    } else if (e.key == "Backspace") {
        window.localStorage.setItem('textarea', textarea.value.slice(0, -1))
    } else {
        window.localStorage.setItem('textarea', textarea.value + e.key)
    }
});

button.addEventListener('click', () => {
    window.localStorage.removeItem('textarea')
    textarea.textContent = ''
})