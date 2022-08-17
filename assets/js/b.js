'use strict'

function showNumber() {
    const number = document.getElementById('number').value
    const form = document.getElementById('form')
    const result = document.getElementById('result')

    if(form.reportValidity()) {
        if(number > 0) {
            result.textContent
        }
    }
}