const wrapper = document.getElementById('wrapper');

wrapper.style.backgroundColor = 'yellow';
wrapper.style.fontSize = '20px';

// const childElem = document.getElementById('wrapper').children[0];
// childElem.textContent = 'Samsung galaxy';


// document.getElementById('elem').addEventListener('click', function (event) {
//     console.log('Thank you');
//     // event.target.style.backgroundColor = 'pink';
//     // event.target.style.fontSize = '24px';
//     event.target.classList.add('clickedBtn');
//     event.target.value = 'Clicked';
//     // document.getElementById('wrapper').classList.remove('hidden');
//     document.getElementById('wrapper').classList.toggle('hidden');
// });

// document.getElementsByTagName('a')[0].addEventListener('');
// document.querySelector('a').addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log(event);
//     console.log('Hello Google');
// });

//-------------------------
const products = ['Laptops', 'Phones', 'Tablet'];
document.getElementById('elem').addEventListener('click', () => {
    // event.stopImmediatePropagation();
    for (let value of products) {
        const div = document.createElement('div');
        div.classList.add('product');

        const span = document.createElement('span');
        div.appendChild(span);

        span.textContent = value;

        wrapper.appendChild(div);
    }
});
    // for (let value of products) {
    //     document.getElementById('wrapper').innerHTML += `<div class="product"><span>${value}</span></div>`;
    // }
