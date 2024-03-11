const { Router } = require('express');
const router = Router();
const ProductManager = require('../ProductManager');


const manager = new ProductManager(`${__dirname}/../../assets/products.json`);

router.get('/', async (_, res) => {
    try {
        const products = await manager.getProducts();

        const productsData = products.map(product => ({
            title: product.title,
            thumbnail: product.thumbnail,
            description: product.description,
            price: product.price,
            stock: product.stock,
            code: product.code
        }));

        res.render('realTimeProducts', {
            products: productsData,
            titlePage: 'Productos',
            h1: 'Tienda',
            style: ['styles.css'],
            script: ['realTimeProducts.js'],
            useWS: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

router.post('/', (req, res) => {
    const wsServer = req.app.get('ws');

    wsServer.on('connection', (socket) => {
        console.log('Cliente conectado en producto');
        socket.on('newProduct', async (newProduct) => {
            try {
                console.log('Nuevo producto recibido: ', newProduct);

                const { title, description, price, thumbnail, code, status, stock } = newProduct;

                await manager.addProduct(title, description, price, thumbnail, code, status, stock);

                socket.emit('productAdded', 'Producto agregado exitosamente');

                wsServer.emit('productAdded', 'Nuevo producto agregado: ' + title);
            } catch (error) {
                console.error(error);

                socket.emit('productError', 'Error interno al procesar el producto');
            }
        });
    });
});

module.exports = router;
