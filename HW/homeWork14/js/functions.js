function showRows(users) {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '';
    for (let user of users) {
        showUserRow(user);
    }
}

function showUserRow(user) {
    const container = createElement('div', '#users', '', {'data-user-id': user.id}); // container

    createElement('div', container, user.id); // idElement

    createElement('div', container, user.name + ' ' + user.lastName); // nameElement

    const actionsElement = createElement('div', container, '', {className: 'actions', 'data-id': user.id});

    createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'Edit', 'data-type': 'edit'},
        {
            click: handleEditUser
        }
    ); // editBtnElement

    createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'View', 'data-type': 'view'},
        {
            click: handleViewUser
        }
    ); //viewBtnElement

    createElement(
        'input',
        actionsElement,
        '',
        {type: 'button', value: 'Delete', 'data-type': 'delete'},
        {
            click: handleDeleteUser
        }
    ); // deleteBtnElement
}

function showAddUserForm(userId) {
    cleanElement('#userInfo');
    cleanElement('#error');
    const parentSelector = '#form form';
    cleanElement(parentSelector);

    const indexToEdit = userId ? users.findIndex(user => user.id === userId) : undefined;
    // console.log(indexToEdit)

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'login',
            type: 'text',
            placeholder: 'Enter login',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].login : ''
        }
    ); // login input

    createElement('input',
        parentSelector,
        '',
        {
            name: 'password',
            type: 'password',
            placeholder: 'Enter password',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].password : ''
        }
    ); // password input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].name : ''
        }
    ); // name input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter last name',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].lastName : ''
        }
    ); // lastName input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'age',
            type: 'text',
            placeholder: 'Enter your age',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].age : ''
        }
    ); // age input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'phoneNumber',
            type: 'text',
            placeholder: 'Enter your phone number',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].phoneNumber : ''
        }
    ); // phoneNumber input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'creditCardNumber',
            type: 'text',
            placeholder: 'Card Number',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].creditCardNumber : ''
        }
    ); // creditCardNumber input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'email',
            type: 'text',
            placeholder: 'Enter email',
            value: typeof indexToEdit === 'number' ? users[indexToEdit].email : ''
        }
    ); // email input

    createElement(
        'input',
        parentSelector,
        '',
        {
            type: 'button',
            value: 'Save',
            'data-id': userId
        },
        {
            // click: userId ? handleSaveUser(userId) : handleSaveUser
            click: handleSaveUser
            // click: function () {
            //
            // }
        }
    );

}

function handleSaveUser(event) {
    const formElements = document.forms[0].elements;
    const userId = parseInt(event.target.getAttribute('data-id'));

    const login = formElements.login.value;
    const password = formElements.password.value;
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const age = formElements.age.value;
    const phoneNumber = formElements.phoneNumber.value;
    const creditCardNumber = formElements.creditCardNumber.value;
    const email = formElements.email.value;

    const user = {
        login,
        password,
        name,
        lastName,
        age,
        phoneNumber,
        creditCardNumber,
        email,
        id: userId ? userId : Date.now(), // TODO: think about other options
    };

    const isValidLogin = validateLogin(user.login);
    const isValidPassword = validatePassword(user.password);
    const isValidName = validateName(user.name);
    const isValidLastName = validateLastName(user.lastName);
    const isValidAge = validateAge(user.age);
    const isValidPhoneNumber = validatePhoneNumber(user.phoneNumber);
    const isValidCreditCardNumber = validateCreditCardNumber(user.creditCardNumber);
    const isValidEmail = validateEmail(user.email);
    // const isValid = validate(user);
    // console.log(userId);
    // console.log(user);
    const error = document.querySelector('#error');
    cleanElement(error);

    if (!isValidLogin) {
        error.innerText = "Please, enter valid login. It should be 4 characters long. It may have lowercase and uppercase letters, digits, '.', '_'.";
    } else if (!isValidPassword) {
        error.innerText = 'Please, enter valid password. It must contain at least 1 uppercase and lowercase letter, at least 1 digit, and be 8 characters long.';
    } else if (!isValidName) {
        error.innerText = 'Please, enter your name.';
    } else if (!isValidLastName) {
        error.innerText = 'Please, enter your last name.';
    } else if (!isValidAge) {
        error.innerText = 'Please, enter your age.';
    } else if (!isValidPhoneNumber) {
        error.innerText = 'Phone number must contain area code, and match the following format: (xxx)xx-xx-xxx.';
    } else if (!isValidCreditCardNumber) {
        error.innerText = 'Card number must contain 16 digits.';
    } else if (!isValidEmail) {
        error.innerText = 'Please, enter valid email address.';
    } else {
        if (userId) {
            editUser(user, userId);
        } else {
            saveUser(user);
        }
        cleanElement('#form form');
    }
    // if (!isValid) {
    //     const error = document.querySelector('#error');
    //     cleanElement(error);
    //     error.innerText = 'Please, enter all required fields.';
    // } else {
    //     if (userId) {
    //         editUser(user, userId);
    //     } else {
    //         saveUser(user);
    //     }
    //     cleanElement('#error');
    //     cleanElement('#form form');
    // }
}

