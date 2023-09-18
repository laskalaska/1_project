function showCategories() {
    const parentElement = document.getElementById('left');

    for (let categoryKey in categories) {
        const category = categories[categoryKey];

        let element = document.createElement('div');
        element.textContent = category.name;
        element.setAttribute('data-category', categoryKey)
        parentElement.appendChild(element);
    }
}

function showProducts(products, category) {
    const parentElement = document.getElementById('center');
    parentElement.innerHTML = '';

    for (let product of products) {
        let element = document.createElement('div');
        element.textContent = `${product.name} $${product.price}`;
        element.setAttribute('data-product', product.id);
        element.setAttribute('data-category', category);

        parentElement.appendChild(element);
    }
}

function showItem(product, productId, categoryKey, parentNodeID) {
    const parentNode = document.getElementById(parentNodeID);
    parentNode.innerHTML = '';

    for (let property in product) {
        if (!(property === 'id')) {
            let element = document.createElement('div');

            if (property === 'price') {
                element.textContent = `${property}: $${product[property]}`;
            } else {
                element.textContent = `${property}: ${product[property]}`;
            }

            element.id = property;
            element.setAttribute('data-product', productId);
            element.setAttribute('data-category', categoryKey);

            parentNode.appendChild(element);
        }
    }

    const buyBtn = document.createElement('input');
    buyBtn.setAttribute('type', 'button');
    buyBtn.setAttribute('value', 'Buy this product');
    buyBtn.id = 'buyAction';
    parentNode.appendChild(buyBtn);
}

showCategories();


document.getElementById('left').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const categoryKey = event.target.getAttribute('data-category');
        const categoryProducts = categories[categoryKey].products;
        // console.log(categoryProducts);
        showProducts(categoryProducts, categoryKey);
    }
    const right = document.getElementById('right');
    right.innerHTML = '';
});


document.getElementById('center').addEventListener('click', event => {
    if (event.target.nodeName === 'DIV') {
        const productId = event.target.getAttribute('data-product');
        const categoryKey = event.target.getAttribute('data-category');

        const product = categories[categoryKey].products.find(product => product.id == productId);

        console.log(product);
        showItem(product, productId, categoryKey, 'right');
    }
});

document.getElementById('right').addEventListener('click', event => {
    if (event.target.getAttribute('id') === 'buyAction') {
        const center = document.getElementById('center');
        const right = document.getElementById('right');

        // const productName = document.getElementById('name').innerText.replace(/^name: /, '');

        document.forms.checkout.classList.remove('hidden');

        // alert(`${productName} sold successfully`);

        // center.innerHTML = '';
        // right.innerHTML = '';


    }
});

const cities = {
    kyiv: 'Kyiv',
    odesa: 'Odesa',
    lviv: 'Lviv'
}

function checkedItem(arr) {
    let items = [];
    for (let item of arr) {
        if (item.checked) {
            items.push(item.parentNode.textContent);
        }
    }
    return items;
}

function getTotalPrice(price, quantity) {
    const totalPrice = price * quantity;
    return totalPrice;
}

function validateForm(formValues) {

    if (!formValues.fullName || !formValues.city || !formValues.post || !formValues.payment || !formValues.quantity) {
        return false;
    } else {
        return true;
    }

}

const defaultOrderHistory = [];
const ordersHistory = JSON.parse(localStorage.getItem('ourOrders')) || defaultOrderHistory;

document.getElementById('myOrdersBtn').addEventListener('click', (event) => {
    const main = document.getElementById('main');
    main.classList.add('hidden');
    const orderBoard = document.getElementById('userOrderInfo');
    orderBoard.classList.add('hidden');
    const checkoutForm = document.forms.checkout;
    checkoutForm.classList.add('hidden');
    const myOrdersContainer = document.querySelector('#myOrdersLines');
    myOrdersContainer.innerHTML = '';
    for (let orderLine of ordersHistory) {
        const container = createElementFunc('div', '#myOrdersLines', '', {
            'data-order-id': orderLine.orderId,
            'className': 'orderLineStyle'
        });
        createElementFunc('span', container, orderLine.orderDate);
        createElementFunc('span', container, '$' + orderLine.totalPrice);

        const actionElements = createElementFunc('div', container, '', {
            className: 'actions',
            'data-id': orderLine.orderId
        })

        createElementFunc('input',
            actionElements,
            '',
            {type: 'button', value: 'View order', 'data-type': 'view'},
            {click: showSavedOrder});

        createElementFunc('input',
            actionElements,
            '',
            {type: 'button', value: 'Delete order', 'data-type': 'delete'},
            {click: deleteSavedOrder});
    }

    event.target.classList.add('hidden');
    const backBtn = document.getElementById('goBackShop');
    backBtn.classList.remove('hidden');
});

