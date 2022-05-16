const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Categoria=sequelize.define('categorias',
    {categoria: Sequelize.STRING,},{
        timestamps: false
    }
)

//Criação da tabela
//Aluno.sync()

module.exports=Categoria

