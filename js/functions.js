function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}

function getProductNumber () {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number which you wanna buy:'));
  } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber));

  return productNumber;
}

function getProductAmount () {
  let productsAmount;
  do {
    productsAmount = parseInt(prompt('Enter products amount:'));
  } while(productsAmount < 1 || isNaN(productsAmount));

  return productsAmount;
}

function getSelectedProduct (productNumber) {
  return products[productNumber - 1];
}

function calcPrice (selectedProduct, productsAmount) {
  let initialPrice = selectedProduct.price * productsAmount;
  console.log('Price: $', initialPrice);

  if (isDiscount(initialPrice)) {
    const finalPrice = initialPrice * discountValue;
    console.log('Congrats! You got a discount, the final price is $' + finalPrice);
  }
}

function isDiscount (initialPrice) {
  return initialPrice >= startDiscountFrom;
}