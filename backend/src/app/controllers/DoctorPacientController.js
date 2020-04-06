import User from '../models/User';

class DoctorPacientController {
  async index(req, res) {
    console.log(req.params.id);
    const response = await User.findByPk(req.params.id);
    return res.json(response);
  }
}

export default new DoctorPacientController();
