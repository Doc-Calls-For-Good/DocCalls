import { Op } from 'sequelize';
import User from '../models/User';

class UserController {
  async store(req, res) {
    /**
     * type
     * 0 - Médico
     * 1 - Paciente
     */
    const { type } = req.params;

    const exists = await User.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }],
      },
    });

    if (exists) {
      return res.status(400).json({ error: 'Usuário já existente.' });
    }

    const data = {
      ...req.body,
      type,
    };

    const {
      id,
      name,
      email,
      cpf,
      phone,
      city,
      uf,
      specialty,
    } = await User.create(data);

    return res.json({ id, name, email, cpf, phone, city, uf, specialty, type });
  }
}

export default new UserController();
