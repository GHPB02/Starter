const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

//middleware
app.use(express.json())

/*
Aula GET
app.route('/').get((req, res) => res.send("hello"))
app.route('/sobre').get((req, res) => res.send("hello sobre"))*/

/*
Aula POST
app.route('/').post((req, res) => res.send(req.body))*/

/*
Aula PUT
let author = "Gabriel"
app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})*/

/*
Aula DELETE
app.route('/:identificador').delete((req, res) => {
    res.send(req.params.identificador)
})*/

/*
Aula BODY
app.route('/').post((req, res) => {
  const {nome, cidade} = req.body
  res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})*/

/*
Aula PARAMETROS
app.route('/').get((req,res) => res.send("oi"))

app.route('/:variavel').get((req,res) => res.send(req.params.variavel))

app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))*/

/*
Aula QUERY
app.route('/').get((req,res) => res.send(req.query.nome))

app.route('/about/user').get((req,res) => res.send(req.query))*/

/*
Aula AXIOS
app.route('/').get((req,res) => {
 axios.get('https://api.github.com/users/GHPB02')
   .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
   .catch(error => console.log(error))
})*/