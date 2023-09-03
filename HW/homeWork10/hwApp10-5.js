// Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2,3]) і генерує список з елементів:
//
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//     </ul>
// Якщо ж у масиві зустрічається масив (наприклад, [1,2,[1.1,1.2,1.3],3]) то робити вкладений список. Для перевірки масиву використовуйте Array.isArray()
//
// <ul>
// <li>1</li>
// <li>2</li>
// <li>
//     <ul>
//         <li>1.1</li>
//         <li>1.2</li>
//         <li>1.3</li>
//     </ul>
// </li>
// <li>3</li>
// </ul>

function generateList(initArr) {
    const listContainer = document.getElementById('numberList');
    const ul = document.createElement('ul');

    for (let value of initArr) {
        const li = document.createElement('li');
        if (Array.isArray(value)) {
            li.appendChild(generateList(value));
        } else {
            li.textContent = value;
        }
        ul.appendChild(li);
    }

    listContainer.appendChild(ul);
    return ul;
}

generateList([1, 2, [1.1, 1.2, 1.3], 3]);