const selectEl = document.querySelector('#selection')
const imageDir = document.querySelector('.current_lang')
selectEl.addEventListener('change', (e) => {
    if (e.target.value === 'azerbaijan') {
        imageDir.src = '../Assets/az.png'
    }
    else if (e.target.value === 'russia') {
        imageDir.src = '../Assets/ru.png'

    }
    else {
        imageDir.src = '../Assets/en.png'

    }
})


const formEl = document.querySelector('#myForm')
const lastNameEl = document.querySelector('.lastnameInput')
const phoneNumberEl = document.querySelector('.phoneNumberInput')
const pinCodeEl = document.querySelector('.pinCodeInput')


formEl.addEventListener('submit', (e) => {
e.preventDefault();//
console.log(123);
sessionStorage.setItem('loan_application',JSON.stringify({lastName:lastNameEl.value,phoneNumber:phoneNumberEl.value,pinCode:pinCodeEl.value}))
})

console.log(lastNameEl,phoneNumberEl,pinCodeEl);