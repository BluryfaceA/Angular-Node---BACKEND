//Para conectarnos a nuestra base de datos utilizamos Sequalisze un framwork.
import {Sequelize}  from 'sequelize'

//Metodo para conectarse-->


// Option 3: Passing parameters separately (other dialects)

const sequelize = new Sequelize('almacen', 'root', 'pucca123', {
    host: 'localhost',
    dialect: 'mysql'
  });


  export default sequelize;