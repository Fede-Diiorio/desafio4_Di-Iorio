const socket = io();

socket.on('newProduct', newProduct => {
    document.getElementById('productForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('productTitle').value;
        const description = document.getElementById('productDescription').value;
        const price = document.getElementById('productPrice').value;
        const thumbnail = document.getElementById('productThumbnail').value;
        const code = document.getElementById('productCode').value;
        const status = document.getElementById('productStatus').value;
        const stock = document.getElementById('productStock').value;

        console.log({ title, description, price, thumbnail, code, status, stock })
    })
})
