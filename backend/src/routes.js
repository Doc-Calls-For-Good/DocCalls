import express from 'express';

import DoctorController from './app/controllers/DoctorController';

const routes = express.Router();

routes.post('/doctors', DoctorController.store);

export default routes;
