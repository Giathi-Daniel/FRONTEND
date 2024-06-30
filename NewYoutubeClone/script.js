window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer')
    const scrollHeight = window.scrollY

    if (scrollHeight > 50) {
        footer.classList.add('sticky')
    } else {
        footer.classList.remove('sticky')
    }
})

