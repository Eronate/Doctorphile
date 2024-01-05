'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      models.Patient.belongsTo(models.User, { foreignKey: 'user_id' })
      models.Patient.hasMany(models.Appointment, { foreignKey: 'patient_id' })
    }
  }

  Patient.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Patient',
    }
  )

  return Patient
}