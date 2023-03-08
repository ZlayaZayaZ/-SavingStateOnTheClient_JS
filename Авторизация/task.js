const form = document.getElementById('signin__form')
const welcome = document.getElementById('welcome')
const storedId = window.localStorage.getItem('id')
const exit = document.querySelector('#exit__btn')

if (storedId) {
    welcome.classList.add("welcome_active")
    welcome.querySelector('#user_id').textContent = storedId
}

form.onsubmit = function(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("login", form.login.value);
    formData.append("password", form.password.value)

    let ajax = new XMLHttpRequest();
    ajax.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    ajax.send(formData);

    ajax.addEventListener('readystatechange', (event) => {
        event.preventDefault()
    
        if (ajax.readyState === ajax.DONE) {
            let result = JSON.parse(ajax.responseText)

            if (result.user_id) {
                window.localStorage.setItem('id', result.user_id)
                welcome.classList.add("welcome_active")
                welcome.querySelector('#user_id').textContent = result.user_id
                form.login.value = ''
                form.password.value = ''
            } else {
                alert('Неверный логин или пароль!')
                form.login.value = ''
                form.password.value = ''
            }
        }
    })
}

exit.onclick = () => {
    localStorage.removeItem('id')
    welcome.classList.remove("welcome_active")
}