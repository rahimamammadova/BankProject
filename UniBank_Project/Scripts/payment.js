const selectEl = document.querySelector('#selection')
const imageDir = document.querySelector('.current_lang')


const contrastInputEl = document.querySelector('.contrastInput')
const pinCodeEl = document.querySelector('.pinCodeInput')
const randomDigitInput = document.querySelector('.randomCodeInput')


const formEl = document.querySelector('#myForm1')


formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = {
        contrastId:contrastInputEl.value,
        pinCode:pinCodeEl.value,
        randomDigit:randomDigitInput.value
    }

    sessionStorage.setItem('paymentDetails', JSON.stringify(obj))
    console.log(obj);
})
