const express = require('express')

const app = express()

app.listen('3000')

/*
Aula GET
app.route('/').get((req, res) => res.send("hello"))
app.route('/sobre').get((req, res) => res.send("hello sobre"))*/

//middleware
app.use(express.json())

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