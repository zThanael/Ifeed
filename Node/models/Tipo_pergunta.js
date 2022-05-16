const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Tipo_pergunta=sequelize.define('tipo_pergunta',
    {tipo: Sequelize.STRING},{
        timestamps: false
    }
)

//Criação da tabela
//Aluno.sync()

module.exports=Tipo_pergunta

