
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('doctors', {
    id: Sequelize.INTEGER,
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
};
