import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, cpf } = req.body;
    const user = await User.findOne({ where: { email, cpf } });

    if (!user) {
      return res.status(401).json({ error: 'Usuário não encontrado' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        cpf,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
