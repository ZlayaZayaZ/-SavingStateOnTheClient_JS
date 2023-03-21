const modal = document.getElementById('subscribe-modal')
const closeModal = modal.querySelector('.modal__close')
const cookieModal = getCookie('modal')

if (!cookieModal) {
    modal.className = 'modal modal_active'
}

closeModal.onclick = () => {
    modal.className = 'modal'
    setCookie('modal', 'close')
}

function setCookie (name, value) {
    document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)
    console.log(document.cookie)
}

function getCookie (name) {
    const pairs = document.cookie.split('; ')
    const cookie = pairs.find(p => p.startsWith(name + '='))

    if (cookie) {
        return cookie.substring(name.lenght + 1)
    }
    
}
