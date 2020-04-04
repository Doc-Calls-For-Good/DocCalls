import express from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = express.Router();

routes.post('/users/:type', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;
