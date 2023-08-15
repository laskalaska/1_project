function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}

function getNumericValue (request, maxValue) {
  let value;
  do {
    value = parseInt(prompt(request));
  } while (value < 1 || isNaN(value) || value > maxValue);
  return value;
}

function getSelectedProduct (productNumber) {
  return products[productNumber - 1];
}

function calcPrice (selectedProduct, productsAmount) {
  let initialPrice = selectedProduct.price * productsAmount;
  console.log('Price: $', initialPrice);

  if (isDiscount(initialPrice)) {
    const finalPrice = getFinalPrice(initialPrice);
    console.log('Congrats! You got a discount, the final price is $' + finalPrice);
  }
}

function isDiscount (initialPrice) {
  const startDiscountFrom = 10000;
  return initialPrice >= startDiscountFrom;
}

function getFinalPrice (initialPrice) {
  const discount = 10;
  const discountValue = (100 - discount) / 100;
  return  finalPrice = initialPrice * discountValue;
}