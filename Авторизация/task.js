const form = document.getElementById('signin__form')
const welcome = document.getElementById('welcome')
const storedId = localStorage.getItem('id')
const exit = document.querySelector('#exit__btn')

welcome.classList.add("welcome_active")
welcome.querySelector('#user_id').textContent = storedId

form.onsubmit = function(e) {
    e.preventDefault();

    let formData = new FormData(signin__form);

    let ajax = new XMLHttpRequest();
    ajax.responseType = 'json'
    ajax.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    ajax.send(formData);

    ajax.addEventListener('load', (event) => {
        event.preventDefault()

        if (ajax.response.user_id) {
            localStorage.setItem('id', ajax.response.user_id)
            welcome.classList.add("welcome_active")
            welcome.querySelector('#user_id').textContent = ajax.response.user_id
            form.reset()
        } else {
            alert('Неверный логин или пароль!')
            form.reset()
        }
    })
}

exit.onclick = () => {
    localStorage.removeItem('id')
    welcome.classList.remove("welcome_active")
}