const socket = io();

document.getElementById('productForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('productTitle').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const thumbnail = document.getElementById('productThumbnail').value;
    const code = document.getElementById('productCode').value;
    const status = document.getElementById('productStatus').value;
    const stock = document.getElementById('productStock').value;

    const newProduct = { title, description, price, thumbnail, code, status, stock };

    socket.emit('newProduct', newProduct);

    console.log(newProduct);
});
