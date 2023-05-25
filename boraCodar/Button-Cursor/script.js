let button = document.querySelector('button')

button.addEventListener('click', () => {

    button.innerHTML = `<i class="ph-circle-notch"></i> primary button`
    button.classList.add('load')

})

function handleDragStart() {
    this.style.opacity = '0.9';
  }

  function handleDragEnd() {
    this.style.opacity = '1';
  }