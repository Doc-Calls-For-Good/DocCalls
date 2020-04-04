import Sequelize from 'sequelize';

import Doctor from '../app/models/Doctor';

import databaseConfig from '../config/database';

const models = [Doctor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
