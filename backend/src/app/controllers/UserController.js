import { Op } from 'sequelize';
import User from '../models/User';

class UserController {
  async index(req, res) {
    const query = {};
    if (req.query.type) query.type = req.query.type;
    if (req.query.email) query.email = req.query.email;
    if (query) {
      return res.json(
        await User.findAll({
          where: query,
        })
      );
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
