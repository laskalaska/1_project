import axios from "axios";
import {basicUrl} from "./common";
import {createElement, cleanElement} from "./domHelpers";
import {validateData} from "./validation.js"
import {Hamburger} from "./Hamburger";

let cachedProducts = [];
let cart = [];
let buyerInfo = {};

export async function handleCategoryClick(event) {
    cleanElement('#content');
    const categoryId = event.target.getAttribute('data-id');

    const {data} = await axios(`${basicUrl}/api/products/${categoryId}`);
    cachedProducts = data;
    console.log(data);

    data.forEach(item => {
        createElement('div', '#content', `${item.name}, $${item.price}`, {
            'data-category': categoryId,
            'data-product': item.id,
            ...(item.configurable ? {'data-bs-toggle': "modal"} : {}),
            ...(item.configurable ? {'data-bs-target': "#exampleModal"} : {}),
        }, {
            click: item.configurable ? handleConfigurableItemClick : handleProductClick
        })
    })
}

function handleConfigurableItemClick(event) {
    const productId = event.target.getAttribute('data-product');
    const categoryId = event.target.getAttribute('data-category');

    document.getElementById('orderHamburger').setAttribute('data-product', productId);
    document.getElementById('orderHamburger').setAttribute('data-category', categoryId);
}

document.getElementById('orderHamburger').addEventListener('click', (event) => {
    const categoryId = event.target.getAttribute('data-category');
    const productId = event.target.getAttribute('data-product');
    let hamburgerObj = calculateOrder(productId);
    const myProduct = getProduct(productId);

    hamburgerObj = {...myProduct, ...hamburgerObj};
    cart.push({categoryId, product: hamburgerObj});
    updateCart();
    console.log('Cart', cart);
})

function calculateOrder(productId) {
    const form = document.getElementById('hamburgerForm');
    const initialPrice = getProduct(productId).price; // original product price from cached array

    const hamburger = new Hamburger(initialPrice);

    const stuffings = form.querySelectorAll('input[name="stuffing"]:checked');
    stuffings.forEach(stuffing => {
        hamburger.addStuffing(
            stuffing.value === 'cheese' ? Hamburger.STUFFING_CHEESE :
                stuffing.value === 'salad' ? Hamburger.STUFFING_SALAD : Hamburger.STUFFING_POTATO
        );
    });
    const toppings = form.querySelectorAll('input[name="topping"]:checked');
    toppings.forEach(topping => {
        hamburger.addTopping(
            topping.value === 'spice' ? Hamburger.TOPPING_SPICE : Hamburger.TOPPING_MAYO
        );
    });

    hamburger.calculatePrice();

    console.log(hamburger);
    return hamburger;
}

function handleProductClick(event) {
    const categoryId = event.target.getAttribute('data-category');
    const productId = event.target.getAttribute('data-product');
    console.log(categoryId, productId)

    const myProduct = getProduct(productId);

    cart.push({categoryId, product: myProduct});
    updateCart();
}

function getProduct(productId) {
    const myProduct = cachedProducts.find(item => item.id == productId);
    console.log(myProduct);
    return myProduct;
}

function updateCart() {
    const cartDiv = document.getElementById('cart-list');
    cleanElement(cartDiv);

    cart.forEach(item => {
        const productDiv = createElement('div', cartDiv, `
        Name: ${item.product.name}, Price: ${item.product.price}`);

        if (item.product.updatedPrice) {
            productDiv.innerText += `, Price with extras: ${item.product.updatedPrice}`;
        }
    })

    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn.classList.contains('hidden')) {
        checkoutBtn.classList.remove('hidden');
    }
}

document.getElementById('confirmOrder').addEventListener('click', () => {
    const checkoutForm = document.forms.checkout;
    const checkoutFormElements = checkoutForm.elements;

    const checkoutFormValues = {
        fullName: checkoutFormElements.fullName.value,
        city: cities[checkoutFormElements.city.value],
        post: checkoutFormElements.postalOffice.value,
        payment: checkedItem(checkoutFormElements.payment),
        comment: checkoutFormElements.userNote.value
    }

    const error = document.getElementById('error');
    cleanElement(error);

    if (validateData()) {
        buyerInfo = checkoutFormValues;
        axios.post(`${basicUrl}/api/order`, {cart, buyerInfo})
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    const checkoutForm = document.forms.checkout;
                    checkoutForm.classList.add('hidden');
                    createElement('div', '#checkoutBody', 'Your order has been processed successfully!', {'id': 'success'});
                    document.getElementById('confirmOrder').setAttribute('disabled', '');
                }
            })
    } else {
        error.innerText = 'Please, enter all required fields';
    }
})

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