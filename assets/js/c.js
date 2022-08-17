'use strict'

function AverageCalculate() {
    const n1 = document.getElementById('number1').value
    const n2 = document.getElementById('number2').value
    const n3 = document.getElementById('number3').value
    const n4 = document.getElementById('number4').value
    const form = document.getElementById('form')
    const result = document.getElementById('result')

    if(form.reportValidity()) {
        if (n1 > 10 || n1 < 1 || n2 > 10 || n2 < 1 || n3 > 10 || n3 < 1 || n4 > 10 || n4 < 1) {
            alert('ERRO! Os números devem estar entre 1 e 10!')
        } else {
            let average = (n1 + n2 + n3 + n4) / 4
            result.textContent = average
        }
    }
}
document.getElementById('calculate')
        .addEventListener('click', AverageCalculate)