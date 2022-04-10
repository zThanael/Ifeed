// const db=require('./conexao')

// exports.inserirAluno=function(parametro){

//     async function inserir(parametro){
//     await db.connect()
//     //const novoAluno="insert into tipo_pergunta (tipo) values ($1)"
//     await db.query(novoAluno,[parametro])
//     //await db.end()
// }
//     return(inserir(parametro))
// }

const db=require('./conexao')

exports.inserirAluno=function(nome,cnpj,email,nome_fantasia){

    async function inserir(nome,cnpj,email,nome_fantasia){
    await db.connect()
    const novoAluno="insert into empresas (nome,cnpj,email,nome_fantasia) values ($1,$2,$3,$4)"
    await db.query(novoAluno,[nome,cnpj,email,nome_fantasia])
    //await db.end()
}
    return(inserir(nome,cnpj,email,nome_fantasia))
}
