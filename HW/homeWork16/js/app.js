// const openModalBtn = document.getElementById('openModalBtn');
// console.log(openModalBtn);

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')
//
// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })
// import bootstrap from "bootstrap"
// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

// Enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// const alertList = document.querySelectorAll('.alert')
// const alerts = [...alertList].map(element => new bootstrap.Alert(element))

// Alert init
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible mt-4" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        if (!(document.querySelector('[role="alert"]'))) {
            appendAlert('Nice, you triggered this alert message!', 'success')
        } else {
            alertPlaceholder.innerHTML = '';
        }
    })
}