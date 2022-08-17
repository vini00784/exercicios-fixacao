'use strict'

function showNumber() {
    const number = document.getElementById('number').value
    const form = document.getElementById('form')
    const showNumber = document.getElementById('result')

    if(form.reportValidity()) {
        if(number > 0) {
            showNumber.textContent = number
        }else if(number < 0) {
            showNumber.textContent = (number * (-1))
        }
    }
}

document.getElementById('showNumber')
        .addEventListener('click', showNumber)