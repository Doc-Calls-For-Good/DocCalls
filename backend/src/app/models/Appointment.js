import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        doctor_id: Sequelize.INTEGER,
        pacient_id: Sequelize.INTEGER,
        info: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Appointment;
