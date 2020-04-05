import { parseISO } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';

class AppointmentController {
  async index(req, res) {
    return res.json(await Appointment.findAll());
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

    // const result = await Appointment.create(req.body);

    return res.json({ ok: true });
  }

  async update(req, res) {
    const appointment = await Appointment.findByPk(req.userId);
    const result = await appointment.update(req.body);
    return res.json(result);
  }
}

export default new AppointmentController();
