const db=require('./conexao')

async function listar(){
    await db.connect()
    result=await db.query('select * from tipo_pergunta')
    console.log('Alunos')
    console.log(result.rows)
    await db.end()
}

listar()