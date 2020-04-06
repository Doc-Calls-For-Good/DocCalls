import { parseISO } from 'date-fns';
import { Op } from 'sequelize';
import nodemailer from 'nodemailer';
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
    console.log(req.data);
    const exists = await Appointment.findOne({
      where: {
        date: req.body.date,
        [Op.or]: [{ id: req.body.doctor_id }, { id: req.body.pacient_id }],
      },
    });

    if (exists) {
      return res
        .status(401)
        .json({ error: 'Já existe uma consulta agendada para esta data.' });
    }
    console.log('passou do esquema');

    const result = await Appointment.create(req.body);

    const transporter = nodemailer.createTransport({
      adress: 'smtp.mailtrap.io',
      host: 'smtp.mailtrap.io',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: '3d4097cb134dba', // generated ethereal user
        pass: 'e4d60dabfa6e6f', // generated ethereal password
      },
    });

    const info = await transporter.sendMail({
      from: '"Alex " <foo@example.com>', // sender address
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Nova consulta', // Subject line
      text: `Foi cadastrado uma nova consulta para o dia ${req.body.date} `, // plain text body
      html: '<b>Hello world?</b>', // html body
    });
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return res.json(result);
  }

  async update(req, res) {
    const appointment = await Appointment.findByPk(req.userId);
    const result = await appointment.update(req.body);
    return res.json(result);
  }
}

export default new AppointmentController();
