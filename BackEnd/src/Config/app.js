const express=require('express');
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());


//enpoints, que son como las rutas que identifican cada tarea
const ProductRoutes=require('../Routes/productos.routes');
//creamos un enpoint para identificar las funciones de solo el usuario empleando la constante app
app.use('/carrito',ProductRoutes); 

