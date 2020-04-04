import { Op } from 'sequelize';
import Doctor from '../models/Doctor';

class DoctorController {
  async store(req, res) {
    const exists = await Doctor.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }],
      },
    });

    if (exists) {
      return res.status(400).json({ error: 'Usuário já existente.' });
    }

    const {
      id,
      name,
      email,
      cpf,
      phone,
      city,
      uf,
      specialty,
    } = await Doctor.create(req.body);

    return res.json({ id, name, email, cpf, phone, city, uf, specialty });
  }
}

export default new DoctorController();