// function validate(user) {
//     if (user.login === '' || user.email === '' || user.name === '' || user.lastName === '') {
//         return false;
//     }
//
//     return true;
// }

function validateLogin(userLogin) {
    let regex = /^[\w.]{4,}$/;
    return regex.test(userLogin);
}

function validatePassword (userPassword) {
    let regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    return regex.test(userPassword);
}

function validateName(userName) {
    let regex = /^[A-Za-z\s]+$/;
    return regex.test(userName);
}

function validateLastName(userLastName) {
    let regex = /^[A-Za-z\s-]+$/;
    return regex.test(userLastName);
}

function validateAge (userAge) {
    let regex = /^\d{1,3}$/;
    return regex.test(userAge);
}

function validatePhoneNumber (userPhoneNumber) {
    let regex = /^\(\d{3}\)\d{2}-\d{2}-\d{3}$/;
    return regex.test(userPhoneNumber);
}

function validateCreditCardNumber (userCardNumber) {
    let regex = /\d{16}/;
    return regex.test(userCardNumber);
}

function validateEmail(userEmail) {
    let regex = /^[\w.-]{2,}@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    return regex.test(userEmail);
}

function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserRow(newUser);
}

function handleViewUser(event) {
    cleanElement('#error');
    cleanElement('#form form');

    const userId = parseInt(event.target.parentNode.getAttribute('data-id'));
    const indexToView = users.findIndex(user => user.id === userId);

    // const userContainer = document.querySelector(`div[data-user-id='${userId}']`);
    cleanElement('#userInfo');
    const infoContainer = createElement('div', `#userInfo`, '', {'data-id': userId, className: 'user-info-complete'});

    // userContainer.after(infoContainer);

    const loginContainer = createElement('p', infoContainer, 'Login: ');
    createElement('span', loginContainer, users[indexToView].login);
    const passwordContainer = createElement('p', infoContainer, 'Password: ');
    createElement('span', passwordContainer, users[indexToView].password);
    const nameContainer = createElement('p', infoContainer, 'Name: ');
    createElement('span', nameContainer, users[indexToView].name);
    const lastNameContainer = createElement('p', infoContainer, 'Last Name: ');
    createElement('span', lastNameContainer, users[indexToView].lastName);
    const ageContainer = createElement('p', infoContainer, 'Age: ');
    createElement('span', ageContainer, users[indexToView].age);
    const phoneNumberContainer = createElement('p', infoContainer, 'Phone number: ');
    createElement('span', phoneNumberContainer, users[indexToView].phoneNumber);
    const creditCardNumberContainer = createElement('p', infoContainer, 'Credit card: ');
    createElement('span', creditCardNumberContainer, users[indexToView].creditCardNumber);
    const emailContainer = createElement('p', infoContainer, 'Email Address: ');
    createElement('span', emailContainer, users[indexToView].email);


    // for (let value in users[indexToView]) {
    //
    // }
}

function handleEditUser(event) {
    // console.dir(event.target);
    const userId = parseInt(event.target.parentNode.getAttribute('data-id'));
    // cleanElement('#form form');
    showAddUserForm(userId);
}

function editUser(user, id) {
    const indexToEdit = users.findIndex(user => user.id === id);
    users[indexToEdit] = user;
    updateStorage();
    showRows(users);
}

function handleDeleteUser(event) {
    event.target.classList.add('hidden');
    const container = event.target.parentNode;

    const deleteText = createElement('span',
        container,
        'Are you sure you want to delete this record?'
    );
    const deleteConfirm = createElement(
        'input',
        container,
        '',
        {
            type: 'button',
            value: 'Confirm',
            'data-type': 'confirm'
        },
        {
            click: deleteUserById
        }
    );
    const deleteDecline = createElement(
        'input',
        container,
        '',
        {
            type: 'button',
            value: 'Decline',
            'data-type': 'decline'
        },
        {
            click: () => {
                deleteText.remove();
                deleteConfirm.remove();
                deleteDecline.remove();
                event.target.classList.remove('hidden');
            }
        }
    );

    console.dir(event.target);
    // const userId = event.target.parentNode.getAttribute('data-id');
    // deleteUserById(+userId);
}

function deleteUserById(event) {
    cleanElement('#error');
    cleanElement('#userInfo');
    cleanElement('#form form');

    const userId = parseInt(event.target.parentNode.getAttribute('data-id'));
    const indexToRemove = users.findIndex(user => user.id === userId);
    users.splice(indexToRemove, 1);
    removeElement(`div[data-user-id="${userId}"]`);
    updateStorage();
}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}