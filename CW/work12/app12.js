// Пишемо форму для реєстрації
//
// Поля:
//
//     Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка "Зберегти"
// Після натискання на кнопку, замість форми повинна виводитися "таблиця" з даними, які ввів користувач.

const cities = {
    kyiv: 'Kyiv',
    odesa: 'Odesa',
    lviv: 'Lviv'
};

function checkedItem(arr) {
    let items = [];
    for (let item of arr) {
        if (item.checked) {
            items.push(item.parentNode.textContent)
        }
    }
    return items;
}

    const formElements = document.forms.mainForm.elements;
document.getElementById('saveUserInfoBtn').addEventListener('click', () => {
    const firstName = formElements.firstName.value;
    const lastName = formElements.lastName.value;
    const birthdate = formElements.birthdate.value;
    const gender = checkedItem(formElements.gender);
    // const gender = formElements.gender.value;
    const city = cities[formElements.city.value];
    const address = formElements.address.value;
    const language = checkedItem(formElements.languages);

    // for (let i = 0; i < formElements.languages.length; i++) {
    //     if (formElements.languages[i].checked) {
    //         language.push(formElements.languages[i].parentNode.textContent);
    //         // language.push(formElements.languages[i].value);
    //     }
    // }

    document.querySelector("[name = 'mainForm']").style.display = 'none';
    const table = document.getElementById('userTable');
    table.innerHTML = '';

    const userData = [
        { label: 'First Name:', value: firstName },
        { label: 'Last Name:', value: lastName },
        { label: 'Birthdate:', value: birthdate },
        { label: 'Gender:', value: gender },
        { label: 'City:', value: city },
        { label: 'Address:', value: address },
        { label: 'Languages:', value: language.join(', ') }
    ];

    for (let item of userData) {
        let row = document.createElement('tr');
        let key   = document.createElement('td');
        let input = document.createElement('td');
        key.textContent = item.label;
        input.textContent = item.value;
        row.appendChild(key);
        row.appendChild(input);
        table.appendChild(row);
    }
});
