import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        info: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'doctor_id', as: 'doctor' });
    this.belongsTo(models.User, { foreignKey: 'pacient_id', as: 'pacient' });
  }
}

export default Appointment;
