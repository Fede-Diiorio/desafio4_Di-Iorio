const socket = io();

socket.on('newProduct', (product) => {
    const container = document.getElementById('productFeed')

    const divContainer = document.createElement('div');
    divContainer.classList.add('product');

    const title = document.createElement('h4');
    title.innerText = product.title;

    const thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', product.thumbnail);
    thumbnail.setAttribute('alt', product.thumbnail);

    const divInfo = document.createElement('div');
    divInfo.classList.add('product__info');

    const description = document.createElement('p');
    description.innerText = product.description;

    const price = document.createElement('p');
    price.innerText = `Precio: ${product.price}`

    const stock = document.createElement('p');
    stock.innerText = `Precio: ${product.stock}`

    const code = document.createElement('p');
    code.innerText = `Precio: ${product.code}`

    divInfo.append(description, price, stock, code);
    divContainer.append(title, thumbnail, divInfo);
    container.append(divContainer);
})
