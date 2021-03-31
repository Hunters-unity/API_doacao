const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

require('../App/Routes/doacao')(app);
require('../App/Routes/escolas')(app);
require('../App/Routes/perfil')(app);
// require('../App/Routes/alunos')(app);


app.listen(3001, () => console.log('servidor rodando na porta 3001'))

