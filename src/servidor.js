const porta = 3003

const express = require('express')
const app = express()



app.get('/produtos', (req, res, next) => {
    res.send({nome: 'noteBook', preco: 123.45})//vai convereter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})