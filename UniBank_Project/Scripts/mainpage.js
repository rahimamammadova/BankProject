
const burgerButton = document.querySelector('.burger_menu')

const lockScroll = (e) => {
 e.preventDefault();
}

burgerButton.addEventListener('click', () => {
    burgerButton.parentElement.nextElementSibling.classList.toggle('show')
    
    
    const sibling = burgerButton.parentElement.nextElementSibling.classList
    if (sibling.contains('show')) {
        window.addEventListener('wheel',lockScroll,{passive:false})
    }
    else {
      window.removeEventListener('wheel',lockScroll)
    }
})
