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
const Empresa=require('./models/Empresa')


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views','./views')

app.get('/', function (req, res) {
    res.send('Hello World!');
});
    
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

app.get('/empresas', function (req, res){
    Empresa.findAll({
        empresas: ['nome','cnpj']
    }).then(function(empresas){
        res.render('empresas',{layout:false,empresas:empresas})
    })
})


app.listen(8080)