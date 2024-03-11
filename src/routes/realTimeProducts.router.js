const { Router } = require('express');
const router = Router();
const ProductManager = require('../ProductManager');
const { io } = require('../app');

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

router.post('/', async (req, res) => {
    try {
        io.emit('newProduct', title, description, price, thumbnail, code, status, stock)
        console.log({ title, description, price, thumbnail, code, status, stock });
        await manager.addProduct(title, description, price, thumbnail, code, status, stock);

        res.send('Producto agregado exitosamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});
module.exports = router;