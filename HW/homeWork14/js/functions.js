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
        {type: 'button', value: 'Delete', 'data-type': 'delete'},
        {
            click: handleDeleteUser
        }
    ); // deleteBtnElement

    // createElement(
    //     'input',
    //     actionsElement,
    //     '',
    //     {type: 'button', value: 'View', 'data-type': 'view' },
    //     {
    //       click: handleViewUser
    //     }
    // )

    // OR

    // const parent = document.getElementById('users');

    // const container = document.createElement('div');

    // const idElement = document.createElement('div');
    // idElement.textContent = user.id;
    // container.appendChild(idElement);

    // const nameElement = document.createElement('div');
    // nameElement.textContent = user.name + ' ' + user.lastName;
    // container.appendChild(nameElement);

    // const actionsElement = document.createElement('div');
    // actionsElement.classList.add('actions')

    // const editBtnElement = document.createElement('input');
    // editBtnElement.setAttribute('type', 'button');
    // editBtnElement.setAttribute('value', 'Edit');
    // editBtnElement.setAttribute('data-type', 'edit');
    // // add event listener
    // actionsElement.appendChild(editBtnElement);

    // const deleteBtnElement = document.createElement('input');
    // deleteBtnElement.setAttribute('type', 'button');
    // deleteBtnElement.setAttribute('value', 'Delete');
    // deleteBtnElement.setAttribute('data-type', 'delete');
    // // add event listener
    // actionsElement.appendChild(deleteBtnElement);

    // container.appendChild(actionsElement);

    // parent.appendChild(container);
}

function showAddUserForm(userId) {
    const parentSelector = '#form form';

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'login',
            type: 'text',
            placeholder: 'Enter login'
        }
    ); // login input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name'
        }
    ); // name input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter last name'
        }
    ); // lastName input

    createElement(
        'input',
        parentSelector,
        '',
        {
            name: 'email',
            type: 'text',
            placeholder: 'Enter email'
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

    const isValid = validate(user);
    console.log(userId);
    console.log(user);

    if (!isValid) {
        // TODO: add errors
    } else {
        if (userId) {
            editUser(user, userId);
        } else {
            saveUser(user);
        }
        cleanElement('#form form');
    }
}

function validate(user) {
    // TODO: write validation function

    if (user.login === '') {
        return false;
    }

    return true;
}

function saveUser(newUser) {
    users.push(newUser);
    updateStorage();
    showUserRow(newUser);
}

// function handleViewUser(event) {
//
// }

function handleEditUser(event) {
    // console.dir(event.target);
    const userId = event.target.parentNode.getAttribute('data-id');
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
    const userId = parseInt(event.target.parentNode.getAttribute('data-id'));
    const indexToRemove = users.findIndex(user => user.id === userId);
    users.splice(indexToRemove, 1);
    removeElement(`div[data-user-id="${userId}"]`);
    updateStorage();
}

function updateStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}