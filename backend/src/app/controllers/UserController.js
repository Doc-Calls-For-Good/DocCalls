import { Op } from 'sequelize';
import User from '../models/User';

class UserController {
  async index(req, res) {
    if (req.query.type) {
      const response = await User.findAll({
        where: {
          type: req.query.type
        },
      });
      if (!response) {
        return res.status(401).json({ error: 'Usuário não cadastrado.' });
      }
      return res.json(response);
    }
    if (req.query.email) {
      
      const response = await User.findOne({
        where: {
          email: req.query.email
        },
      });
      if (!response) {
        return res.status(401).json({ error: 'Usuário não cadastrado.' });
      }
      return res.json(response);
    }
    return res.json(await User.findAll());
  }

  async store(req, res) {
    const exists = await User.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }],
      },
    });

    if (exists) {
      return res.status(400).json({ error: 'Usuário já existente.' });
    }

    const result = await User.create(req.body);

    return res.json(result);
  }

  async update(req, res) {
    const user = await User.findByPk(req.userId);
    const result = await user.update(req.body);
    return res.json(result);
  }
}

export default new UserController();
