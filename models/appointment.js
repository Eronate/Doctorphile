'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.Doctor, { foreignKey: 'doctor_id' });
      Appointment.belongsTo(models.Patient, { foreignKey: 'patient_id' });
      Appointment.belongsTo(models.Status, { foreignKey: 'status_id' });
    }
  }

  Appointment.init(
    {
        doctor_id: DataTypes.INTEGER,
        patient_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        date: DataTypes.DATE,
        notes: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Appointment',
    }
  );
  return Appointment;
};
