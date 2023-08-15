showProducts();

// Get product number
const productNumber = getNumericValue('Enter product number which you wanna buy:', products.length);

// Get product amount
const productsAmount = getNumericValue('Enter products amount:');

// save selected product
const selectedProduct = getSelectedProduct(productNumber);

// Calculate initial price with discount
calcPrice(selectedProduct, productsAmount);

