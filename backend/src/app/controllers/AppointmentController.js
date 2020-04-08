import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
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
          attributes: ['id', 'name', 'email'],
        },
        {
          model: User,
          as: 'pacient',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    return res.json(response);
  }

  async store(req, res) {
    console.log('before error');
    console.log('req.body.doctor_id', req.body.doctor_id);
    console.log('req.body.pacient_id', req.body.pacient_id);
    const exists = await Appointment.findAll({
      where: {
        date: req.body.date,
        [Op.or]: [{ id: req.body.doctor_id }, { id: req.body.pacient_id }],
      },
    });
    console.log('req.body.date->',req.body.date);
    console.log('req.body.doctor_id->',req.body.doctor_id);
    console.log('req.body.pacient_id->',req.body.pacient_id);
    console.log(exists);

    if (exists.length > 0) {
      return res
        .status(401)
        .json({ error: 'Já existe uma consulta agendada para esta data.' });
    }

    const result = await Appointment.create(req.body);

    const getAppointment = await Appointment.findByPk(result.id, {
      attributes: ['id', 'date', 'info'],
      include: [
        {
          model: User,
          as: 'doctor',
          attributes: ['id', 'name', 'email'],
        },
        {
          model: User,
          as: 'pacient',
          attributes: ['id', 'name', 'email'],
        },
      ],
    });

    const emailPacient = getAppointment.pacient.email;
    const namePacient = getAppointment.pacient.name;
    const emailDoctor = getAppointment.doctor.email;
    const nameDoctor = getAppointment.doctor.name;

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

    const formattedDate = format(
      parseISO(req.body.date), 
      "'dia' dd 'de' MMMM', às ' HH:mm'h'",
      { locale: pt }
    );

    const mailMessage = `<p><h2>Olá ${namePacient}</h2></p><p>Nossa consulta foi agendada no ${formattedDate}, anota aí para não esquecer.</p><p>Se tiver alguma dúvida, só responder esse email que te ajudo ou se preferir também pode me ligar.<br/> Abraços do seu amigo e médico</p><h3>Dr ${nameDoctor}</h3>`;


    await transporter.sendMail({
      from: `"${nameDoctor}" <${emailDoctor}>`, // sender address
      to: emailPacient, // list of receivers
      subject: 'Nova consulta', // Subject line
      text: mailMessage, // plain text body
      html: `${mailMessage}`, // html body
    });

    return res.json(getAppointment);
  }

  async update(req, res) {
    const appointment = await Appointment.findByPk(req.userId);
    const result = await appointment.update(req.body);
    return res.json(result);
  }
}

export default new AppointmentController();
