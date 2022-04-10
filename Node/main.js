const express = require('express')
const req = require('express/lib/request')
const app = express()

const insereAluno=require('./inserir')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/teste', function (req, res) {
    res.send('ola mundo');
});

app.get('/cadastro', function (req, res){
    res.sendFile(__dirname+'/cadastro.html');
});

app.post('/addAluno', function (req, res){
   insereAluno.inserirAluno(req.body.name,req.body.cnpj,req.body.email,req.body.nome_fantasia).then(function(){
       res.send('Aluno cadastrado')
   }).catch(function(erro){
       res.send("Nao cadastrou"+erro)
   })
    // res.send("Nome do Aluno "+req.body.nome)
});



app.listen(8080)

// EXPRES E HANDLE BARS 

// const express = require('express')
// const req = require('express/lib/request')
// const app = express()
// const handlebars = require('express-handlebars')


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


// app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
// app.set('view engine','handlebars')
// app.set('views','./views')

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
    
// app.get('/cadastro', function (req, res) {
//     res.render('cad-alunos',{layout:false});
// });


// app.post('/addAluno', function (req, res){
//     res.send(req.body.name)
//     // res.send("Nome do Aluno "+req.body.nome)
// });


