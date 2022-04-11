const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Empresa=sequelize.define('empresas',
    {nome: Sequelize.STRING,
    cnpj: Sequelize.STRING,
    email: Sequelize.STRING,
    nome_fantasia: Sequelize.STRING},{
        timestamps: false
    }
)

//Criação da tabela
//Aluno.sync()

module.exports=Empresa

