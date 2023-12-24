import {UserType} from "./types";

let fullname: string = 'John Smith';
let age: number = 30;

let digits: number[] = [100, 40, 88, 123];

// digits.push('hello');

// let user: any = {
//     isAdmin: true,
//     name: 'Bill',
// };

// using type
let user: UserType = {
    isAdmin: true,
    name: 'Jack',
    age: 19
}

// using array of object
const users: UserType[] = [{isAdmin: false, name: 'David'}, {name: 'Bob', isAdmin: true}]

function sum(a: number, b: number): string {
    return `The sum is: ${a + b}`;
}


function showData(obj: UserType) {
    console.log(obj.name)
    console.log(obj.isAdmin)
}
// function showData(obj: { name: string, isAdmin: boolean }) {
//     console.log(obj.name)
//     console.log(obj.isAdmin)
// }

showData(user);


// alias
const main = document.getElementById('main') as HTMLElement;
main.classList.add('active');

// list of possible values
function toggleButton(state: 'on' | 'off') {
    console.log('this button is ' + state)
}

// list of possible values with enum
enum ButtonStates {
    ON = 'on',
    OFF = 'off'
}

function toggleButton1(state: ButtonStates) {
    console.log(`this button1 is ${state}`)
}

toggleButton(ButtonStates.ON);

// generics
const arr: number[] = [1,2,3];
const str: string[] = ['q', 'w', 'e'];

function f<Type>(param: Type[]): Type { // whatever type of arguments function gets, the same type it returns
    return param[0];
}

f(arr);
f(str);