document.getElementById('goBackShop').addEventListener('click', (event) => {
    const main = document.getElementById('main');
    main.classList.remove('hidden');

    const myOrdersBtn = document.getElementById('myOrdersBtn');
    myOrdersBtn.classList.remove('hidden');

    const orderBoard = document.getElementById('userOrderInfo');
    orderBoard.classList.add('hidden');

    event.target.classList.add('hidden');

    const myOrdersContainer = document.querySelector('#myOrdersLines');
    myOrdersContainer.innerHTML = '';
})


document.getElementById('confirmOrder').addEventListener('click', (event) => {
    const checkoutForm = document.forms.checkout;
    const checkoutFormElements = checkoutForm.elements;

    const checkoutFormValues = {
        fullName: checkoutFormElements.fullName.value,
        city: cities[checkoutFormElements.city.value],
        post: checkoutFormElements.postalOffice.value,
        payment: checkedItem(checkoutFormElements.payment),
        quantity: checkoutFormElements.quantity.value,
        comment: checkoutFormElements.userNote.value
    }

    const priceContainer = document.getElementById('price');

    const productId = priceContainer.getAttribute('data-product');
    const categoryKey = priceContainer.getAttribute('data-category');
    const product = categories[categoryKey].products.find((product) => product.id == productId);

    const orderData = {
        productId,
        categoryKey,
        product,
    };

    const isValid = validateForm(checkoutFormValues);

    const error = document.getElementById('error');
    error.innerText = '';

    if (isValid) {
        const completeOrder = showCustomerInfo(checkoutFormValues, orderData);
        completeOrder.orderId = Date.now();
        completeOrder.orderDate = getCurrentDateTime();
        ordersHistory.push(completeOrder);
        localStorage.setItem('ourOrders', JSON.stringify(ordersHistory));
        checkoutForm.classList.add('hidden');
    } else {
        error.innerText = 'Please, enter all required fields';
    }
});


function showCustomerInfo(checkoutFormValues, orderData) {
    const userData = [
        {label: 'Full Name', value: checkoutFormValues.fullName},
        {label: 'City', value: checkoutFormValues.city},
        {label: 'Post', value: checkoutFormValues.post},
        {label: 'Payment', value: checkoutFormValues.payment},
        {label: 'Quantity of product', value: checkoutFormValues.quantity},
        {label: 'Comment', value: checkoutFormValues.comment},
    ]

    const orderBoard = document.getElementById('userOrderInfo');
    orderBoard.classList.remove('hidden');

    const billAddressDetails = document.getElementById('billAddressDetails');
    billAddressDetails.innerHTML = '';

    //create Customer Info section
    for (let dataInput of userData) {
        const p = document.createElement('p');
        if (dataInput.value) {
            p.textContent = `${dataInput.label} : `;

            const span = document.createElement('span');
            p.appendChild(span);
            span.textContent = dataInput.value;

            billAddressDetails.appendChild(p);
        }
    }
    //create Order Details section
    const productInfoDetails = document.getElementById('productInfoDetails');
    productInfoDetails.innerHTML = '';


    showItem(orderData.product, orderData.productId, orderData.categoryKey, 'productInfoDetails');
    productInfoDetails.removeChild(productInfoDetails.lastElementChild);

    const totalPrice = getTotalPrice(orderData.product.price, checkoutFormValues.quantity) || getTotalPrice(orderData.price, checkoutFormValues.quantity);
    const totalPriceContainer = document.querySelector(".totalPrice");
    totalPriceContainer.innerHTML = '';

    totalPriceContainer.innerText = 'Total Price: ';
    totalPriceContainer.classList.add('totalPrice');
    const totalPriceValue = document.createElement('span');
    totalPriceValue.textContent = `$${totalPrice.toString()}`;

    totalPriceContainer.appendChild(totalPriceValue);

    orderData.totalPrice = totalPrice;

    const completeOrder = {...checkoutFormValues, ...orderData};
    return completeOrder;
}
