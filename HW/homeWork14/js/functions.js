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
    const name = formElements.name.value;
    const lastName = formElements.lastName.value;
    const email = formElements.email.value;

    const user = {
        login,
        name,
        lastName,
        email,
        id: userId ? userId : Date.now(), // TODO: think about other options
    };

    const isValidLogin = validateLogin(user.login);
    const isValidName = validateName(user.name);
    const isValidLastName = validateLastName(user.lastName);
    const isValidEmail = validateEmail(user.email);
    // const isValid = validate(user);
    // console.log(userId);
    // console.log(user);
    const error = document.querySelector('#error');
    cleanElement(error);

    if (!isValidLogin) {
        error.innerText = "Please, enter valid login. It should be 4 characters long. It may have lowercase and uppercase letters, digits, '.', '_'.";
    } else if (!isValidName) {
        error.innerText = 'Please, enter your name.';
    } else if (!isValidLastName) {
        error.innerText = 'Please, enter your last name.';
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

function validateName(userName) {
    let regex = /[A-Za-z\s]+/;
    return regex.test(userName);
}

function validateLastName(userLastName) {
    let regex = /[A-Za-z\s-]+/;
    return regex.test(userLastName);
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
    const nameContainer = createElement('p', infoContainer, 'Name: ');
    createElement('span', nameContainer, users[indexToView].name);
    const lastNameContainer = createElement('p', infoContainer, 'Last Name: ');
    createElement('span', lastNameContainer, users[indexToView].lastName);
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