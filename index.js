const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3010;

//middleware para capturar la informacion
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});
routerApi(app);
app.listen(port, () => {
  console.log('Mi port' + port);
});

routerApi(app);
