const card = document.querySelector('.card')

card.addEventListener('click', () => {
    const html = document.documentElement; // pega o elememto root
    html.classList.toggle('ignite')
})
