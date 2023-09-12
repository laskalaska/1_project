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

        document.forms.checkout.style.visibility = 'visible';

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

function getTotalPrice(price) {
    const quantity = document.forms.checkout.quantity.value;
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

    const isValid = validateForm(checkoutFormValues);

    const error = document.getElementById('error');
    error.innerText = '';

    if (isValid) {
        showCustomerInfo(checkoutFormValues);
        showOrderDetails();
    } else {
        error.innerText = 'Please, enter all required fields';
    }
});

function showCustomerInfo (checkoutFormValues) {
    const userData = [
        {label: 'Full Name', value: checkoutFormValues.fullName},
        {label: 'City', value: checkoutFormValues.city},
        {label: 'Post', value: checkoutFormValues.post},
        {label: 'Payment', value: checkoutFormValues.payment},
        {label: 'Quantity of product', value: checkoutFormValues.quantity},
        {label: 'Comment', value: checkoutFormValues.comment},
    ]

    const orderBoard = document.getElementById('userOrderInfo');
    orderBoard.style.visibility = 'visible';


    const billAddressDetails = document.getElementById('billAddressDetails');
    billAddressDetails.innerHTML = '';


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
}

function showOrderDetails () {
    const productInfoDetails = document.getElementById('productInfoDetails');
    productInfoDetails.innerHTML = '';

    const priceContainer = document.getElementById('price');
    const productId = priceContainer.getAttribute('data-product');
    const categoryKey = priceContainer.getAttribute('data-category');
    const product = categories[categoryKey].products.find((product) => product.id == productId);

    showItem(product, productId, categoryKey, 'productInfoDetails');
    productInfoDetails.removeChild(productInfoDetails.lastElementChild);

    const totalPrice = getTotalPrice(product.price);
    const totalPriceContainer = document.querySelector(".totalPrice");
    totalPriceContainer.innerHTML = '';

    totalPriceContainer.innerText = 'Total Price: ';
    totalPriceContainer.classList.add('totalPrice');
    const totalPriceValue = document.createElement('span');
    totalPriceValue.textContent = `$${totalPrice.toString()}`;

    totalPriceContainer.appendChild(totalPriceValue);
}



