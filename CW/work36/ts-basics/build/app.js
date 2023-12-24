"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fullname = 'John Smith';
var age = 30;
var digits = [100, 40, 88, 123];
// digits.push('hello');
// let user: any = {
//     isAdmin: true,
//     name: 'Bill',
// };
var user = {
    isAdmin: true,
    name: 'Jack',
    age: 19
};
function sum(a, b) {
    return "The sum is: ".concat(a + b);
}
function showData(obj) {
    console.log(obj.name);
    console.log(obj.isAdmin);
}
// function showData(obj: { name: string, isAdmin: boolean }) {
//     console.log(obj.name)
//     console.log(obj.isAdmin)
// }
showData(user);
// alias
var main = document.getElementById('main');
main.classList.add('active');
// list of possible values
function toggleButton(state) {
    console.log('this button is ' + state);
}
// list of possible values with enum
var ButtonStates;
(function (ButtonStates) {
    ButtonStates["ON"] = "on";
    ButtonStates["OFF"] = "off";
})(ButtonStates || (ButtonStates = {}));
function toggleButton1(state) {
    console.log("this button1 is ".concat(state));
}
toggleButton(ButtonStates.ON);
var testr = 1;
var testx = 2;
