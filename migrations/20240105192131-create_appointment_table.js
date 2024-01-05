'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      patient_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      doctor_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      status_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      date: {
        allowNull: false,
        type: Sequelize.DATE
      },

      notes: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments')
  }
};
