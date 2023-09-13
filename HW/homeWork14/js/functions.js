function showRows(users) {
  for (let user of users) {
    showUserRow(user);
  }
}

function showUserRow(user) {
  const container = createElement('div', '#users', '', { 'data-user-id': user.id }); // container

  createElement('div', container, user.id); // idElement

  createElement('div', container, user.name + ' ' + user.lastName); // nameElement

  const actionsElement = createElement('div', container, '', { className: 'actions', 'data-id': user.id });

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'Edit', 'data-type': 'edit' }
  ); // editBtnElement

  createElement(
    'input',
    actionsElement,
    '',
    { type: 'button', value: 'Delete', 'data-type': 'delete' },
    {
      click: handleDeleteUser
    }
  ); // deleteBtnElement

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

function showAddUserForm() {
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
      value: 'Save'
    },
    {
      click: handleSaveUser
    }
  );

}

function handleSaveUser() {
  const formElements = document.forms[0].elements;

  const login = formElements.login.value;
  const name = formElements.name.value;
  const lastName = formElements.lastName.value;
  const email = formElements.email.value;

  const user = {
    login,
    name,
    lastName,
    email,
    id: Date.now(), // TODO: think about other options
  };

  const isValid = validate(user);

  if (!isValid) {
    // TODO: add errors
  } else {
    saveUser(user);
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

function handleDeleteUser(event) {
  console.dir(event.target);
  const userId = event.target.parentNode.getAttribute('data-id');
  deleteUserById(+userId);
}

function deleteUserById(id) {
  const indexToRemove = users.findIndex(user => user.id === id);
  users.splice(indexToRemove, 1);
  removeElement(`div[data-user-id="${id}"]`);
  updateStorage();
}

function updateStorage() {
  localStorage.setItem('users', JSON.stringify(users));
}