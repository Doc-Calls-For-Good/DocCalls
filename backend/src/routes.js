import express from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AppointmentController from './app/controllers/AppointmentController';
import DoctorPacientController from './app/controllers/DoctorPacientController';

import authMiddleware from './app/middlewares/auth';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/users/:id', DoctorPacientController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

export default routes;
