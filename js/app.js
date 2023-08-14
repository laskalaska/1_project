const startDiscountFrom = 10000;
const discount = 10;

const discountValue = (100 - discount) / 100;

showProducts();

// Get product number
const productNumber = getProductNumber();

// Get product amount
const productsAmount = getProductAmount();

// save selected product
const selectedProduct = getSelectedProduct(productNumber);

// Calculate initial price without discount
calcPrice(selectedProduct, productsAmount);

// Calculate price with discount if needed
// if (initialPrice >= startDiscountFrom) {
//   const finalPrice = initialPrice * discountValue;
//   console.log('Congrats! You got a discount, the final price is $' + finalPrice);
// }

