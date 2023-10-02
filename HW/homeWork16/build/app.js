'use strict';

// Enable tooltip
const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// ---------------------------------
// Alert init
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [`<div class="alert alert-${type} alert-dismissible mt-4 mb-4" role="alert">`, `   <div>${message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
  alertPlaceholder.append(wrapper);
};
const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (!document.querySelector('[role="alert"]')) {
      appendAlert('Nice, you triggered this alert message!', 'success');
    } else {
      alertPlaceholder.innerHTML = '';
    }
  });
}

// ---------------------------------
// Birth Date
document.getElementById('birthDate').innerText = moment("06-07-2000 9:45").format('Do MMMM YYYY h:mm a');

// ---------------------------------
// User input validation

const form = document.forms.dateConvertor;
const formInput = form.elements.validationCustom01;
document.getElementById('submitDate').addEventListener('click', event => {
  const enteredDateResult = document.getElementById('enteredDateResult');
  if (!validateInputDateFormat(formInput.value)) {
    formInput.classList.add('is-invalid');
    formInput.classList.remove('is-valid');
    enteredDateResult.innerHTML = '';
  } else {
    formInput.classList.add('is-valid');
    formInput.classList.remove('is-invalid');
    const formattedDate = moment(formInput.value).format('dddd, MMMM Do YYYY');
    enteredDateResult.textContent = `You entered: ${formattedDate}`;
  }
});
function validateInputDateFormat(value) {
  let regex = /^(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])-\d{4}$/;
  return regex.test(value);
}