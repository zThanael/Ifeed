const { Sequelize,sequelize } = require ('./conexao')




const Curso = sequelize.define('teste', {
    // Model attributes are defined here
    curso_nome: {
      type: Sequelize.STRING,
    },
    
  });

Curso.sync()

const insert = Curso.create({
  coluna:'Value'
})