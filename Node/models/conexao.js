// const pg = require ('pg')

// const {Pool}=require('pg') //utilizando pool de conexão
// const { database, password } = require('pg/lib/defaults')

// //const client=new pg.Client({
//   const pool =new Pool({ //criando a conexão através do Pool
//     user:'postgres',
//     host:'db.hbgzqxprytccbeujybwg.supabase.co',
//     database:'postgres',
//     password:'ThWicz@2409',
//     port:6543
// })

// module.exports=pool

//OUTRO METODO


const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'ThWicz@2409', {
    host: 'db.hbgzqxprytccbeujybwg.supabase.co',
    dialect: 'postgres'
  });


module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}