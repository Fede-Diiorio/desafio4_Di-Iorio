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
        console.log(req.body);

        const numericPrice = parseFloat(price);
        const numericStock = parseInt(stock);

        if (isNaN(numericPrice) || isNaN(numericStock)) {
            throw new Error('Price y Stock deben ser valores numéricos');
        }

        await manager.addProduct(title, description, numericPrice, thumbnail, code, status, numericStock);

        res.redirect('/realTimeProducts');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
