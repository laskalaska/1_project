function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}