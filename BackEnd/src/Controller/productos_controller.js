const database=require('../Config/data')
const mysql2=require ('mysql2');
//funciones
function IngresarUsu(req, res) {
    const { user, contra } = req.body;
    const readQuery = `select * from usuario where Usuario=? and Clave=?;`;
    const query = mysql2.format(readQuery, [user, contra]);
    database.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
      } else if (result[0] !== undefined) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    });
  }
  function CrearProducto(req,res){
    const {Nombre,Precio,descrip}=req.body;
    const Query=`insert into table producto (nombre,precio,descripcion) values (?,?,?);`
    const query=mysql2.format(Query,[Nombre,Precio,descrip]);
    database.query(query,(err,result)=>{
        if(err){
            console.error(err);
            res.status(500).json({ message: 'Error en el servidor' });
        }
        else if (result[0] !== undefined) {
            res.json({message:'Usuario registrado'});
        }
        else {
            res.status(404).json({ message: 'Nose pudo registrar el usuario' });
          }
    });
  }
  function ConsultarProductos(req, res) {
    const readQuery = `select * from producto;`;
    database.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
      } else if (result[0] !== undefined) {
        res.json(result[0]);
      } else {
        res.status(404).json({ message: 'Hubo un error en consultar los productos' });
      }
    });
  }
  module.exports={
    IngresarUsu,
    ConsultarProductos,
    CrearProducto
  }