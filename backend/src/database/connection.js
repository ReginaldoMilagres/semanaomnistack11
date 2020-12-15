// Importar
const knex = require('knex');
const configuration = require('../../knexfile');

// criar a conexão de desenvolvimento 
const connection = knex(configuration.development);

// exportar a conexão com o banco de dados
module.exports = connection;
// agora dentro de routes importar configuration
