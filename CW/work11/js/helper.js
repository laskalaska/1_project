function createElementFunc(tagName, parentElement, content, attributes, handlers) {
    let parent;
    if (typeof parentElement === 'string') {
        parent = document.querySelector(parentElement);
    } else {
        parent = parentElement;
    }

    const element = document.createElement(tagName);

    if (content) {
        element.textContent = content;
    }

    for (let attribute in attributes) {
        if (attribute === 'className') {
            element.setAttribute('class', attributes[attribute]);
        } else {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    for (let eventName in handlers) {
        element.addEventListener(eventName, handlers[eventName]);
    }

    parent.appendChild(element);

    return element;
}


function showSavedOrder(event) {
    const orderId = event.target.parentNode.getAttribute('data-id');
    const indexToDisplay = ordersHistory.findIndex(user => user.orderId === +orderId);
    const {orderData, userData} = splitObjectFunc(ordersHistory[indexToDisplay]);
    showCustomerInfo(userData, orderData);
}

function deleteSavedOrder(event) {
    const orderId = event.target.parentNode.getAttribute('data-id');
    const indexToDelete = ordersHistory.findIndex(user => user.orderId === +orderId);
    ordersHistory.splice(indexToDelete, 1);
    document.querySelector(`div[data-order-id='${orderId}']`).remove();
    localStorage.setItem('ourOrders', JSON.stringify(ordersHistory));
}

function splitObjectFunc (inputObject) {
// Properties to include in the first object
    const firstObjectProps = ['productId', 'categoryKey', 'product', 'totalPrice'];

// Create the first object with selected properties
    const orderData = {};
    firstObjectProps.forEach(prop => {
        if (inputObject.hasOwnProperty(prop)) {
            orderData[prop] = inputObject[prop];
        }
    });

// Create the second object with all other properties
    const userData = {};
    for (const prop in inputObject) {
        if (!firstObjectProps.includes(prop)) {
            userData[prop] = inputObject[prop];
        }
    }

    return { orderData, userData };
}

function getCurrentDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);

    return `${hours}:${minutes} ${day}/${month}/${year}`;
}