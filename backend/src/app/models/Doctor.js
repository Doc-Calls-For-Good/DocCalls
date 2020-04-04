import Sequelize, { Model } from 'sequelize';

class Doctor extends Model {
  static init(sequelize) {
    super.init({
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      cpf: Sequelize.INTEGER,
      phone: Sequelize.STRING,
      city: Sequelize.STRING,
      uf: Sequelize.STRING,
      specialty: Sequelize.STRING,
    },
    {
      sequelize,
    });
  }
}

export default Doctor;
