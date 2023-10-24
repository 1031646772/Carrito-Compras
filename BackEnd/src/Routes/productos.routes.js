//Usamos una funcion que nos brinda express llamada router que nos permite enrutar cada crud

const {Router}=require('express')

const router=Router();

//Tomando lo que se exporto de user.controller para usarlo
const {CrearProducto,IngresarUsu,ConsultarProductos}=require('../Controller/productos_controller');
const { route } = require('../Config/app');

router.post('/Tecno/Ingresar',IngresarUsu)
router.get('/Tecno/ConsulP',ConsultarProductos)
router.post('/Tecno/CrearP',CrearProducto);

//Lo exportamos para usarlo en app.js
module.exports=router