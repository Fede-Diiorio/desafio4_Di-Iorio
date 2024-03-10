const express = require('express');
const handlebars = require('express-handlebars');
const viewsRouter = require('./routes/views.router');
const app = express();


// Configuración de handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use(express.static(`${__dirname}/../public`));

// Permitir envío de información mediante formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/view', viewsRouter)

app.listen(8080, () => {
    console.log('Servidor listo!');
});