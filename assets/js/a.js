'use strict'

function showResult() {
    const number1 = document.getElementById('number1').value
    const number2 = document.getElementById('number2').value
    const form = document.getElementById('form')
    const result = document.getElementById('result')
    const diference = number1 - number2

    if(form.reportValidity()) {
        result.textContent = `${number1} - ${number2} = ${diference}`
    }
}

document.getElementById('calculate')
        .addEventListener('click', showResult)