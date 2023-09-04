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

function showItem (product) {
  const parentNode = document.getElementById('right');
  parentNode.innerHTML = '';

  for (let property in product) {
    if (!(property === 'id')) {
      let element = document.createElement('div');

      if (property === 'price'){
        element.textContent = `${property}: $${product[property]}`;
      } else {
        element.textContent = `${property}: ${product[property]}`;
      }

      element.id = property;

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

    // console.log(product);
    showItem(product);
  }
});

document.getElementById('right').addEventListener('click', event => {
    if (event.target.getAttribute('id') === 'buyAction') {
        const center = document.getElementById('center');
        const right = document.getElementById('right');

        const productName = document.getElementById('name').innerText.replace(/^name: /, '');

        alert(`${productName} sold successfully`);

        center.innerHTML = '';
        right.innerHTML = '';
    }
});

