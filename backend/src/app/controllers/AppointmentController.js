import { parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async index(req, res) {
    const response = await Appointment.findAll({
      attributes: ['id', 'date', 'info'],
      include: [
        {
          model: User,
          as: 'doctor',
          attributes: ['id', 'name'],
        },
        {
          model: User,
          as: 'pacient',
          attributes: ['id', 'name'],
        },
      ],
    });
    return res.json(response);
  }

  async store(req, res) {
    const date = parseISO(req.body.date);
    const exists = await Appointment.findOne({
      where: {
        date,
        [Op.or]: [{ id: req.body.doctor_id }, { id: req.body.pacient_id }],
      },
    });

    if (exists) {
      return res
        .status(401)
        .json({ error: 'Já existe uma consulta agendada para esta data.' });
    }

    const result = await Appointment.create(req.body);

    return res.json(result);
  }

  async update(req, res) {
    const appointment = await Appointment.findByPk(req.userId);
    const result = await appointment.update(req.body);
    return res.json(result);
  }
}

export default new AppointmentController();
