const page = document.querySelector('#form')
const btn = document.querySelector('#submit')
const success = document.querySelector('#success_msg')


btn.addEventListener('click', ()=> {
    if (email === true) {
        success.classList.toggle('active')
        success.style.display = 'block'
        page.style.display = 'none'
    } else {
        success.classList.remove('active')
        success.style.display = 'none'
        page.style.display = 'block'
        page.textContent = 'valid email required'
    }

    console.log("clicked")
})