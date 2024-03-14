# Desafio 4 - Coderhouse Backend

Este producto se encuentra en construcción.

Este proyecto fue creado con el fin de cumplir con los requisitos del desafio número 4 del curso de backend de CoderHouse.

## Correr de manera local
```bash
git clone https://github.com/Fede-Diiorio/desafio4_Di-Iorio.git
cd desafio4_Di-Iorio
npm install
nodemon src/app
```

## Construido usando

- [Express](https://www.npmjs.com/package/express)
- [Handlebars](https://handlebarsjs.com/guide/)
- [Socket.io](https://socket.io/docs/v4/)

## Funcionamiento del sitio

Una vez que el sitio esté corriendo de manera local debes ingresar en:

[**URL:**](http://localhost:8080/api/home) `http://localhost:8080/api/home`

Con el sitio cargado en este endpoint podrás ver la lista de productos sin estar conectado a websocket. 
Puedes acceder a websocket mediante la navegación del sitio o bien ingresando a: 

[**URL:**](http://localhost:8080/api/realTimeProducts) `http://localhost:8080/api/realTimeProducts`

### Agregar un nuevo producto

Para agregar un producto encontraras un pequeño formulario que te permite cargar un nuevo producto el cual se actualizará en tiempo real mediante websocket.
Para ver esto con mayor facilidad se recomienda correr el sitio en dos pestañas diferentes a la hora de cargar el producto desde el formulario.

**Ejemplo:**

![Ejemplo](https://github.com/Fede-Diiorio/desafio4_Di-Iorio/blob/main/public/img/ejemploForm.png?raw=true)

### Eliminar producto existente

Para eliminar un producto, por el momento, deberás hacerlo usando `Postman` dado a que aún no existe una interfaz desarrollada para hacerlo desde dentro del sitio.
Si haz agregado un producto nuevo valiendote del formulario puedes eliminarlo cargando el siguiente endpoint en Postman:

#### `deleteProduct`

Selecciona un producto según su ID para eliminarlo.

[**URL:**](http://localhost:8080/api/realTimeProducts/11) `http://localhost:8080/api/realTimeProducts/11` (Debe cargarse desde Postman).

**Método:** `DELETE`

Todos estos cambios, tanto de agregar así como eliminar, se veran reflejados en tiempo real mientras te mantengas conectado a websocket.