
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('doctors', {
    id: Sequelize.INTEGER,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
