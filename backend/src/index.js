const express = require('express')
const cors = require('cors');
const routes = require("./routes")

const app = express()

app.use(cors());
app.use(express.json())
app.use(routes)

//Rotas e recurso:
// Metodos HTTP
// GET: Buscar, listar alguma informação do back-end (qualquer tipo de retorno)
// POST: sempre que a gente quiser criar uma informção no back-end
// PUT: Alterar informação back-end
// DELETE: Para deletar informação no back-end 

// Tipos de parâmetros:
// Query Params: Parâmetros nomeados enviados  na rota após "?" (filtros, paginação)
// Route Params: Parâmetros utilizados para identificar recursos
// Resquest Body: Corpo da requisição, utilizado para criar ou alterar recursos. 

// BANCO DE DADOS
// SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
// NoSQL: MongoDB, CouchDB, etc.
// Vamos utilizar nessa aplicação o SQLite  
app.listen(3333)