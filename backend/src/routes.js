const express = require("express");

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// rota login
routes.post('/sessions', SessionController.create);

// rota List
routes.get('/ongs', OngController.index );
// rota cadastro
routes.post('/ongs', OngController.create);

//
routes.get('/profile', ProfileController.index);

// rota List
routes.get('/incidents', IncidentController.index);
// rota cadastro
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;