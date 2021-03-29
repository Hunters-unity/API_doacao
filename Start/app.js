const express = require('express')
// const bodyParser = require('body-parser') 

//Importação das rotas
var escolasRouter = require('../App/Routes/escolas')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

require('../App/Controllers/DoacaoController')(app);
app.use('/escolas', escolasRouter)


app.listen(3000, () => console.log('servidor rodando na porta 3000'))

