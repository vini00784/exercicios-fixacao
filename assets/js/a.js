'use strict'

function showResult() {
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    const form = document.getElementById('form')
    const result = document.getElementById('result')

    if(form.reportValidity()) {
        result = number1 - number2
    }
    result.textContent = `${result}`
}

document.getElementById('calculate')
        .addEventListener('click', showResult)