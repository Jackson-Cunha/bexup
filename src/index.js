const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

var pessoas  = [{"id": 0, "nome": "Mário"}, {"id": 1, "nome": "Paulo"}, {"id": 2, "nome": "José"}, {"id": 3, "nome": "Maria"}]

app.get("", (req, res)=>{
    res.send("Tela inicial")
})

app.get("/pessoas", (req, res) => {
    res.send(pessoas)
})

app.get("/pessoas/:id", (req, res) => {
    var p = pessoas[ req.params.id]
    res.send(p)
})

app.post("/pessoas/create", (req, res) => {

    pessoas.push(req.body)
    res.send(pessoas)
})



app.listen(3000, () => console.log("Listen 3000"))