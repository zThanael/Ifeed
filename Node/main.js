// const express = require('express')
// const req = require('express/lib/request')
// const app = express()

// const insereAluno=require('./inserir')

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

// app.get('/teste', function (req, res) {
//     res.send('ola mundo');
// });

// app.get('/cadastro', function (req, res){
//     res.sendFile(__dirname+'/cadastro.html');
// });

// app.post('/addAluno', function (req, res){
//    insereAluno.inserirAluno(req.body.name,req.body.cnpj,req.body.email,req.body.nome_fantasia).then(function(){
//        res.send('Aluno cadastrado')
//    }).catch(function(erro){
//        res.send("Nao cadastrou"+erro)
//    })
//     // res.send("Nome do Aluno "+req.body.nome)
// });

// app.listen(8080)



//EXPRES E HANDLE BARS 

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

// Tabelas do banco
const Empresa=require('./models/Empresa')
const Categoria=require('./models/Categoria')
//const Pergunta=require('./models/Pergunta')
const Tipo_pergunta=require('./models/Tipo_pergunta')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/', function (req, res) {
    res.send('Hello World!');
});
    
// Cadastros

// Empresas
app.get('/cadastro', function (req, res) {
    res.render('cad-empresas',{layout:false});
});

app.post('/addEmpresa',function(req,res){
    Empresa.create({
        nome: req.body.name,
        cnpj: req.body.cnpj,
        email: req.body.email,
        nome_fantasia: req.body.nome_fantasia
    }).then(function(){
      res.send("Aluno Cadastrado")
    }).catch(function(erro){
      res.send("Aluno não cadastrado"+erro)
    })
})


// Categorias

app.get('/cadastro_categoria', function (req, res) {
    res.render('cad-categorias',{layout:false});
});

app.post('/addCategoria',function(req,res){
    Categoria.create({
        categoria: req.body.categoria,
    }).then(function(){
      res.send("Categoria Cadastrada")
    }).catch(function(erro){
      res.send("Categoria não cadastrada"+erro)
    })
})

// Perguntas

app.get('/cadastro_pergunta', function (req, res) {
    Tipo_pergunta.findAll({
        tipo_pergunta: ['tipo']
    }).then(function(tipo_pergunta){
        res.render('cad-perguntas',{layout:false,tipo_pergunta:tipo_pergunta})
    })
});

app.post('/addPergunta',function(req,res){
//     Pergunta.create({
//         id_tipo_categoria: req.body.type,
//     }).then(function(){
//       res.send("Categoria Cadastrada")
//     }).catch(function(erro){
//       res.send("Categoria não cadastrada"+erro)
//     })
    console.log(req.body.type)
})




app.get('/empresas', function (req, res){
    Empresa.findAll({
        empresas: ['nome','cnpj']
    }).then(function(empresas){
        res.render('empresas',{layout:false,empresas:empresas})
    })
})


app.listen(8080)