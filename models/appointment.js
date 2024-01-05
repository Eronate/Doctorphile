'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Appointment extends Model {
        static associate(models) {
            models.Appointment.belongsTo(models.Patient)
            models.Appointment.belongsTo(models.Doctor)
            models.Appointment.belongsTo(models.Status)
        }
    }
    Appointment.init(
        {
            patient_id: DataTypes.INTEGER,
            doctor_id: DataTypes.INTEGER,
            status_id: DataTypes.INTEGER,
            date: DataTypes.DATE,
            notes: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Appointment',
        }
    )
    return Appointment
}