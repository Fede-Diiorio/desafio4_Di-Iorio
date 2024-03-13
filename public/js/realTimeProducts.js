const socket = io();

socket.on('newProduct', (newProduct) => {
    const container = document.getElementById('productFeed')

    const divContainer = document.createElement('div');
    divContainer.classList.add('product');

    const title = document.createElement('h4');
    title.innerText = newProduct.title;

    const thumbnail = document.createElement('img');
    thumbnail.setAttribute('src', newProduct.thumbnail);
    thumbnail.setAttribute('alt', newProduct.thumbnail);

    const divInfo = document.createElement('div');
    divInfo.classList.add('product__info');

    const description = document.createElement('p');
    description.innerText = newProduct.description;

    const price = document.createElement('p');
    price.innerText = `Precio: ${newProduct.price}`

    const stock = document.createElement('p');
    stock.innerText = `Precio: ${newProduct.stock}`

    const code = document.createElement('p');
    code.innerText = `Precio: ${newProduct.code}`

    divInfo.append(description, price, stock, code);
    divContainer.append(title, thumbnail, divInfo);
    container.append(divContainer);
})