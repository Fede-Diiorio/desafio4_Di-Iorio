const express = require('express');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');
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

const httpServer = app.listen(8080, () => {
    console.log('Servidor listo!');
});

// Creando un servidor para WS
const wsServer = new Server(httpServer);

// Un cliente nuevo se conecta
wsServer.on('connection', (clientSocket) => {
    console.log(`Cliente conectado, ID: ${clientSocket.id}`)

    clientSocket.on('new-message', (message) => {
        wsServer.emit('message', message)
    })

})