const { type } = require('express/lib/response')
const { INTEGER } = require('sequelize/types')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Pergunta=sequelize.define('perguntas',
    {id_tipo_pergunta: Sequelize.INTEGER,
    id_categoria: Sequelize.INTEGER,
    pergunta: Sequelize.STRING,},{
        timestamps: false
    }
)

//Criação da tabela
//Aluno.sync()

module.exports=Pergunta

