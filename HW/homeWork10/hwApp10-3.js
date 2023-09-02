// Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)


const rows = 10;
const cols = 10;
const table = document.querySelector('table');

for (let i = 0; i < rows; i++) {
    let row = document.createElement('tr');

    for (let j = 1; j <= cols; j++) {
        let cell = document.createElement('td');
        cell.textContent = (i * 10 + j).toString();
        row.appendChild(cell);
    }

    table.appendChild(row);
}
