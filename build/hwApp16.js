'use strict';

// Enable tooltip
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]');
var tooltipList = _toConsumableArray(tooltipTriggerList).map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ---------------------------------
// Alert init
var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var appendAlert = function appendAlert(message, type) {
  var wrapper = document.createElement('div');
  wrapper.innerHTML = ["<div class=\"alert alert-".concat(type, " alert-dismissible mt-4 mb-4\" role=\"alert\">"), "   <div>".concat(message, "</div>"), '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', '</div>'].join('');
  alertPlaceholder.append(wrapper);
};
var alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
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

var form = document.forms.dateConvertor;
var formInput = form.elements.validationCustom01;
document.getElementById('submitDate').addEventListener('click', function (event) {
  var enteredDateResult = document.getElementById('enteredDateResult');
  if (!validateInputDateFormat(formInput.value)) {
    formInput.classList.add('is-invalid');
    formInput.classList.remove('is-valid');
    enteredDateResult.innerHTML = '';
  } else {
    formInput.classList.add('is-valid');
    formInput.classList.remove('is-invalid');
    var formattedDate = moment(formInput.value).format('dddd, MMMM Do YYYY');
    enteredDateResult.textContent = "You entered: ".concat(formattedDate);
  }
});
function validateInputDateFormat(value) {
  var regex = /^(1[0-2]|0[1-9])-(3[0-1]|[1-2][0-9]|0[1-9])-\d{4}$/;
  return regex.test(value);
}