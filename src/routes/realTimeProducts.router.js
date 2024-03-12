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

router.post('/', async (req, res) => {
    try {
        const { title, description, price, thumbnail, code, status, stock } = req.body;

        const newProduct = { title, description, price, thumbnail, code, status, stock }

        await manager.addProduct(title, description, price, thumbnail, code, status, stock);

        if (newProduct.title && newProduct.description && newProduct.price && newProduct.code && newProduct.stock) {
            req.app.get('ws').emit('newProduct', newProduct);
        }

        res.redirect('/realTimeProducts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
